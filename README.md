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