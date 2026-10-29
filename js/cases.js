const CASES = [
  {
    id: "CASE-001",
    title: "The Stolen Bunsen Burner",
    difficulty: "Easy",
    description: "A brass Bunsen burner went missing from Chemistry Lab 101 during the 15-minute afternoon recess (14:00 – 14:15). Three students were seen nearby. Exactly one student is lying.",
    initialUnlocked: 2,
    suspects: [
      {
        id: "s1",
        name: "Leo Dash",
        role: "Chemistry Student",
        statement: "I was at my desk eating lunch until 14:15. I never touched any glass lab equipment or burners today."
      },
      {
        id: "s2",
        name: "Maya Lin",
        role: "Lab Assistant",
        statement: "I locked the chemical cabinet at 14:05 and left for the library. Leo was sitting alone near the front row."
      },
      {
        id: "s3",
        name: "Sam Brody",
        role: "Physics Student",
        statement: "I dropped off lab reports at 14:10 with the teacher and left immediately. I didn't see anyone near the burner rack."
      }
    ],
    clues: [
      {
        id: "c1",
        title: "Soot Residue on Desk",
        text: "Black copper-soot smudge marks matching Bunsen burner bases were found on Desk #4 (Leo's assigned desk).",
        cost: 0
      },
      {
        id: "c2",
        title: "Library Security Log",
        text: "Maya Lin's student ID card swiped into the campus library entrance gate at 14:08.",
        cost: 0
      },
      {
        id: "c3",
        title: "Teacher's Drop-Box Timestamp",
        text: "Sam Brody's physics paper was stamped inside the teacher's office box at 14:11.",
        cost: 100
      },
      {
        id: "c4",
        title: "Heat-Resistant Glove Box",
        text: "A pair of heat-resistant silicon gloves on Desk #4 was warm to the touch at 14:20.",
        cost: 100
      },
      {
        id: "c5",
        title: "Hallway Security Camera",
        text: "Leo Dash was recorded exiting Lab 101 at 14:14 carrying a bulky blue backpack.",
        cost: 100
      },
      {
        id: "c6",
        title: "Chemical Cabinet Lock Status",
        text: "The main chemical cabinet was confirmed locked when inspected by faculty at 14:20.",
        cost: 100
      },
      {
        id: "c7",
        title: "Backpack Storage Rack Log",
        text: "Sam Brody left his backpack in the main hallway cubbies for the entire recess duration.",
        cost: 100
      }
    ],
    solution: {
      culpritId: "s1",
      falseStatementSuspectId: "s1",
      smokingGunClueId: "c1"
    }
  },
  {
    id: "CASE-007",
    title: "The Missing Oscilloscope",
    difficulty: "Medium",
    description: "A precision oscilloscope disappeared from Sub-Level 3 between 22:00 and 23:00. Three researchers were present. Exactly one researcher's statement is completely false.",
    initialUnlocked: 2,
    suspects: [
      {
        id: "s1",
        name: "Dr. Aris Thorne",
        role: "Lead Quantum Physicist",
        statement: "I was calibrating the laser array until 22:45. I never went near the equipment storage bay or used any keycards."
      },
      {
        id: "s2",
        name: "Elena Rostova",
        role: "Senior Lab Technician",
        statement: "I logged out of the central terminal at 22:15 and left for the breakroom. I saw Dr. Thorne working at his desk."
      },
      {
        id: "s3",
        name: "Marcus Vance",
        role: "Research Assistant",
        statement: "I was taking inventory in Storage Room B all evening. I didn't see anyone enter the main laboratory."
      }
    ],
    clues: [
      {
        id: "c1",
        title: "Keycard Access Logs",
        text: "Keycard #402 (assigned to Dr. Thorne) unlocked Storage Room B at 22:32.",
        cost: 0
      },
      {
        id: "c2",
        title: "Terminal Login History",
        text: "Terminal 03 was active under Elena's ID until 22:14. No further activity logged.",
        cost: 0
      },
      {
        id: "c3",
        title: "Dust Pattern on Storage Shelf",
        text: "The oscilloscope was moved at approximately 22:30. Drag marks point toward the secondary exit.",
        cost: 100
      },
      {
        id: "c4",
        title: "Security Camera Footage",
        text: "A figure wearing a lead-lined lab coat carrying a heavy rectangular case exited at 22:38.",
        cost: 100
      },
      {
        id: "c5",
        title: "Laser Calibration Logbook",
        text: "Laser array calibrations require two-factor confirmation. Last entry was logged at 21:00.",
        cost: 100
      },
      {
        id: "c6",
        title: "Breakroom Coffee Dispenser",
        text: "Coffee dispenser logged a brew request from Elena Rostova's smart badge at 22:20.",
        cost: 100
      },
      {
        id: "c7",
        title: "Marcus's Inventory Sheet",
        text: "Inventory log for Storage Room B was updated digitally at 22:50, but physical tags are missing.",
        cost: 100
      }
    ],
    solution: {
      culpritId: "s1",
      falseStatementSuspectId: "s1",
      smokingGunClueId: "c1"
    }
  },
  {
    id: "CASE-008",
    title: "The Vanishing Microchip",
    difficulty: "Hard",
    description: "An experimental neural microchip was stolen from Vault 4 during a scheduled power maintenance outage between 02:00 and 03:00. Three facility members had access during the blackout. Exactly one statement is a complete lie.",
    initialUnlocked: 2,
    suspects: [
      {
        id: "s1",
        name: "Chief Security Officer Miller",
        role: "Head of Facility Security",
        statement: "I remained stationed in the central guard kiosk throughout the power outage and never entered Vault 4."
      },
      {
        id: "s2",
        name: "Dr. Evelyn Reed",
        role: "Biomedical Engineer",
        statement: "I was running emergency generator diagnostics in the basement circuit room until 02:40."
      },
      {
        id: "s3",
        name: "Julian Sterling",
        role: "Systems Administrator",
        statement: "I was remotely resetting the server racks from workstation B until 02:20, then went to my office."
      }
    ],
    clues: [
      {
        id: "c1",
        title: "Biometric Vault Sensor",
        text: "Vault 4's auxiliary thermal sensor recorded a person entering at 02:15 during the power bypass.",
        cost: 0
      },
      {
        id: "c2",
        title: "Workstation B Power Log",
        text: "Workstation B experienced total blackout power loss at 02:00 and remained offline until 03:15.",
        cost: 0
      },
      {
        id: "c3",
        title: "Guard Kiosk Camera Buffer",
        text: "Guard kiosk camera operated on emergency battery; backup footage shows the kiosk empty from 02:10 to 02:30.",
        cost: 100
      },
      {
        id: "c4",
        title: "Generator Room Access Reader",
        text: "Badge logs confirm Dr. Reed tapped into the basement circuit room at 02:05 and exited at 02:42.",
        cost: 100
      },
      {
        id: "c5",
        title: "Static-Free Glove Traces",
        text: "Microscopic silicon residue matching Vault 4 container pads was found on a pair of discarded gloves in Kiosk trash.",
        cost: 100
      },
      {
        id: "c6",
        title: "Emergency Lighting Controller",
        text: "Manual override switch for Vault 4 emergency lights was flipped at 02:12 using high-clearance security credentials.",
        cost: 100
      },
      {
        id: "c7",
        title: "Server Backup Log",
        text: "System diagnostics were automatically scheduled and executed at 01:50 prior to the outage.",
        cost: 100
      }
    ],
    solution: {
      culpritId: "s3",
      falseStatementSuspectId: "s3",
      smokingGunClueId: "c2"
    }
  }
];