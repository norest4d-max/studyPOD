# Cloudflare Pages Configuration for StudyPOD

## ⚠️ Important: Branch Configuration

This project has both a **Python version** (old) and a **React/Vite version** (current).

### Deployment Requirements

**Make sure you're deploying from the correct branch!**

The React app files (`package.json`, `vite.config.js`, `src/`) exist on:
- ✅ `main` branch (after PR#4 merge)
- ✅ `copilot/repair-and-continue-structure` branch  
- ✅ `copilot/debug-cloning-issues` branch

The Python version (without React files) exists on:
- ❌ Old commits before the React conversion (e.g., commit `4cd1553`)

### Cloudflare Pages Settings

Configure your Cloudflare Pages project with these settings:

```
Framework preset: Vite
Build command: npm run build  
Build output directory: dist
Root directory: (leave empty or "/")
```

### Environment Variables

No environment variables required for basic deployment.

### Build Process

The build process:
1. Cloudflare runs `npm install` (automatically)
2. Cloudflare runs `npm run build` (your configured command)
3. The `dist/` directory is deployed to Cloudflare's CDN

### Troubleshooting

#### Error: "Could not read package.json"

This means Cloudflare is trying to build from a commit that doesn't have the React files.

**Solution:**
1. Check which branch/commit Cloudflare is building from
2. Verify that branch has `package.json` in the root
3. Update Cloudflare Pages settings to point to the correct branch
4. Retry the deployment

See `CLOUDFLARE_BUILD_ERROR_FIX.md` or `FIX_CLOUDFLARE_BRANCH_ERROR.md` in the repository root for detailed instructions.

#### Build succeeds but site doesn't work

Check that:
- Build output directory is set to `dist` (not `build` or `public`)
- Framework preset is `Vite` (or `None`)
- SPA redirect rules are configured (should be automatic)

### Verification

To verify your branch has the correct files, run:

```bash
./verify-build.sh
```

This script checks for all required files and attempts a build.

### Additional Documentation

- `CLOUDFLARE_BUILD_ERROR_FIX.md` - Complete error fix guide with root cause analysis
- `CLOUDFLARE_PAGES_SIMPLE.md` - Simple deployment guide
- `FIX_CLOUDFLARE_BRANCH_ERROR.md` - Fix branch configuration issues
- `DEPLOYMENT_SETTINGS.md` - Quick reference card
- `README.md` - Project overview

### Support

For deployment issues, see the comprehensive guides in the repository root.

---

**Note**: Cloudflare Pages does NOT require a `wrangler.toml` file for static site deployments. Configuration is done through the Cloudflare Dashboard.
