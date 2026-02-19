// EMOJI LIBRARY - Reusable themed emoji mappings for A+ certification concepts
// Can be used across different vocabulary packages and contexts

export const EMOJI_LIBRARY = {
  // Hardware & Components
  hardware: {
    cpu: '🧠💻',
    brain: '🧠',
    computer: '💻',
    memory: '💾',
    ram: '⚡💾',
    storage: '💿',
    disk: '💿🔄',
    motherboard: '🔌🖥️',
    power: '🔌⚡',
    gpu: '🎮🖼️',
    printer: '🖨️',
    laser: '🖨️⚡',
    inkjet: '🖨️💧',
  },
  
  // Networking
  networking: {
    network: '🌐',
    internet: '🌐📡',
    wifi: '📶',
    ethernet: '🔌📡',
    cable: '📡🔗',
    router: '🔀🌐',
    switch: '🔌🔀',
    connection: '🔗',
    signal: '📶',
    antenna: '📡',
    location: '📍',
    address: '🌐📍',
    dns: '📖🌐',
    dhcp: '🤖📋',
    gateway: '🚪🌐',
    mask: '🎭🌐',
    port: '🔢🚪',
    ping: '🏓🌐',
  },
  
  // Security
  security: {
    lock: '🔒',
    unlock: '🔓',
    key: '🔑',
    shield: '🛡️',
    firewall: '🔥🧱',
    secure: '🔐',
    encryption: '🔐📄',
    virus: '🦠',
    malware: '🦠💻',
    ransomware: '🔒💰',
    phishing: '🎣📧',
    hacker: '👤💻',
    mfa: '🔐🔑',
    vpn: '🔒🌐',
    ssh: '🔐⌨️',
    alert: '⚠️',
    warning: '⚠️🔔',
  },
  
  // Cloud & Virtualization
  cloud: {
    cloud: '☁️',
    cloudComputing: '☁️💻',
    saas: '☁️📱',
    iaas: '☁️🏗️',
    vm: '💻📦',
    hypervisor: '🎛️💻',
    virtual: '📦',
    server: '🖥️',
  },
  
  // Operating Systems
  os: {
    windows: '🪟💻',
    linux: '🐧💻',
    mac: '🍎💻',
    bios: '🔧💻',
    uefi: '🆕🔧',
    boot: '🔢💻',
    bsod: '💙😱',
    safeMode: '🛡️🔧',
  },
  
  // Troubleshooting & Tools
  troubleshooting: {
    tools: '🔧',
    wrench: '🔧',
    settings: '⚙️',
    diagnostics: '🔍',
    check: '✅',
    checkmark: '✅🔍',
    error: '❌',
    warning: '⚠️',
    fix: '🔧🔨',
    repair: '🔨',
    monitor: '📊',
    graph: '📊⚙️',
    log: '📋🔍',
    command: '⌨️🌐',
  },
  
  // General Concepts
  general: {
    fast: '⚡',
    slow: '🐌',
    data: '📊',
    file: '📄',
    folder: '📁',
    document: '📝',
    code: '💻',
    mobile: '📱',
    phone: '📱',
    tablet: '📱',
    bluetooth: '📶🔷',
    nfc: '💳📲',
    card: '💳',
    payment: '💰',
    money: '💰',
    new: '🆕',
    update: '🔄',
    sync: '🔄',
    copy: '📋',
    paste: '📋',
    delete: '🗑️',
    trash: '🗑️',
  },
  
  // Emotions & Reactions (for feedback)
  reactions: {
    success: '✅🎉',
    celebrate: '🎉',
    trophy: '🏆',
    star: '⭐',
    fire: '🔥',
    thinking: '🤔',
    confused: '😕',
    sad: '😢',
    happy: '😊',
    love: '❤️',
    thumbsUp: '👍',
    thumbsDown: '👎',
    rocket: '🚀',
    target: '🎯',
  }
}

// Helper function to get emoji by key path
export const getEmoji = (category, key) => {
  return EMOJI_LIBRARY[category]?.[key] || '📚'
}

// Helper function to search emoji library by keywords
export const findEmojiByKeywords = (keywords) => {
  const keywordList = keywords.toLowerCase().split(' ')
  
  for (const category of Object.keys(EMOJI_LIBRARY)) {
    for (const [key, emoji] of Object.entries(EMOJI_LIBRARY[category])) {
      if (keywordList.some(kw => key.toLowerCase().includes(kw))) {
        return emoji
      }
    }
  }
  
  return '💡' // Default fallback
}

// Export all emojis as flat list for easy access
export const ALL_EMOJIS = Object.values(EMOJI_LIBRARY).reduce((acc, category) => {
  return { ...acc, ...category }
}, {})
