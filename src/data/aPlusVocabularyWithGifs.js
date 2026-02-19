// A+ CERTIFICATION VOCABULARY PACKAGE with relevant emojis and visual associations
// Using emojis for universal compatibility, no external dependencies, and reliable display

// Comprehensive A+ Vocabulary with Emojis (trusted, built-in Unicode characters)
export const A_PLUS_VOCABULARY_WITH_GIFS = [
  // HARDWARE BASICS
  {
    term: 'CPU (Central Processing Unit)',
    definition: 'The brain of the computer that executes instructions and performs calculations',
    category: 'hardware',
    gif: '🧠💻',
    tags: ['core1', 'hardware', 'essential']
  },
  {
    term: 'RAM (Random Access Memory)',
    definition: 'Volatile memory that stores data and programs currently in use, cleared when power is off',
    category: 'hardware',
    gif: '⚡💾',
    tags: ['core1', 'hardware', 'memory']
  },
  {
    term: 'ROM (Read-Only Memory)',
    definition: 'Non-volatile memory that contains permanent data and firmware',
    category: 'hardware',
    gif: '🔒💾',
    tags: ['core1', 'hardware', 'memory']
  },
  {
    term: 'SSD (Solid State Drive)',
    definition: 'Fast storage device using flash memory with no moving parts',
    category: 'storage',
    gif: '⚡💿',
    tags: ['core1', 'storage', 'hardware']
  },
  {
    term: 'HDD (Hard Disk Drive)',
    definition: 'Magnetic storage device with spinning platters, typically slower than SSD',
    category: 'storage',
    gif: '💿🔄',
    tags: ['core1', 'storage', 'hardware']
  },
  {
    term: 'Motherboard',
    definition: 'Main circuit board connecting all computer components',
    category: 'hardware',
    gif: '🔌🖥️',
    tags: ['core1', 'hardware', 'essential']
  },
  {
    term: 'PSU (Power Supply Unit)',
    definition: 'Converts AC power to DC power for computer components',
    category: 'hardware',
    gif: '🔌⚡',
    tags: ['core1', 'hardware', 'power']
  },
  {
    term: 'GPU (Graphics Processing Unit)',
    definition: 'Specialized processor for rendering graphics and video',
    category: 'hardware',
    gif: '🎮🖼️',
    tags: ['core1', 'hardware', 'graphics']
  },

  // BIOS/UEFI & BOOT
  {
    term: 'BIOS (Basic Input/Output System)',
    definition: 'Legacy firmware that initializes hardware during boot process',
    category: 'software',
    gif: '🔧💻',
    tags: ['core1', 'firmware', 'boot']
  },
  {
    term: 'UEFI (Unified Extensible Firmware Interface)',
    definition: 'Modern firmware interface replacing BIOS with improved features',
    category: 'software',
    gif: '🆕🔧',
    tags: ['core1', 'firmware', 'boot']
  },
  {
    term: 'POST (Power-On Self-Test)',
    definition: 'Diagnostic test sequence performed by firmware during startup',
    category: 'troubleshooting',
    gif: '✅🔍',
    tags: ['core1', 'boot', 'diagnostics']
  },
  {
    term: 'Boot Sequence',
    definition: 'Order in which system checks devices for bootable operating system',
    category: 'software',
    gif: '🔢💻',
    tags: ['core1', 'boot']
  },

  // NETWORKING BASICS
  {
    term: 'IP Address',
    definition: 'Unique numerical identifier assigned to each device on a network',
    category: 'networking',
    gif: '🌐📍',
    tags: ['core1', 'networking', 'essential']
  },
  {
    term: 'MAC Address',
    definition: 'Physical hardware address permanently assigned to network interface card',
    category: 'networking',
    gif: '🔖💳',
    tags: ['core1', 'networking', 'hardware']
  },
  {
    term: 'DNS (Domain Name System)',
    definition: 'Service that translates domain names to IP addresses',
    category: 'networking',
    gif: '📖🌐',
    tags: ['core1', 'networking', 'protocols']
  },
  {
    term: 'DHCP (Dynamic Host Configuration Protocol)',
    definition: 'Protocol that automatically assigns IP addresses to devices',
    category: 'networking',
    gif: '🤖📋',
    tags: ['core1', 'networking', 'protocols']
  },
  {
    term: 'Router',
    definition: 'Device that forwards data between networks and connects to internet',
    category: 'networking',
    gif: '🔀🌐',
    tags: ['core1', 'networking', 'hardware']
  },
  {
    term: 'Switch',
    definition: 'Network device that connects multiple devices within a LAN',
    category: 'networking',
    gif: '🔌🔀',
    tags: ['core1', 'networking', 'hardware']
  },
  {
    term: 'Default Gateway',
    definition: 'Router IP address used to reach networks outside the local subnet',
    category: 'networking',
    gif: '🚪🌐',
    tags: ['core1', 'networking']
  },
  {
    term: 'Subnet Mask',
    definition: 'Determines which portion of IP address is network vs host',
    category: 'networking',
    gif: '🎭🌐',
    tags: ['core1', 'networking']
  },

  // CABLES & CONNECTORS
  {
    term: 'RJ45',
    definition: 'Standard connector used for Ethernet networking cables',
    category: 'hardware',
    gif: '🔌📡',
    tags: ['core1', 'networking', 'cables']
  },
  {
    term: 'Cat5e/Cat6',
    definition: 'Common Ethernet cable standards supporting different speeds',
    category: 'hardware',
    gif: '📡🔗',
    tags: ['core1', 'networking', 'cables']
  },
  {
    term: 'HDMI',
    definition: 'Digital interface for transmitting video and audio signals',
    category: 'hardware',
    gif: '📺🔌',
    tags: ['core1', 'hardware', 'video']
  },
  {
    term: 'USB-C',
    definition: 'Reversible connector supporting data, video, and power delivery',
    category: 'hardware',
    gif: '🔄🔌',
    tags: ['core1', 'hardware', 'connectors']
  },

  // SECURITY
  {
    term: 'Firewall',
    definition: 'Security system that monitors and controls network traffic',
    category: 'security',
    gif: '🔥🧱',
    tags: ['core2', 'security', 'network']
  },
  {
    term: 'Malware',
    definition: 'Malicious software designed to damage or gain unauthorized access',
    category: 'security',
    gif: '🦠💻',
    tags: ['core2', 'security', 'threats']
  },
  {
    term: 'Ransomware',
    definition: 'Malware that encrypts files and demands payment for decryption',
    category: 'security',
    gif: '🔒💰',
    tags: ['core2', 'security', 'threats']
  },
  {
    term: 'Phishing',
    definition: 'Social engineering attack using fake emails to steal credentials',
    category: 'security',
    gif: '🎣📧',
    tags: ['core2', 'security', 'threats']
  },
  {
    term: 'MFA (Multi-Factor Authentication)',
    definition: 'Security requiring two or more verification methods to access account',
    category: 'security',
    gif: '🔐🔑',
    tags: ['core2', 'security', 'authentication']
  },
  {
    term: 'Least Privilege',
    definition: 'Security principle giving users minimum permissions needed',
    category: 'security',
    gif: '👤🔒',
    tags: ['core2', 'security', 'best-practice']
  },
  {
    term: 'Encryption',
    definition: 'Process of encoding data to prevent unauthorized access',
    category: 'security',
    gif: '🔐📄',
    tags: ['core2', 'security']
  },

  // OPERATING SYSTEMS
  {
    term: 'Windows',
    definition: 'Microsoft operating system used on most desktop computers',
    category: 'software',
    gif: '🪟💻',
    tags: ['core2', 'os', 'windows']
  },
  {
    term: 'Linux',
    definition: 'Open-source Unix-like operating system family',
    category: 'software',
    gif: '🐧💻',
    tags: ['core2', 'os', 'linux']
  },
  {
    term: 'macOS',
    definition: 'Apple operating system for Mac computers',
    category: 'software',
    gif: '🍎💻',
    tags: ['core2', 'os', 'mac']
  },
  {
    term: 'BSOD (Blue Screen of Death)',
    definition: 'Windows critical error screen indicating system crash',
    category: 'troubleshooting',
    gif: '💙😱',
    tags: ['core2', 'windows', 'errors']
  },
  {
    term: 'Safe Mode',
    definition: 'Diagnostic boot mode loading minimal drivers for troubleshooting',
    category: 'troubleshooting',
    gif: '🛡️🔧',
    tags: ['core2', 'windows', 'troubleshooting']
  },

  // TROUBLESHOOTING
  {
    term: 'Ping',
    definition: 'Network diagnostic tool to test connectivity to another device',
    category: 'troubleshooting',
    gif: '🏓🌐',
    tags: ['core1', 'networking', 'tools']
  },
  {
    term: 'ipconfig',
    definition: 'Windows command to display network configuration information',
    category: 'troubleshooting',
    gif: '⌨️🌐',
    tags: ['core2', 'windows', 'tools']
  },
  {
    term: 'Task Manager',
    definition: 'Windows utility for monitoring processes and system performance',
    category: 'troubleshooting',
    gif: '📊⚙️',
    tags: ['core2', 'windows', 'tools']
  },
  {
    term: 'Event Viewer',
    definition: 'Windows tool for viewing system and application logs',
    category: 'troubleshooting',
    gif: '📋🔍',
    tags: ['core2', 'windows', 'tools']
  },

  // VIRTUALIZATION & CLOUD
  {
    term: 'Virtual Machine (VM)',
    definition: 'Software emulation of a physical computer running its own OS',
    category: 'cloud',
    gif: '💻📦',
    tags: ['core1', 'virtualization']
  },
  {
    term: 'Hypervisor',
    definition: 'Software that creates and manages virtual machines',
    category: 'cloud',
    gif: '🎛️💻',
    tags: ['core1', 'virtualization']
  },
  {
    term: 'Cloud Computing',
    definition: 'Delivery of computing services over the internet',
    category: 'cloud',
    gif: '☁️💻',
    tags: ['core2', 'cloud']
  },
  {
    term: 'SaaS (Software as a Service)',
    definition: 'Cloud model delivering software applications via internet',
    category: 'cloud',
    gif: '☁️📱',
    tags: ['core2', 'cloud']
  },
  {
    term: 'IaaS (Infrastructure as a Service)',
    definition: 'Cloud model providing virtualized computing resources',
    category: 'cloud',
    gif: '☁️🏗️',
    tags: ['core2', 'cloud']
  },

  // MOBILE DEVICES
  {
    term: 'MDM (Mobile Device Management)',
    definition: 'Software for centrally managing mobile devices in organization',
    category: 'hardware',
    gif: '📱⚙️',
    tags: ['core1', 'mobile']
  },
  {
    term: 'Bluetooth',
    definition: 'Short-range wireless technology for connecting devices',
    category: 'networking',
    gif: '📶🔷',
    tags: ['core1', 'wireless', 'mobile']
  },
  {
    term: 'NFC (Near Field Communication)',
    definition: 'Very short-range wireless tech for contactless payments',
    category: 'networking',
    gif: '💳📲',
    tags: ['core1', 'wireless', 'mobile']
  },

  // PRINTERS
  {
    term: 'Laser Printer',
    definition: 'Printer using toner and heat to fuse text/images to paper',
    category: 'hardware',
    gif: '🖨️⚡',
    tags: ['core1', 'printers']
  },
  {
    term: 'Inkjet Printer',
    definition: 'Printer spraying liquid ink onto paper',
    category: 'hardware',
    gif: '🖨️💧',
    tags: ['core1', 'printers']
  },

  // ADDITIONAL KEY TERMS
  {
    term: 'RAID (Redundant Array of Independent Disks)',
    definition: 'Technology combining multiple drives for performance or redundancy',
    category: 'storage',
    gif: '💿➕💿',
    tags: ['core1', 'storage', 'advanced']
  },
  {
    term: 'VPN (Virtual Private Network)',
    definition: 'Secure encrypted tunnel for private communication over internet',
    category: 'security',
    gif: '🔒🌐',
    tags: ['core2', 'security', 'networking']
  },
  {
    term: 'Port Number',
    definition: 'Numerical identifier for specific network services (e.g., 80 for HTTP)',
    category: 'networking',
    gif: '🔢🚪',
    tags: ['core1', 'networking', 'protocols']
  },
  {
    term: 'SSH (Secure Shell)',
    definition: 'Encrypted protocol for secure remote access to systems',
    category: 'security',
    gif: '🔐⌨️',
    tags: ['core2', 'security', 'protocols']
  },
]

// Convert vocabulary to flashcard format used by Quiz
export const vocabToFlashcards = (vocabArray) => {
  return vocabArray.map((item, index) => ({
    id: index + 1,
    prompt: item.term,
    answer: item.definition,
    gif: item.gif,
    category: item.category,
    tags: item.tags
  }))
}

// Convert to the vocabulary format used by QuizApp
export const vocabToVocabulary = (vocabArray) => {
  return vocabArray.reduce((acc, item) => {
    acc[item.term] = item.definition
    return acc
  }, {})
}

// Export as flashcard sets
export const A_PLUS_VOCABULARY_DECK = {
  title: 'A+ Certification Vocabulary with Visual Memory Aids',
  description: 'Comprehensive A+ vocabulary with relevant emoji icons',
  cards: vocabToFlashcards(A_PLUS_VOCABULARY_WITH_GIFS),
  vocabulary: vocabToVocabulary(A_PLUS_VOCABULARY_WITH_GIFS),
  totalCards: A_PLUS_VOCABULARY_WITH_GIFS.length
}

// Group by category for themed sets
export const A_PLUS_VOCABULARY_BY_CATEGORY = {
  hardware: A_PLUS_VOCABULARY_WITH_GIFS.filter(v => v.category === 'hardware'),
  networking: A_PLUS_VOCABULARY_WITH_GIFS.filter(v => v.category === 'networking'),
  security: A_PLUS_VOCABULARY_WITH_GIFS.filter(v => v.category === 'security'),
  storage: A_PLUS_VOCABULARY_WITH_GIFS.filter(v => v.category === 'storage'),
  software: A_PLUS_VOCABULARY_WITH_GIFS.filter(v => v.category === 'software'),
  troubleshooting: A_PLUS_VOCABULARY_WITH_GIFS.filter(v => v.category === 'troubleshooting'),
  cloud: A_PLUS_VOCABULARY_WITH_GIFS.filter(v => v.category === 'cloud'),
}

// Create category-based deck sets
export const A_PLUS_VOCABULARY_CATEGORY_SETS = Object.keys(A_PLUS_VOCABULARY_BY_CATEGORY).map((category, index) => ({
  id: index + 1,
  title: `${category.charAt(0).toUpperCase() + category.slice(1)} Vocabulary`,
  category: category,
  cards: vocabToFlashcards(A_PLUS_VOCABULARY_BY_CATEGORY[category]),
  vocabulary: vocabToVocabulary(A_PLUS_VOCABULARY_BY_CATEGORY[category])
}))
