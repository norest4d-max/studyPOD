export const A_PLUS_FILL_BLANK_SETS = [
  {
    id: 1,
    title: 'Hardware Basics',
    cards: [
      { prompt: 'The “brain” of the computer is the ___.', answer: 'CPU' },
      { prompt: 'Temporary working memory is ___.', answer: 'RAM' },
      { prompt: 'Long-term storage using flash chips is an ___.', answer: 'SSD' },
      { prompt: 'A device used to control display output is the ___.', answer: 'GPU' },
      { prompt: 'The main circuit board is the ___.', answer: 'motherboard' },
      { prompt: 'The component that converts AC to DC is the ___.', answer: 'power supply / PSU' }
    ]
  },
  {
    id: 2,
    title: 'Ports & Connectors',
    cards: [
      { prompt: 'A common video connector for monitors is ___.', answer: 'HDMI' },
      { prompt: 'The legacy keyboard/mouse round port is ___.', answer: 'PS/2' },
      { prompt: 'Fast external connector that can carry video/data is ___.', answer: 'USB-C' },
      { prompt: 'Wired network connector type is ___.', answer: 'RJ-45' },
      { prompt: 'Old analog video port is ___.', answer: 'VGA' },
      { prompt: 'Audio connector size for headphones is ___.', answer: '3.5mm' }
    ]
  },
  {
    id: 3,
    title: 'Cables',
    cards: [
      { prompt: 'Ethernet cable type most used today is ___.', answer: 'Cat5e/Cat6' },
      { prompt: 'Fiber uses light through strands called ___.', answer: 'optical fiber' },
      { prompt: 'SATA is used to connect drives to the ___.', answer: 'motherboard' },
      { prompt: 'A cable type for internal high-speed devices is ___.', answer: 'PCIe' },
      { prompt: 'Coax cable is common for ___.', answer: 'cable internet/TV' },
      { prompt: 'A short connector adapter is a ___.', answer: 'dongle' }
    ]
  },
  {
    id: 4,
    title: 'Storage Types',
    cards: [
      { prompt: 'A spinning-disk drive is an ___.', answer: 'HDD' },
      { prompt: 'Flash storage in a stick form is a ___.', answer: 'USB drive' },
      { prompt: 'A drive format used on many laptops is ___.', answer: 'M.2' },
      { prompt: 'A redundancy/performance disk setup is ___.', answer: 'RAID' },
      { prompt: 'Network-attached shared storage is ___.', answer: 'NAS' },
      { prompt: 'Storage that can be removed and carried is ___.', answer: 'removable media' }
    ]
  },
  {
    id: 5,
    title: 'RAID Levels',
    cards: [
      { prompt: 'RAID ___ mirrors data for redundancy.', answer: '1' },
      { prompt: 'RAID ___ stripes for speed but no redundancy.', answer: '0' },
      { prompt: 'RAID ___ uses striping with parity.', answer: '5' },
      { prompt: 'RAID ___ is mirroring + striping.', answer: '10' },
      { prompt: 'Parity helps with ___ recovery.', answer: 'data' },
      { prompt: 'RAID needs multiple ___.', answer: 'drives/disks' }
    ]
  },
  {
    id: 6,
    title: 'CPU & Cooling',
    cards: [
      { prompt: 'CPU heat is handled by a ___.', answer: 'heatsink' },
      { prompt: 'Paste between CPU and cooler is ___.', answer: 'thermal paste' },
      { prompt: 'Liquid cooling uses a ___.', answer: 'radiator' },
      { prompt: 'CPU speed can be increased by ___.', answer: 'overclocking' },
      { prompt: 'A CPU socket example is ___.', answer: 'LGA/AM' },
      { prompt: 'BIOS settings for CPU are often in ___.', answer: 'UEFI' }
    ]
  },
  {
    id: 7,
    title: 'Motherboard & Expansion',
    cards: [
      { prompt: 'A long expansion slot for GPUs is ___.', answer: 'PCIe x16' },
      { prompt: 'Smaller add-in cards use ___.', answer: 'PCIe x1' },
      { prompt: 'Firmware used instead of legacy BIOS is ___.', answer: 'UEFI' },
      { prompt: 'A chip handling peripherals is the ___.', answer: 'chipset' },
      { prompt: 'The small battery on the board powers ___.', answer: 'CMOS/RTC' },
      { prompt: 'A TPM is used for ___.', answer: 'encryption/security' }
    ]
  },
  {
    id: 8,
    title: 'RAM',
    cards: [
      { prompt: 'RAM type common in modern PCs is ___.', answer: 'DDR4/DDR5' },
      { prompt: 'Laptop RAM form factor is ___.', answer: 'SO-DIMM' },
      { prompt: 'Desktop RAM form factor is ___.', answer: 'DIMM' },
      { prompt: 'Error-correcting memory is ___.', answer: 'ECC' },
      { prompt: 'More RAM helps with ___ performance.', answer: 'multitasking' },
      { prompt: 'RAM speed is measured in ___.', answer: 'MT/s or MHz' }
    ]
  },
  {
    id: 9,
    title: 'BIOS/UEFI & Boot',
    cards: [
      { prompt: 'The boot order is configured in ___.', answer: 'BIOS/UEFI' },
      { prompt: 'A startup self-test is ___.', answer: 'POST' },
      { prompt: 'A bootable USB often uses ___.', answer: 'GPT/MBR' },
      { prompt: 'A secure boot feature is ___.', answer: 'Secure Boot' },
      { prompt: 'The Windows recovery environment is ___.', answer: 'WinRE' },
      { prompt: 'A startup menu key is often ___.', answer: 'F12/ESC/DEL' }
    ]
  },
  {
    id: 10,
    title: 'Operating Systems',
    cards: [
      { prompt: 'A Microsoft desktop OS is ___.', answer: 'Windows' },
      { prompt: 'An open-source OS family is ___.', answer: 'Linux' },
      { prompt: 'Apple’s desktop OS is ___.', answer: 'macOS' },
      { prompt: 'A mobile OS by Google is ___.', answer: 'Android' },
      { prompt: 'A user interface with icons/windows is a ___.', answer: 'GUI' },
      { prompt: 'A text-based interface is a ___.', answer: 'CLI' }
    ]
  },
  {
    id: 11,
    title: 'Windows Tools',
    cards: [
      { prompt: 'Disk management tool is ___.', answer: 'Disk Management' },
      { prompt: 'Process monitoring tool is ___.', answer: 'Task Manager' },
      { prompt: 'System logs are viewed in ___.', answer: 'Event Viewer' },
      { prompt: 'Driver management tool is ___.', answer: 'Device Manager' },
      { prompt: 'Command line on Windows is ___.', answer: 'Command Prompt/PowerShell' },
      { prompt: 'Windows settings database is the ___.', answer: 'Registry' }
    ]
  },
  {
    id: 12,
    title: 'Linux Basics',
    cards: [
      { prompt: 'Linux command to list files is ___.', answer: 'ls' },
      { prompt: 'Change directory command is ___.', answer: 'cd' },
      { prompt: 'Superuser command is ___.', answer: 'sudo' },
      { prompt: 'View file contents command is ___.', answer: 'cat' },
      { prompt: 'Package managers include ___.', answer: 'apt/yum/dnf' },
      { prompt: 'The Linux kernel is the OS ___.', answer: 'core' }
    ]
  },
  {
    id: 13,
    title: 'Networking Basics',
    cards: [
      { prompt: 'A unique network device identifier is a ___.', answer: 'MAC address' },
      { prompt: 'A logical network address is an ___.', answer: 'IP address' },
      { prompt: 'A device that routes between networks is a ___.', answer: 'router' },
      { prompt: 'A device that connects devices in a LAN is a ___.', answer: 'switch' },
      { prompt: 'Internet name resolution is ___.', answer: 'DNS' },
      { prompt: 'Automatic IP assignment is ___.', answer: 'DHCP' }
    ]
  },
  {
    id: 14,
    title: 'IP Addressing',
    cards: [
      { prompt: 'IPv4 length is ___ bits.', answer: '32' },
      { prompt: 'IPv6 length is ___ bits.', answer: '128' },
      { prompt: 'Localhost IPv4 is ___.', answer: '127.0.0.1' },
      { prompt: 'Private IP ranges include ___.', answer: '192.168.x.x / 10.x.x.x / 172.16-31.x.x' },
      { prompt: 'A subnet mask example is ___.', answer: '255.255.255.0' },
      { prompt: 'The default gateway is usually the ___.', answer: 'router' }
    ]
  },
  {
    id: 15,
    title: 'Common Ports',
    cards: [
      { prompt: 'Web traffic (unencrypted) uses port ___.', answer: '80' },
      { prompt: 'Secure web traffic uses port ___.', answer: '443' },
      { prompt: 'DNS uses port ___.', answer: '53' },
      { prompt: 'DHCP uses ports ___.', answer: '67/68' },
      { prompt: 'Remote login (SSH) uses port ___.', answer: '22' },
      { prompt: 'Remote desktop (RDP) uses port ___.', answer: '3389' }
    ]
  },
  {
    id: 16,
    title: 'Wireless',
    cards: [
      { prompt: 'Wireless network standard family is ___.', answer: '802.11' },
      { prompt: '2.4 GHz common channels are ___.', answer: '1/6/11' },
      { prompt: 'Encryption recommended today is ___.', answer: 'WPA2/WPA3' },
      { prompt: 'Network name is called ___.', answer: 'SSID' },
      { prompt: 'A Wi-Fi extender increases ___.', answer: 'range' },
      { prompt: 'Interference sources include ___.', answer: 'microwaves/bluetooth' }
    ]
  },
  {
    id: 17,
    title: 'Troubleshooting Network',
    cards: [
      { prompt: 'Command to test reachability is ___.', answer: 'ping' },
      { prompt: 'Command to trace route is ___.', answer: 'tracert/traceroute' },
      { prompt: 'View IP settings in Windows is ___.', answer: 'ipconfig' },
      { prompt: 'View IP settings in Linux is ___.', answer: 'ifconfig/ip' },
      { prompt: 'Name lookup test command is ___.', answer: 'nslookup/dig' },
      { prompt: 'A common first step is ___ the device.', answer: 'rebooting' }
    ]
  },
  {
    id: 18,
    title: 'Security Basics',
    cards: [
      { prompt: 'Proof of identity is ___.', answer: 'authentication' },
      { prompt: 'Giving permissions is ___.', answer: 'authorization' },
      { prompt: 'Secret text used for access is a ___.', answer: 'password' },
      { prompt: 'Extra login step is ___.', answer: 'MFA/2FA' },
      { prompt: 'Malware that locks files is ___.', answer: 'ransomware' },
      { prompt: 'A fake login page is a ___.', answer: 'phishing site' }
    ]
  },
  {
    id: 19,
    title: 'Malware Types',
    cards: [
      { prompt: 'Self-replicating malware is a ___.', answer: 'worm' },
      { prompt: 'Disguised as legit software is a ___.', answer: 'trojan' },
      { prompt: 'Records keystrokes is a ___.', answer: 'keylogger' },
      { prompt: 'Displays unwanted ads is ___.', answer: 'adware' },
      { prompt: 'Hides itself deeply is a ___.', answer: 'rootkit' },
      { prompt: 'Spy software collecting info is ___.', answer: 'spyware' }
    ]
  },
  {
    id: 20,
    title: 'Encryption & Certificates',
    cards: [
      { prompt: 'Data scrambled to protect it is ___.', answer: 'encryption' },
      { prompt: 'Web encryption commonly uses ___.', answer: 'TLS' },
      { prompt: 'A website identity proof file is a ___.', answer: 'certificate' },
      { prompt: 'Public/private key system is ___.', answer: 'asymmetric encryption' },
      { prompt: 'Same key encrypt/decrypt is ___.', answer: 'symmetric encryption' },
      { prompt: 'A secure tunnel between networks is a ___.', answer: 'VPN' }
    ]
  },
  {
    id: 21,
    title: 'Virtualization',
    cards: [
      { prompt: 'Software that runs virtual machines is a ___.', answer: 'hypervisor' },
      { prompt: 'A simulated computer is a ___.', answer: 'virtual machine / VM' },
      { prompt: 'Host OS runs the ___.', answer: 'hypervisor' },
      { prompt: 'VM snapshots capture a point-in-time ___.', answer: 'state' },
      { prompt: 'Containers share the same ___.', answer: 'kernel' },
      { prompt: 'A common hypervisor type is ___.', answer: 'Type 1 / Type 2' }
    ]
  },
  {
    id: 22,
    title: 'Cloud Concepts',
    cards: [
      { prompt: 'Software delivered online is ___.', answer: 'SaaS' },
      { prompt: 'Platform for apps is ___.', answer: 'PaaS' },
      { prompt: 'Virtual hardware service is ___.', answer: 'IaaS' },
      { prompt: 'On-demand scaling is ___.', answer: 'elasticity' },
      { prompt: 'High availability reduces ___.', answer: 'downtime' },
      { prompt: 'Data stored online is in the ___.', answer: 'cloud' }
    ]
  },
  {
    id: 23,
    title: 'Printers',
    cards: [
      { prompt: 'Laser printers use a ___.', answer: 'toner' },
      { prompt: 'Inkjet printers use ___.', answer: 'ink cartridges' },
      { prompt: 'Printer spooler manages print ___.', answer: 'jobs' },
      { prompt: 'A printer IP conflict causes ___ issues.', answer: 'connection' },
      { prompt: 'Duplex printing means printing on ___ sides.', answer: 'both' },
      { prompt: 'A common printer protocol is ___.', answer: 'IPP/LPR' }
    ]
  },
  {
    id: 24,
    title: 'Mobile Devices',
    cards: [
      { prompt: 'Mobile app store for Apple is ___.', answer: 'App Store' },
      { prompt: 'A short-range device connection is ___.', answer: 'Bluetooth' },
      { prompt: 'Mobile payment tech is ___.', answer: 'NFC' },
      { prompt: 'A mobile screen lock method is ___.', answer: 'biometrics/PIN' },
      { prompt: 'Mobile device management is ___.', answer: 'MDM' },
      { prompt: 'Remote wipe can protect ___.', answer: 'data' }
    ]
  },
  {
    id: 25,
    title: 'Ticketing & Best Practice',
    cards: [
      { prompt: 'A step-by-step fix guide is ___.', answer: 'knowledge base' },
      { prompt: 'A recorded support request is a ___.', answer: 'ticket' },
      { prompt: 'First action is to ___ the problem.', answer: 'identify' },
      { prompt: 'A temporary fix is a ___.', answer: 'workaround' },
      { prompt: 'The final step is to ___ the solution.', answer: 'document' },
      { prompt: 'After fixing, you should ___ with the user.', answer: 'follow up' }
    ]
  }
]

export const A_PLUS_FULL_DECK = {
  title: 'CompTIA A+ Fill-in-the-Blank Mega Deck',
  cards: A_PLUS_FILL_BLANK_SETS.flatMap((set) => set.cards)
}

export const cardsToVocabulary = (cards) => {
  return cards.reduce((accumulator, card, index) => {
    accumulator[`${index + 1}. ${card.prompt}`] = card.answer
    return accumulator
  }, {})
}
