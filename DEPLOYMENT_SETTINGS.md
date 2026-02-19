# 🚀 Deployment Settings Quick Reference

## Copy/Paste These Settings

Use these exact settings for any deployment platform:

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃         DEPLOYMENT CONFIGURATION             ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃                                               ┃
┃  Framework:           React (Vite)            ┃
┃  Build command:       npm run build           ┃
┃  Output directory:    dist                    ┃
┃  Node version:        18.x or higher          ┃
┃                                               ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

---

## Platform-Specific Instructions

### Cloudflare Pages

1. Go to Pages → Connect to Git
2. Select your repository
3. Enter these settings:
   ```
   Framework preset:           React (Vite)
   Build command:              npm run build
   Build output directory:     dist
   ```
4. Click **Save and Deploy**

### Netlify

1. Go to Sites → Add new site → Import from Git
2. Select your repository
3. Enter these settings:
   ```
   Build command:     npm run build
   Publish directory: dist
   ```
4. Click **Deploy site**

*Note: Netlify is already configured via `netlify.toml` - just connect repo!*

### Vercel

1. Go to Add New Project
2. Select your repository
3. Enter these settings:
   ```
   Framework Preset:    Vite
   Build Command:       npm run build
   Output Directory:    dist
   ```
4. Click **Deploy**

### GitHub Pages (via Actions)

Add `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## Build Verification

To test locally before deploying:

```bash
npm install
npm run build
ls -l dist/  # Verify dist/ was created
```

Expected output:
```
dist/index.html
dist/assets/index-[hash].css
dist/assets/index-[hash].js
dist/example_vocabulary.txt
```

---

## Environment Variables (Optional)

If you need environment variables:

### Cloudflare
- Add in Settings → Environment variables
- Prefix with `VITE_` (e.g., `VITE_API_URL`)

### Netlify
- Add in Site settings → Environment variables
- Prefix with `VITE_`

### Vercel
- Add in Project Settings → Environment Variables
- Prefix with `VITE_`

---

## Common Issues

### Issue: Build fails
**Solution**: Ensure Node.js 18.x or higher

### Issue: Wrong output directory
**Solution**: Verify output is set to `dist` (not `build` or `out`)

### Issue: Missing files
**Solution**: Check `public/` folder files are being copied

---

## Quick Links

- 📖 [Full Build Verification](./BUILD_VERIFICATION.md)
- 📚 [Cloudflare Simple Guide](./CLOUDFLARE_PAGES_SIMPLE.md)
- 🚀 [Netlify Deploy Guide](./NETLIFY_DEPLOY.md)

---

## Verified Settings ✅

These settings have been tested and verified:
- ✅ Build command works
- ✅ Outputs to `dist/` directory
- ✅ All assets included
- ✅ Build time: ~800ms
- ✅ Total size: ~197 KB (~59 KB gzipped)

**Last verified**: 2026-02-19

---

**That's it!** Copy these settings to your deployment platform and you're done! 🎉
