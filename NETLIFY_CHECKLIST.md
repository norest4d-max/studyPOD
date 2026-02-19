# ✅ Netlify Setup Checklist

Follow this checklist to make sure your app displays correctly on Netlify:

## Before Deploying

- [ ] All code is committed to GitHub
- [ ] `netlify.toml` file exists in root directory
- [ ] `public/_redirects` file exists
- [ ] `public/example_vocabulary.txt` file exists
- [ ] `package.json` has correct build scripts

## In Netlify Dashboard

Go to your site settings and verify:

### Build & Deploy Settings

- [ ] **Build command**: `npm run build` (or leave empty - netlify.toml will handle it)
- [ ] **Publish directory**: `dist` (or leave empty - netlify.toml will handle it)
- [ ] **Base directory**: Leave empty

### Deploy Settings

- [ ] Connected to your GitHub repository
- [ ] Branch to deploy is selected (e.g., `main` or `copilot/repair-and-continue-structure`)
- [ ] Auto-deploy is enabled (deploys on every push)

### Environment (Optional)

- [ ] Node version: If issues occur, set `NODE_VERSION` to `18`

## After Deploying

- [ ] Check deploy logs - all steps completed successfully
- [ ] Visit your Netlify URL - app loads
- [ ] Try uploading a vocabulary file - works
- [ ] Try using example vocabulary - works
- [ ] Test quiz functionality - works
- [ ] Check browser console (F12) - no errors

## If App Doesn't Show

Try these steps in order:

1. **Check Deploy Logs**
   - Go to Netlify Dashboard → Deploys
   - Click on latest deploy
   - Read the logs for errors

2. **Verify Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Clear Cache and Retry**
   - Deploys → Trigger deploy → Clear cache and deploy site

4. **Check Files Are Committed**
   ```bash
   git status
   git add .
   git commit -m "Add Netlify config"
   git push
   ```

5. **Check Browser Console**
   - Open your Netlify site
   - Press F12 to open developer tools
   - Look for errors in Console tab

## Common Issues & Solutions

### ❌ "Failed to compile" in deploy logs
**Solution**: Fix the error shown in logs, commit, and push

### ❌ Blank white page
**Solution**: 
- Check build settings (command and directory)
- Clear cache and redeploy
- Check browser console for errors

### ❌ "File not found" or 404 errors
**Solution**: 
- Make sure `netlify.toml` redirect rules are present
- Make sure `public/_redirects` exists
- Redeploy

### ❌ Example vocabulary doesn't load
**Solution**: 
- Make sure `public/example_vocabulary.txt` exists
- Commit and push the public folder
- Redeploy

## Need More Help?

See [NETLIFY_DEPLOY.md](NETLIFY_DEPLOY.md) for detailed troubleshooting.

---

## Quick Commands

```bash
# Check what's committed
git status

# Add all files
git add .

# Commit changes
git commit -m "Add Netlify configuration"

# Push to GitHub (triggers Netlify deploy)
git push

# Or push to specific branch
git push origin your-branch-name
```

Once you push, Netlify will automatically rebuild and deploy! 🚀
