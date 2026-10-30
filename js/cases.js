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
    id: "CASE-002",
    title: "The Phantom Keylogger",
    difficulty: "Medium",
    description: "A hardware keylogger was discovered attached to the server room admin console at 18:30. Security footage shows three technicians entered the server room between 17:00 and 18:00. Exactly one technician's statement is completely false.",
    initialUnlocked: 2,
    suspects: [
      {
        id: "s1",
        name: "Devon Vance",
        role: "Network Architect",
        statement: "I was inside the server room from 17:10 to 17:30 swapping out a router. I never went near the admin console terminal."
      },
      {
        id: "s2",
        name: "Claire Sterling",
        role: "Database Administrator",
        statement: "I logged into the admin console at 17:35 to run database patches and stayed until 17:55. I didn't plug or unplug anything."
      },
      {
        id: "s3",
        name: "Nico Thorne",
        role: "Hardware Specialist",
        statement: "I entered at 17:45 to check rack temperatures. Devon was already gone, and Claire was working at the console."
      }
    ],
    clues: [
      {
        id: "c1",
        title: "Admin Console Terminal Logs",
        text: "The admin console USB bus logged a new hardware device connection at 17:22 during a local session.",
        cost: 0
      },
      {
        id: "c2",
        title: "Server Room Badge Reader",
        text: "Devon Vance badged in at 17:08 and badged out at 17:32. Claire Sterling badged in at 17:34.",
        cost: 0
      },
      {
        id: "c3",
        title: "Console USB Physical Inspection",
        text: "The keylogger was a black USB pass-through device concealed behind the desktop tower's rear panel.",
        cost: 100
      },
      {
        id: "c4",
        title: "Router Rack Maintenance Log",
        text: "Router Rack 04 displays no recorded maintenance or reboot logs during the entire afternoon of the incident.",
        cost: 100
      },
      {
        id: "c5",
        title: "Nico's Temperature Diagnostic Tool",
        text: "Thermal scanner logs confirm Nico recorded Rack 01-08 ambient temperatures between 17:46 and 17:52.",
        cost: 100
      },
      {
        id: "c6",
        title: "Corridor Security Camera B",
        text: "Footage confirms Devon Vance left the server room corridor at 17:33 carrying a tool pouch.",
        cost: 100
      },
      {
        id: "c7",
        title: "Database Patch Schedule",
        text: "Database maintenance scripts were executed locally from the admin console between 17:36 and 17:54.",
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
    id: "CASE-003",
    title: "The Cold Chain Sabotage",
    difficulty: "Hard",
    description: "A batch of experimental cryo-vaccines valued at $2M was ruined when Vault Freezer 04 was switched off between 01:00 and 03:00 AM. Three night-shift researchers had vault access clearance. Exactly one researcher's statement is completely false.",
    initialUnlocked: 2,
    suspects: [
      {
        id: "s1",
        name: "Dr. Victor Hale",
        role: "Chief Cryo-Geneticist",
        statement: "I was in my private office writing the weekly report until 02:30 AM. I never touched the main circuit breakers or entered Freezer 04."
      },
      {
        id: "s2",
        name: "Dr. Maya Lin",
        role: "Senior Biochemist",
        statement: "I was at the centrifuge station in Bay A all night. I saw Dr. Hale walk toward the breaker room around 01:40 AM."
      },
      {
        id: "s3",
        name: "Soren Frost",
        role: "Facility Systems Engineer",
        statement: "I was monitoring the primary cooling pumps in the basement from 01:15 to 02:45 AM. I logged out of the terminal when my shift ended."
      }
    ],
    clues: [
      {
        id: "c1",
        title: "Breaker Room Keycard Log",
        text: "Keycard #109 (assigned to Dr. Victor Hale) badged into the main electrical breaker room at 01:42 AM.",
        cost: 0
      },
      {
        id: "c2",
        title: "Centrifuge Station Audit Trail",
        text: "Centrifuge Unit 2 logged active spin cycles under Dr. Maya Lin's credentials continuously from 00:30 to 03:15 AM.",
        cost: 0
      },
      {
        id: "c3",
        title: "Office PC Idle Status",
        text: "Dr. Hale's desktop workstation registered zero keyboard/mouse input between 01:15 AM and 02:20 AM.",
        cost: 100
      },
      {
        id: "c4",
        title: "Basement Terminal Logout Sheet",
        text: "The basement cooling pump terminal registered an abrupt forced remote logout at 01:20 AM, not a manual user logout.",
        cost: 100
      },
      {
        id: "c5",
        title: "Freezer 04 Temperature Curve",
        text: "Freezer 04 temperature began rising at 01:22 AM, indicating power was cut almost 20 minutes before Dr. Hale entered the breaker room.",
        cost: 100
      },
      {
        id: "c6",
        title: "Secondary Substation Manual Override",
        text: "Freezer 04's isolated backup circuit was manually tripped from the basement control panel at 01:20 AM.",
        cost: 100
      },
      {
        id: "c7",
        title: "Thermal Glove Condensation",
        text: "Cryo-protective gloves found inside Soren Frost's locker were damp with heavy exterior frost melt at 03:00 AM.",
        cost: 100
      }
    ],
    solution: {
      culpritId: "s3",
      falseStatementSuspectId: "s3",
      smokingGunClueId: "c4"
    }
  },
  {
    id: "CASE-004",
    title: "The Neon Memory Heist",
    difficulty: "Hard",
    description: "At the Sub-Zero Cyber Lounge, Corporate Executive Kaelen Vance had his unencrypted memory chip wiped during a 10-minute localized EMP burst (03:10 – 03:20 AM). Three netrunners were present in the VIP lounge. Exactly one netrunner's statement is a complete lie.",
    initialUnlocked: 2,
    suspects: [
      {
        id: "s1",
        name: "Nyx 'Viper' Vane",
        role: "Rogue Deckhand",
        statement: "I was rebooting my cyberdeck at the bar from 03:00 to 03:30 AM. My neural interface was disconnected, so I couldn't have triggered the EMP or accessed Kaelen's drive."
      },
      {
        id: "s2",
        name: "Jax 'Ghost' Mercer",
        role: "Data Smuggler",
        statement: "I was in the VIP booth ordering drinks from the synth-bartender between 03:05 and 03:25 AM. I never stood up or approached Kaelen's couch."
      },
      {
        id: "s3",
        name: "Aria 'Kestrel' Chen",
        role: "Corporate Infiltrator",
        statement: "I left the lounge at 03:00 AM after my meeting with Kaelen ended. I spent the rest of the night at the rooftop taxi pad."
      }
    ],
    clues: [
      {
        id: "c1",
        title: "Synth-Bartender Transaction Log",
        text: "Terminal log confirms Jax Mercer swiped his credit chip at the bar counter at 03:12 AM.",
        cost: 0
      },
      {
        id: "c2",
        title: "VIP Lounge Optical Sensor Buffer",
        text: "High-contrast footage shows Aria Chen standing near the alley exit behind the lounge at 03:15 AM.",
        cost: 0
      },
      {
        id: "c3",
        title: "Bar Decking Interface Telemetry",
        text: "Nyx Vane's cyberdeck maintained an active optical fiber uplink with the bar server from 03:02 to 03:28 AM without interruption.",
        cost: 100
      },
      {
        id: "c4",
        title: "Kaelen's Neural Memory Log",
        text: "The target memory chip experienced a direct contact data drain at 03:14 AM, immediately before the EMP detonated.",
        cost: 100
      },
      {
        id: "c5",
        title: "Directional EMP Residue Analysis",
        text: "Ionized scorch marks show the localized EMP originated from a modified pulse grenade detonated in the VIP booth.",
        cost: 100
      },
      {
        id: "c6",
        title: "Rooftop Taxi Pad Gate Sensor",
        text: "Rooftop access logs show Aria Chen's biometric keycard scanned through the roof turnstile at 03:01 AM.",
        cost: 100
      },
      {
        id: "c7",
        title: "Jax's Synthetic Glove Scan",
        text: "Traces of military-grade EMP coil copper dust were detected on Jax Mercer's left palm during post-incident screening.",
        cost: 100
      }
    ],
    solution: {
      culpritId: "s1",
      falseStatementSuspectId: "s1",
      smokingGunClueId: "c3"
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