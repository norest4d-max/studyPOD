# Cloudflare Pages Deployment - Simple Guide

## Quick Setup (3 Steps)

### Step 1: Connect Your Repository
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Click **Workers & Pages** → **Create application** → **Pages**
3. Connect your GitHub account
4. Select your repository: `norest4d-max/studyPOD`

### Step 2: Configure Build Settings
When asked for build settings, enter:

```
Framework preset:          Vite
Build command:            npm run build
Build output directory:   dist
```

That's it! **No custom configuration files needed!**

### Step 3: Deploy
Click **Save and Deploy**

Cloudflare will automatically:
1. Install dependencies (`npm install`)
2. Build your app (`npm run build`)
3. Deploy the `dist/` folder
4. Give you a live URL! 🎉

---

## Your Live Site

After deployment completes (2-3 minutes), you'll get a URL like:
```
https://studypod.pages.dev
```

---

## That's It!

No Workers, no wrangler files, no custom code - just a simple static site deployment!

### Need to Redeploy?

Push any changes to GitHub → Cloudflare automatically rebuilds and deploys ✅

---

## Troubleshooting

**Build fails?**
- Make sure build command is: `npm run build`
- Make sure output directory is: `dist`
- Framework preset should be: `Vite` (or `None`)

**Still having issues?**
Check your settings:
1. Go to your project in Cloudflare dashboard
2. Settings → Builds & deployments
3. Verify the build command and output directory
4. Retry deployment

---

## Why This Works

This is a **static site** deployment:
- No server-side code
- No Workers needed
- No custom configuration files
- Just HTML, CSS, JavaScript
- Cloudflare serves it from their global CDN

Simple, fast, and free! 🚀
