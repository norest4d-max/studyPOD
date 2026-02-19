# 🚨 QUICK FIX: Cloudflare Pages "package.json not found" Error

## The Problem
Your Cloudflare Pages build is failing because the dashboard settings are wrong.

## The Solution (2 minutes)

### 1. Go to Cloudflare Dashboard
- Open your Cloudflare Pages project
- Click **Settings** → **Builds & deployments**

### 2. Click "Edit" on Build Configuration

### 3. Change These Settings:

**BEFORE (Wrong ❌):**
```
Build command:        [empty or wrong]
Deploy command:       npm run build
```

**AFTER (Correct ✅):**
```
Framework preset:     Vite (or None)
Build command:        npm install && npm run build
Build output directory: dist
```

### 4. Save and Retry
- Click **Save**
- Go to **Deployments** tab
- Click **Retry deployment** on the failed build

## That's It!

Your app will now:
1. ✅ Install dependencies with `npm install`
2. ✅ Build with `npm run build`
3. ✅ Deploy successfully!

---

## Still Having Issues?

See the complete guide: [CLOUDFLARE_PAGES_FIX.md](./CLOUDFLARE_PAGES_FIX.md)

## Why This Happened

You accidentally set `npm run build` as the **deploy command** instead of the **build command**.

Cloudflare runs:
- **Build command** = During the build phase (when npm is available)
- **Deploy command** = After build (for deployment tools like wrangler)

You need npm to run during the **build phase**, not the deploy phase!
