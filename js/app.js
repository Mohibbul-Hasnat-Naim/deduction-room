document.addEventListener('DOMContentLoaded', () => {
  // BUMP THIS VERSION WHEN YOU ADD OR UPDATE CASES (e.g., "1.2")
  const APP_VERSION = "1.4";

  // Game State
  let currentCaseIndex = 0;
  let currentCase = CASES[currentCaseIndex];
  let unlockedClueIds = new Set();
  let connections = [];
  let selectedClueId = null;
  let score = 1000;

  // LocalStorage Progress & Active Session Data Structure
  let userProgress = JSON.parse(localStorage.getItem('deduction_room_save')) || {
    version: APP_VERSION,
    completedCases: {},
    highestRank: "Novice Detective",
    lastCaseIndex: 0,
    activeSession: null
  };

  // If app version changed, flush stale active session while keeping completed progress
  if (userProgress.version !== APP_VERSION) {
    userProgress.version = APP_VERSION;
    userProgress.activeSession = null;
    localStorage.setItem('deduction_room_save', JSON.stringify(userProgress));
  }

  // DOM Elements
  const caseSelect = document.getElementById('case-select');
  const cluesGrid = document.getElementById('clues-grid');
  const suspectsList = document.getElementById('suspects-list');
  const scoreDisplay = document.getElementById('score-display');
  const cluesRatioDisplay = document.getElementById('clues-ratio-display');
  const notesTextarea = document.getElementById('detective-notes');
  const canvas = document.getElementById('string-canvas');
  const ctx = canvas.getContext('2d');

  // Career Elements (if present in HTML)
  const bestScoreDisplay = document.getElementById('best-score-display');
  const caseStarsDisplay = document.getElementById('case-stars-display');
  const careerRankDisplay = document.getElementById('career-rank-display');

  // Modals & Forms
  const accusationModal = document.getElementById('accusation-modal');
  const resultModal = document.getElementById('result-modal');
  const deductionForm = document.getElementById('deduction-form');
  const culpritSelect = document.getElementById('culprit-select');
  const falseSelect = document.getElementById('false-statement-select');
  const gunSelect = document.getElementById('smoking-gun-select');

  function initApp() {
    populateCaseDropdown();
    
    // Resume active session if present and matching a valid case ID
    if (userProgress.activeSession && userProgress.activeSession.caseId) {
      const savedIndex = CASES.findIndex(c => c.id === userProgress.activeSession.caseId);
      if (savedIndex !== -1) {
        loadSession(userProgress.activeSession, savedIndex);
        window.addEventListener('resize', setupCanvas);
        return;
      }
    }

    // Otherwise load last selected case or default to first
    const targetIndex = (userProgress.lastCaseIndex < CASES.length) ? userProgress.lastCaseIndex : 0;
    loadCase(targetIndex);

    window.addEventListener('resize', setupCanvas);
  }

  function saveProgress() {
    localStorage.setItem('deduction_room_save', JSON.stringify(userProgress));
  }

  function saveActiveSession() {
    userProgress.activeSession = {
      caseId: currentCase.id,
      unlockedClueIds: Array.from(unlockedClueIds),
      connections: connections,
      score: score
    };
    userProgress.lastCaseIndex = currentCaseIndex;
    saveProgress();
  }

  function clearActiveSession() {
    userProgress.activeSession = null;
    saveProgress();
  }

  function populateCaseDropdown() {
    caseSelect.innerHTML = '';
    CASES.forEach((c, index) => {
      const option = document.createElement('option');
      option.value = index;
      const isCompleted = userProgress.completedCases[c.id];
      const checkmark = isCompleted ? ' ✔' : '';
      option.textContent = `${c.id} — ${c.title}${checkmark}`;
      if (isCompleted) option.classList.add('completed-opt');
      caseSelect.appendChild(option);
    });

    caseSelect.onchange = (e) => {
      loadCase(parseInt(e.target.value, 10));
    };
  }

  function loadCase(index) {
    currentCaseIndex = index;
    currentCase = CASES[currentCaseIndex];
    unlockedClueIds = new Set(currentCase.clues.slice(0, currentCase.initialUnlocked).map(c => c.id));
    connections = [];
    selectedClueId = null;
    score = 1000;

    caseSelect.value = currentCaseIndex;
    document.getElementById('case-title').textContent = currentCase.title;
    document.getElementById('case-description').textContent = currentCase.description;
    document.getElementById('difficulty-badge').textContent = currentCase.difficulty;

    saveActiveSession();
    updateCareerDisplay();
    loadNotes();
    renderClues();
    renderSuspects();
    populateFormOptions();
    updateScore();
    setupCanvas();
  }

  function loadSession(session, caseIndex) {
    currentCaseIndex = caseIndex;
    currentCase = CASES[currentCaseIndex];
    unlockedClueIds = new Set(session.unlockedClueIds);
    connections = session.connections || [];
    selectedClueId = null;
    score = session.score || 1000;

    caseSelect.value = currentCaseIndex;
    document.getElementById('case-title').textContent = currentCase.title;
    document.getElementById('case-description').textContent = currentCase.description;
    document.getElementById('difficulty-badge').textContent = currentCase.difficulty;

    updateCareerDisplay();
    loadNotes();
    renderClues();
    renderSuspects();
    populateFormOptions();
    updateScore();
    setupCanvas();
  }

  function updateCareerDisplay() {
    const caseData = userProgress.completedCases[currentCase.id];
    if (bestScoreDisplay) {
      bestScoreDisplay.textContent = caseData ? `Best: ${caseData.bestScore} pts` : 'Best: --';
    }
    if (caseStarsDisplay) {
      caseStarsDisplay.textContent = caseData ? ('★'.repeat(caseData.stars) + '☆'.repeat(3 - caseData.stars)) : '☆☆☆';
    }
    if (careerRankDisplay) {
      careerRankDisplay.textContent = `Rank: ${userProgress.highestRank}`;
    }
  }

  function setupCanvas() {
    const corkboard = document.getElementById('corkboard');
    canvas.width = corkboard.clientWidth;
    canvas.height = corkboard.clientHeight;
    drawStrings();
  }

  function renderClues() {
    cluesGrid.innerHTML = '';
    currentCase.clues.forEach((clue) => {
      const isUnlocked = unlockedClueIds.has(clue.id);
      const card = document.createElement('div');
      card.className = `clue-card ${isUnlocked ? '' : 'locked'} ${selectedClueId === clue.id ? 'selected' : ''}`;
      card.dataset.id = clue.id;

      if (isUnlocked) {
        card.innerHTML = `
          <div class="pin"></div>
          <h4>${clue.title}</h4>
          <p>${clue.text}</p>
        `;
        card.addEventListener('click', () => selectClue(clue.id));
      } else {
        card.innerHTML = `
          <h4>Locked Clue</h4>
          <p>Click to unlock (-100 pts)</p>
        `;
        card.addEventListener('click', () => unlockClue(clue));
      }
      cluesGrid.appendChild(card);
    });
    cluesRatioDisplay.textContent = `${unlockedClueIds.size} / ${currentCase.clues.length}`;
  }

  function renderSuspects() {
    suspectsList.innerHTML = '';
    currentCase.suspects.forEach((suspect) => {
      const card = document.createElement('div');
      card.className = 'suspect-card';
      card.dataset.id = suspect.id;
      card.innerHTML = `
        <div class="suspect-header">
          <strong>${suspect.name}</strong>
        </div>
        <span class="suspect-role">${suspect.role}</span>
        <div class="statement-box">"${suspect.statement}"</div>
      `;
      card.addEventListener('click', () => connectSuspect(suspect.id));
      suspectsList.appendChild(card);
    });
  }

  function populateFormOptions() {
    culpritSelect.innerHTML = '';
    falseSelect.innerHTML = '';
    gunSelect.innerHTML = '';

    currentCase.suspects.forEach(s => {
      culpritSelect.innerHTML += `<option value="${s.id}">${s.name}</option>`;
      falseSelect.innerHTML += `<option value="${s.id}">${s.name}'s Statement</option>`;
    });

    currentCase.clues.forEach(c => {
      gunSelect.innerHTML += `<option value="${c.id}">${c.title}</option>`;
    });
  }

  function unlockClue(clue) {
    if (unlockedClueIds.has(clue.id)) return;
    unlockedClueIds.add(clue.id);
    score -= clue.cost;
    audio.playUnlockSound();
    updateScore();
    renderClues();
    saveActiveSession();
  }

  function selectClue(clueId) {
    audio.playPinSound();
    selectedClueId = selectedClueId === clueId ? null : clueId;
    renderClues();
  }

  function connectSuspect(suspectId) {
    if (!selectedClueId) return;
    audio.playPinSound();
    
    const existingIndex = connections.findIndex(
      c => c.clueId === selectedClueId && c.suspectId === suspectId
    );

    if (existingIndex > -1) {
      connections.splice(existingIndex, 1);
    } else {
      connections.push({ clueId: selectedClueId, suspectId });
    }

    selectedClueId = null;
    renderClues();
    drawStrings();
    saveActiveSession();
  }

  function drawStrings() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const corkboardRect = document.getElementById('corkboard').getBoundingClientRect();

    connections.forEach(conn => {
      const clueEl = document.querySelector(`.clue-card[data-id="${conn.clueId}"]`);
      const suspectEl = document.querySelector(`.suspect-card[data-id="${conn.suspectId}"]`);

      if (clueEl && suspectEl) {
        const clueRect = clueEl.getBoundingClientRect();
        const suspectRect = suspectEl.getBoundingClientRect();

        const x1 = clueRect.left + clueRect.width / 2 - corkboardRect.left;
        const y1 = clueRect.top + clueRect.height / 2 - corkboardRect.top;
        const x2 = suspectRect.left + suspectRect.width / 2 - corkboardRect.left;
        const y2 = suspectRect.top + suspectRect.height / 2 - corkboardRect.top;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    });
  }

  function updateScore() {
    scoreDisplay.textContent = score;
  }

  function loadNotes() {
    const saved = localStorage.getItem(`notes_${currentCase.id}`);
    notesTextarea.value = saved || '';
  }

  notesTextarea.addEventListener('input', (e) => {
    localStorage.setItem(`notes_${currentCase.id}`, e.target.value);
  });

  document.getElementById('deduce-btn').addEventListener('click', () => {
    accusationModal.classList.remove('hidden');
  });

  document.getElementById('close-modal-btn').addEventListener('click', () => {
    accusationModal.classList.add('hidden');
  });

  deductionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    accusationModal.classList.add('hidden');

    const chosenCulprit = culpritSelect.value;
    const chosenFalse = falseSelect.value;
    const chosenGun = gunSelect.value;

    const sol = currentCase.solution;
    const isCorrect = chosenCulprit === sol.culpritId &&
                      chosenFalse === sol.falseStatementSuspectId &&
                      chosenGun === sol.smokingGunClueId;

    showResults(isCorrect);
  });

  function showResults(isCorrect) {
    resultModal.classList.remove('hidden');
    const title = document.getElementById('result-title');
    const msg = document.getElementById('result-message');
    const icon = document.getElementById('result-icon');
    const starsElement = document.getElementById('stars-awarded');

    const extraCluesUsed = Math.max(0, unlockedClueIds.size - currentCase.initialUnlocked);
    const penalty = extraCluesUsed * 100;
    const finalScore = isCorrect ? Math.max(100, score) : 0;

    document.getElementById('base-score-val').textContent = 1000;
    document.getElementById('penalty-score-val').textContent = `-${penalty}`;
    document.getElementById('final-score-val').textContent = finalScore;

    let rank = "Novice Detective";
    let stars = 0;

    if (isCorrect) {
      if (finalScore >= 900) {
        rank = "Master Detective";
        stars = 3;
      } else if (finalScore >= 700) {
        rank = "Senior Inspector";
        stars = 2;
      } else {
        rank = "Junior Investigator";
        stars = 1;
      }

      const existing = userProgress.completedCases[currentCase.id] || { bestScore: 0, stars: 0 };
      userProgress.completedCases[currentCase.id] = {
        bestScore: Math.max(existing.bestScore, finalScore),
        stars: Math.max(existing.stars, stars),
        rank: rank
      };

      const rankWeights = { "Master Detective": 3, "Senior Inspector": 2, "Junior Investigator": 1, "Novice Detective": 0 };
      if (rankWeights[rank] > (rankWeights[userProgress.highestRank] || 0)) {
        userProgress.highestRank = rank;
      }

      clearActiveSession();
      populateCaseDropdown();
      caseSelect.value = currentCaseIndex;
      updateCareerDisplay();
    } else {
      rank = "Case Unsolved";
      stars = 0;
    }

    if (starsElement) {
      starsElement.textContent = '★'.repeat(stars) + '☆'.repeat(3 - stars);
    }
    document.getElementById('detective-rank-display').textContent = rank;

    if (isCorrect) {
      icon.textContent = "✔";
      title.textContent = "Case Solved!";
      msg.textContent = "Brilliant deduction! You matched all physical evidence with the contradictions in the suspect statements.";
    } else {
      icon.textContent = "✖";
      title.textContent = "Incorrect Deduction";
      msg.textContent = "Your theory did not align with all available physical evidence.";
    }
  }

  document.getElementById('play-again-btn').addEventListener('click', () => {
    resultModal.classList.add('hidden');
    loadCase(currentCaseIndex);
  });

  document.getElementById('sound-toggle').addEventListener('click', (e) => {
    const isMuted = audio.toggleMute();
    e.target.textContent = isMuted ? '🔇' : '🔊';
  });

  document.getElementById('reset-case-btn').addEventListener('click', () => {
    if (confirm("Reset investigation progress for this case?")) {
      loadCase(currentCaseIndex);
    }
  });

  const clearDataBtn = document.getElementById('clear-data-btn');
  if (clearDataBtn) {
    clearDataBtn.addEventListener('click', () => {
      if (confirm("Are you sure you want to delete all saved progress?")) {
        localStorage.removeItem('deduction_room_save');
        CASES.forEach(c => localStorage.removeItem(`notes_${c.id}`));
        location.reload();
      }
    });
  }

  initApp();
});