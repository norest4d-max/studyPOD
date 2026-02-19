# 🚀 Netlify Deployment Guide

## What You Have Now

You've deployed StudyPOD to Netlify! Here's what was added to make it work:

### 1. `netlify.toml` - Main Configuration File

This tells Netlify:
- **Build command**: `npm run build` (how to build your app)
- **Publish directory**: `dist` (where the built files are)
- **Redirects**: Makes sure all URLs work (for React Router)

### 2. `public/_redirects` - SPA Routing

This ensures your Single Page Application routes work correctly.

### 3. `public/example_vocabulary.txt` - Static Asset

The example vocabulary file is now accessible at your Netlify URL.

---

## How Netlify Deployment Works

When you push code to GitHub (or deploy manually):

1. **Netlify detects changes** in your repository
2. **Runs build command**: `npm run build`
   - Installs dependencies (`npm install`)
   - Builds your React app with Vite
   - Creates optimized files in `dist` folder
3. **Publishes the `dist` folder** to the web
4. **Your app is live!** at your-site-name.netlify.app

---

## Your Netlify Settings Should Be:

In your Netlify dashboard (site settings):

### Build Settings
- **Base directory**: (leave empty or `/`)
- **Build command**: `npm run build`
- **Publish directory**: `dist`

### Environment Variables
- **NODE_VERSION**: `18` (if not auto-detected)

**Note:** These are already configured in `netlify.toml`, so Netlify will use those settings automatically!

---

## Updating Your Deployed App

Every time you push changes to GitHub:

1. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Your changes description"
   git push
   ```

2. **Netlify automatically rebuilds** and deploys!
   - Check build progress in Netlify dashboard
   - Usually takes 1-2 minutes

---

## Troubleshooting Netlify Deployment

### App Not Showing / Blank Page

**Check:**
1. ✅ Build command is `npm run build`
2. ✅ Publish directory is `dist`
3. ✅ Build completed successfully (check deploy logs)
4. ✅ Check browser console for errors (F12)

**Fix:**
- Clear Netlify cache: Deploy settings → "Clear cache and retry deploy"
- Check deploy logs for build errors

### Build Fails

**Common issues:**
- Missing dependencies → Make sure `package.json` is committed
- Node version too old → Set NODE_VERSION to 18 in environment variables
- Syntax errors in code → Check your local build with `npm run build`

**To fix:**
1. Go to Netlify dashboard
2. Click on "Deploys"
3. Click on the failed deploy
4. Read the error message in the logs
5. Fix the issue in your code
6. Push changes to GitHub

### Example Vocabulary Not Loading

**Fix:**
- Make sure `public/example_vocabulary.txt` exists
- Rebuild and deploy

### Routes Not Working (404 errors)

**Fix:**
- Make sure `netlify.toml` has the redirect rules
- Make sure `public/_redirects` exists
- Redeploy

---

## Manual Deploy (If Not Using Git Integration)

If you're deploying manually (drag & drop):

1. **Build locally**:
   ```bash
   npm install
   npm run build
   ```

2. **Deploy the `dist` folder**:
   - Go to Netlify dashboard
   - Drag the `dist` folder to the deploy area
   - Wait for deployment to complete

---

## Custom Domain (Optional)

To use your own domain (like studypod.com):

1. Go to Netlify dashboard → Domain settings
2. Add custom domain
3. Update your domain's DNS settings (Netlify provides instructions)
4. Wait for DNS propagation (can take up to 48 hours)

---

## Environment Variables (If Needed)

If your app needs API keys or secrets:

1. Go to Netlify dashboard → Site settings → Environment variables
2. Add your variables (e.g., `API_KEY=your-key-here`)
3. Access in code with `import.meta.env.VITE_API_KEY`
4. Redeploy

**Note:** Variables must start with `VITE_` to be accessible in the app.

---

## Performance Tips

Your app is already optimized, but you can:

1. **Enable asset optimization** in Netlify (images, CSS, JS)
2. **Add a CDN** (Netlify includes this by default)
3. **Monitor performance** with Netlify Analytics (paid feature)

---

## Need Help?

- Check Netlify deploy logs for errors
- Look at browser console (F12) for client-side errors
- Verify all files are committed to Git
- Make sure `netlify.toml` is in the root directory

Your app should now be live and working at your Netlify URL! 🎉
