const CORRECT_CONFIDENCE_BITS = [
  'Correct. Core 1 just took emotional damage.',
  'Bullseye. That is exactly how you survive a tricky PBQ.',
  'You got it. One more like that and the exam timer gets uncomfortable.',
  'Correct. That answer belongs in a clean troubleshooting flowchart.',
  'Nailed it. Help desk level-up achieved, no cape required.',
  'Correct. Your exam-day brain just gained +10 stability.',
  'Perfect hit. You are building real retention, not lucky guesses.',
  'Correct. Core 2 would like to file a complaint about your accuracy.'
]

const INCORRECT_CONFIDENCE_BITS = [
  'Missed it. Good. This is exactly how long-term recall gets built.',
  'Not this round. Tag it, review it, and farm the point next pass.',
  'Incorrect now, useful later. A+ memory loves corrected mistakes.',
  'Close miss. That means your review strategy is working, keep pressure on.',
  'Wrong answer, right mission. This is prep, not performance day.',
  'Nope. Excellent. You just found the term that needs one extra loop.',
  'Missed it. Happens to everyone before their scores jump.',
  'Not yet. Next repetition turns this into easy exam money.'
]

const A_PLUS_CATALOG_APPEARANCES = [
  'Core 1 scenario: user reports random reboots after adding new hardware.',
  'Core 1 PBQ: drag-and-drop ports, cables, and device roles under time pressure.',
  'Core 1 troubleshooting item: printer outage disguised as a network issue.',
  'Core 1 objective check: identify the BEST next troubleshooting step.',
  'Core 1 wireless case: weak signal plus interference in a busy office.',
  'Core 1 hardware upgrade question: compatibility is the whole game.',
  'Core 1 mobile device item: secure lock method vs user convenience tradeoff.',
  'Core 2 scenario: malware cleanup with strict step order requirements.',
  'Core 2 objective check: least privilege and account control decisions.',
  'Core 2 ticket flow: user says “it worked yesterday,” now performance tanks.',
  'Core 2 OS recovery case: choose the correct startup/recovery tool first.',
  'Core 2 security item: phishing indicators hidden in a realistic email.',
  'Mixed Core 1/2 question: remote support plus latency diagnosis.',
  'PBQ-style workflow: document, remediate, verify, and close the ticket.',
  'Exam wording trap: two answers look right, one is “best practice” right.',
  'Field tech dispatch scenario with one correct cable and three decoys.',
  'Network basics item where subnet logic is simpler than it looks.',
  'Virtualization question on snapshots, rollback, and risk control.',
  'Boot failure analysis with one key clue in the symptom timeline.',
  'Service desk escalation scenario testing process discipline.'
]

const FILL_BLANK_SPINS = [
  'A+ fill-blank: “User says nothing changed. Most likely root cause: ___."',
  'A+ fill-blank: “Before replacing hardware, verify ___ first."',
  'A+ fill-blank: “Best next troubleshooting step for this ticket: ___."',
  'A+ fill-blank: “Security hardening priority in this case is ___."',
  'A+ fill-blank: “System stability improved after updating ___."',
  'A+ fill-blank: “To restore connectivity quickly, validate ___ first."',
  'A+ fill-blank: “Most likely misconfiguration in this network: ___."',
  'A+ fill-blank: “User reaches LAN but not internet; inspect ___."',
  'A+ fill-blank: “Post-update boot failure: start recovery using ___."',
  'A+ fill-blank: “For ticket closure quality, always document ___."'
]

const randomItem = (items) => items[Math.floor(Math.random() * items.length)]

export const getSatireConfidenceBit = (isCorrect) => {
  return randomItem(isCorrect ? CORRECT_CONFIDENCE_BITS : INCORRECT_CONFIDENCE_BITS)
}

export const getCatalogAppearanceBit = () => randomItem(A_PLUS_CATALOG_APPEARANCES)

export const getFillBlankSpinBit = () => randomItem(FILL_BLANK_SPINS)
