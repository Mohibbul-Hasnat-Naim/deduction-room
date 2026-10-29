# 🕵️ The Deduction Room

> A Sherlock-style logic investigation game built for the web.

**The Deduction Room** is an interactive, browser-based detective game where players act as investigators solving high-stakes mysteries. Each case presents a scene, three suspects, and seven evidence cards. With exactly **one suspect lying**, players must examine clues, draw connections on a corkboard, unlock evidence, and deduce the true culprit.

---

## 📸 Key Features & Core Mechanics

- 🕵️ **Logic Puzzle Matrix**: Every case features 3 suspects where exactly 1 statement is false.
- 📌 **Interactive Corkboard Evidence Board**: Select an unlocked clue card and click a suspect profile to draw dynamic string connections on an HTML5 canvas.
- 🔓 **Clue Unlocking & Penalty System**: Cases start with 2 unlocked clues. Unlocking additional clues costs score penalties (-100 pts each), incentivizing sharp deduction over brute force.
- 📝 **Detective's Notebook**: Built-in notepad that autosaves working theories to LocalStorage as you type.
- 🏆 **Career Record & LocalStorage Persistence**:
  - Automatically saves mid-investigation board states (resume where you left off).
  - Tracks star ratings (1★ to 3★) based on final score.
  - Awards Detective Rank Badges (`Junior Investigator`, `Senior Inspector`, `Master Detective`).
  - Keeps track of completed case checkmarks and high scores.
- 🔊 **Web Audio Sound Effects**: Custom audio cues for clue pinning and unlocking (with a toggleable mute switch).
- 📱 **Mobile & Desktop Responsive**: Clean UI designed with standard system fonts, accessible touch targets, and responsive CSS grid layouts.

---

## 📁 Project Structure

```text
deduction-room/
├── index.html       # Game structure, HUD, panels, and modal popups
├── styles.css       # Responsive styling, color variables, layout grid
├── README.md        # Documentation
└── js/
    ├── cases.js     # Array containing all case objects and solutions
    ├── audio.js     # Web Audio API sound effect manager
    └── app.js       # Game engine, canvas strings, score calculation, LocalStorage


➕ Adding New Cases
The engine is completely data-driven. Adding new cases does not require touching index.html or app.js. You only need to append a new case object to the CASES array inside js/cases.js.

Case Data Format
Each case must follow this exact Schema:

{
  id: "CASE-002",                          // Unique string ID
  title: "The Case Title",                 // Short descriptive title
  difficulty: "Easy" | "Medium" | "Hard",  // Difficulty level badge
  description: "Brief background text...", // Narrative setup
  initialUnlocked: 2,                     // How many clues start unlocked (default: 2)
  suspects: [
    {
      id: "s1",                            // Unique suspect ID
      name: "Full Name",
      role: "Job Title or Role",
      statement: "The exact quote stated by the suspect."
    },
    // Exactly 3 suspects per case
  ],
  clues: [
    {
      id: "c1",                            // Unique clue ID
      title: "Clue Name",
      text: "Factual evidence text describing what was found.",
      cost: 0                             // 0 for initial clues, 100 for locked clues
    },
    // Exactly 7 clues per case
  ],
  solution: {
    culpritId: "s1",                       // ID of the suspect who committed the crime
    falseStatementSuspectId: "s1",         // ID of the suspect who lied in their statement
    smokingGunClueId: "c1"                 // ID of the clue that proves the contradiction
  }
}

Steps to Add a Case
Open js/cases.js.

Add your new case object to the CASES array.

Save the file and refresh your browser. The new case will automatically populate in the SELECT CASE drop-down menu in the HUD.

🛠️ Roadmap & Future Enhancements
[ ] Interactive Case Map: Adding visual maps or floor plans to investigate rooms.

[ ] Multi-Liar / Hardcore Difficulty: Cases where 2 out of 4 suspects lie.

[ ] Global Leaderboard: Share scores and compare detective ranks online.

[ ] Timer Mode: Optional countdown for an added challenge.

📜 License
Distributed under the MIT License. Feel free to use, modify, and expand upon this codebase!