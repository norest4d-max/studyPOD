# Visual Memory Aid System - Configuration Guide

## Overview

The StudyPOD vocabulary package supports TWO methods for visual memory aids:

1. **Emoji Icons** (Default) - Universal, reliable, no external dependencies
2. **Giphy GIF API** (Optional) - Dynamic, animated GIFs for enhanced engagement

## Current Configuration

✅ **Default: Emoji Icons**
- Always works, no setup required
- No blocking issues
- Zero external dependencies
- Instant display

📦 **Optional: Giphy API**
- Requires API key setup
- Can be enabled for animated GIFs
- Falls back to emojis if unavailable

## How to Enable Giphy API (Optional)

### Step 1: Get Giphy API Key

1. Go to [Giphy Developers](https://developers.giphy.com/)
2. Create a free account
3. Create a new app
4. Copy your API key

### Step 2: Configure Environment Variable

Create a `.env` file in the project root:

```bash
VITE_GIPHY_API_KEY=your_giphy_api_key_here
```

**Important:** Add `.env` to your `.gitignore` to keep your API key private!

### Step 3: Enable GIF Fetching

Edit `src/services/gifService.js`:

```javascript
export const VISUAL_AID_CONFIG = {
  primaryMethod: 'gif',      // Change from 'emoji' to 'gif'
  enableGifFetch: true,       // Enable GIF API calls
  fallbackToEmoji: true,      // Keep emoji fallback
  enableCache: true,          // Cache GIF URLs
  cacheMaxAge: 24 * 60 * 60 * 1000, // 24 hours
}
```

### Step 4: Test Locally

```bash
npm run dev
```

Navigate to the vocabulary deck and verify GIFs load properly.

## Emoji Library

The emoji library (`src/data/emojiLibrary.js`) provides organized, themed emojis:

### Categories:
- **Hardware**: CPU 🧠💻, RAM ⚡💾, GPU 🎮🖼️
- **Networking**: Router 🔀🌐, DNS 📖🌐, WiFi 📶
- **Security**: Firewall 🔥🧱, Encryption 🔐📄, VPN 🔒🌐
- **Cloud**: VM 💻📦, SaaS ☁️📱, IaaS ☁️🏗️
- **OS**: Windows 🪟💻, Linux 🐧💻, macOS 🍎💻
- **Troubleshooting**: Ping 🏓🌐, BSOD 💙😱, Tools 🔧
- **General**: Fast ⚡, Slow 🐌, Update 🔄

### Usage:

```javascript
import { EMOJI_LIBRARY, getEmoji } from './data/emojiLibrary'

// Direct access
const cpuEmoji = EMOJI_LIBRARY.hardware.cpu // "🧠💻"

// Helper function
const routerEmoji = getEmoji('networking', 'router') // "🔀🌐"
```

## GIF Service API

### Get Visual Aid

```javascript
import { getVisualAid } from './services/gifService'

// Returns emoji or GIF based on configuration
const visualAid = await getVisualAid('CPU', 'hardware')
console.log(visualAid)
// {
//   type: 'emoji',
//   content: '🧠💻',
//   source: 'library'
// }
```

### Batch Fetch

```javascript
import { batchGetVisualAids } from './services/gifService'

const terms = [
  { term: 'CPU', category: 'hardware' },
  { term: 'Firewall', category: 'security' },
]

const visualAids = await batchGetVisualAids(terms)
```

### Update Configuration

```javascript
import { updateConfig } from './services/gifService'

// Switch to GIF mode at runtime
updateConfig({
  primaryMethod: 'gif',
  enableGifFetch: true
})
```

## Deployment

### Cloudflare Pages

Add environment variable in Cloudflare Pages dashboard:

1. Go to Settings → Environment Variables
2. Add: `VITE_GIPHY_API_KEY` = `your_api_key`
3. Redeploy

### Netlify

Add to Netlify dashboard:

1. Site settings → Environment variables
2. Add: `VITE_GIPHY_API_KEY` = `your_api_key`
3. Trigger new deploy

## Benefits of Each Method

### Emoji Icons (Default)
✅ Zero external dependencies  
✅ No API rate limits  
✅ Works everywhere (no blocking)  
✅ Instant loading  
✅ Free forever  
✅ Professional appearance  

### Giphy API (Optional)
✅ Animated, engaging  
✅ More variety  
✅ Dynamic content  
❌ Requires API key  
❌ Rate limits apply  
❌ May be blocked by firewalls  
❌ Network dependent  

## Recommendations

**For Most Users:** Stick with emojis (default)
- Reliable, fast, works everywhere
- No setup required
- Professional appearance

**For Enhanced Experience:** Enable Giphy API
- More engaging visual experience
- Good for personal deployments
- Requires API key management

**Best of Both Worlds:** Keep fallback enabled
- Try GIFs first
- Fall back to emojis if they fail
- Most reliable approach

## Architecture

```
Quiz Component
    ↓
Get Visual Aid
    ↓
┌─────────────────────┐
│  GIF Service        │
│  - Check config     │
│  - Try GIF API      │
│  - Fall back emoji  │
└─────────────────────┘
    ↓              ↓
Emoji Library   Giphy API
(Always works)  (Optional)
```

## Troubleshooting

**GIFs not loading?**
- Check API key is set correctly
- Verify `enableGifFetch: true` in config
- Check browser console for errors
- Ensure not blocked by firewall/ad blocker

**Want to disable GIFs?**
```javascript
// In gifService.js
primaryMethod: 'emoji'
enableGifFetch: false
```

**Cache issues?**
```javascript
import { clearGifCache } from './services/gifService'
clearGifCache()
```

## Future Enhancements

Potential improvements:
- Support for multiple GIF APIs (Tenor, GIPHY)
- User preference toggle (emoji vs GIF)
- Custom GIF uploads
- Offline GIF caching
- GIF animation controls

## License

This implementation is part of StudyPOD and follows the MIT license.
