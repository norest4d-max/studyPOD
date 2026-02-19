import fs from 'node:fs'
import path from 'node:path'

const OUT_DIR = path.join(process.cwd(), 'public', 'decks', 'a-plus')
fs.mkdirSync(OUT_DIR, { recursive: true })

/**
 * Minimal, high-yield A+ terms. Extend this list freely.
 * Each item becomes: term:definition | tags=... | img=...
 */
const CARDS = [
  { t: 'CPU', d: 'Central Processing Unit; executes instructions and performs calculations.', tags: 'hardware,core1', img: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Oxygen480-devices-cpu.svg' },
  { t: 'RAM', d: 'Volatile memory used for active programs and data; cleared when power is off.', tags: 'hardware,core1', img: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/RAM_8x4_symbol.svg' },
  { t: 'SSD', d: 'Solid-state storage using flash memory; faster access than HDD.', tags: 'hardware,storage,core1' },
  { t: 'HDD', d: 'Magnetic storage with spinning platters; typically cheaper per GB than SSD.', tags: 'hardware,storage,core1' },
  { t: 'BIOS', d: 'Firmware that initializes hardware and starts boot process (legacy systems).', tags: 'hardware,firmware,core1' },
  { t: 'UEFI', d: 'Modern firmware interface replacing BIOS; supports Secure Boot and GPT.', tags: 'hardware,firmware,core1' },
  { t: 'POST', d: 'Power-On Self-Test; startup diagnostics performed by firmware.', tags: 'hardware,core1' },
  { t: 'PSU', d: 'Power Supply Unit; converts AC to regulated DC voltages for components.', tags: 'hardware,power,core1' },
  { t: 'ESD', d: 'Electrostatic discharge; can damage components—use grounding protection.', tags: 'hardware,safety,core1', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Padlock-silver-light.svg' },

  { t: 'IP address', d: 'Logical address used to identify a host on an IP network.', tags: 'networking,core1' },
  { t: 'Subnet mask', d: 'Determines network vs host portion of an IPv4 address.', tags: 'networking,core1' },
  { t: 'Default gateway', d: 'Router used to reach destinations outside the local subnet.', tags: 'networking,core1', img: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Router_symbol.svg' },
  { t: 'DNS', d: 'Resolves hostnames to IP addresses (and other records).', tags: 'networking,protocols,core1' },
  { t: 'DHCP', d: 'Automatically assigns IP configuration to clients.', tags: 'networking,protocols,core1', img: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Ethernet.svg' },
  { t: 'RJ45', d: 'Common connector used with Ethernet twisted-pair cabling.', tags: 'networking,cabling,core1' },

  { t: 'MFA', d: 'Multi-factor authentication; requires 2+ independent factors to log in.', tags: 'security,core2', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Padlock-silver-light.svg' },
  { t: 'Least privilege', d: 'Users/processes get only the minimum permissions needed.', tags: 'security,core2' },
  { t: 'Phishing', d: 'Social engineering attempt to trick users into revealing secrets or installing malware.', tags: 'security,core2' },
  { t: 'Ransomware', d: 'Malware that encrypts data and demands payment for decryption.', tags: 'security,core2' },

  { t: 'BSOD', d: 'Windows stop error screen indicating a critical system failure.', tags: 'troubleshooting,windows,core2' },
  { t: 'Safe Mode', d: 'Boot mode loading minimal drivers/services for troubleshooting.', tags: 'troubleshooting,windows,core2' },

  { t: 'CLOZE_DHCP', d: 'Fill the blank.', type: 'cloze', cloze: 'The ____ assigns IP addresses automatically.', answer: 'DHCP', tags: 'networking,protocols,core1', img: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Ethernet.svg' },
  { t: 'CLOZE_DNS', d: 'Fill the blank.', type: 'cloze', cloze: '____ translates domain names into IP addresses.', answer: 'DNS', tags: 'networking,protocols,core1' }
]

const REQUESTED_SETS = 25
const setCount = Math.min(REQUESTED_SETS, CARDS.length)
const perSet = Math.ceil(CARDS.length / setCount)

for (let setIndex = 0; setIndex < setCount; setIndex++) {
  const slice = CARDS.slice(setIndex * perSet, (setIndex + 1) * perSet)
  const lines = [
    `# StudyPOD A+ Set ${String(setIndex + 1).padStart(2, '0')}`,
    '# Format: term:definition | key=value | key=value',
    '',
    ...slice.map((card) => {
      const meta = []
      if (card.tags) meta.push(`tags=${card.tags}`)
      if (card.img) meta.push(`img=${card.img}`)
      if (card.type) meta.push(`type=${card.type}`)
      if (card.cloze) meta.push(`cloze=${card.cloze}`)
      if (card.answer) meta.push(`answer=${card.answer}`)
      return `${card.t}:${card.d}${meta.length ? ' | ' + meta.join(' | ') : ''}`
    }),
    ''
  ].join('\n')

  const filename = `a_plus_set_${String(setIndex + 1).padStart(2, '0')}.txt`
  fs.writeFileSync(path.join(OUT_DIR, filename), lines, 'utf8')
}

console.log(`Wrote ${setCount} deck files to ${OUT_DIR} (requested ${REQUESTED_SETS})`)
