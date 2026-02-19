# URZ Quick Reference - Debug Cloning Issues

> **URZ** = **U**nderstand, **R**esolve, **Z**ero-in (troubleshooting methodology)

This is a quick reference guide for debugging repository cloning issues during deployment. Use this alongside [DEBUG_CLONING_ISSUES_ANALYSIS.md](./DEBUG_CLONING_ISSUES_ANALYSIS.md) for detailed analysis.

---

## Quick Diagnosis: 3-Step URZ Method

### **U** - Understand: What's Actually Happening?

**Common Error Pattern**:
```
✅ Success: Finished cloning repository files
❌ npm error: Could not read package.json
```

**Quick Check**:
```bash
# 1. Which branch is being deployed?
git branch -a

# 2. Does that branch have package.json?
git show <branch-name>:package.json

# 3. What's in the current branch?
ls -la
```

---

### **R** - Resolve: Pick Your Fix

| Solution | Time | When to Use |
|----------|------|-------------|
| Change Cloudflare branch | 2 min | Need immediate deploy |
| Merge PR to main | 5 min | Want proper workflow |
| Direct push to main | 1 min | Quick command-line fix |

---

### **Z** - Zero-in: Apply the Fix

#### Option A: Change Cloudflare Branch (Fastest)
```
1. Cloudflare Dashboard
2. Pages → studypod → Settings
3. Builds & deployments → Edit
4. Change branch to: copilot/repair-and-continue-structure
5. Save + Retry
```

#### Option B: Merge to Main (Best Practice)
```bash
# 1. Create PR on GitHub
# 2. Merge the PR
# 3. Cloudflare auto-deploys
```

#### Option C: Direct Push (Quickest)
```bash
git push origin copilot/repair-and-continue-structure:main
```

---

## Troubleshooting Flowchart

```
Clone succeeds but build fails?
│
├─ Is package.json missing?
│  │
│  ├─ YES → Check which branch is being deployed
│  │        │
│  │        ├─ Wrong branch? → Use URZ Method above
│  │        └─ Right branch? → Check file actually exists
│  │
│  └─ NO → Check build command configuration
│
├─ dist/ directory not found?
│  │
│  └─ Build command configured? → Should be "npm run build"
│
└─ npm install fails?
   │
   └─ Check Node version and dependencies
```

---

## Critical Checks (30 seconds)

### 1. Branch Check
```bash
# What branch am I on?
git branch --show-current

# What branches exist?
git branch -a

# Does the deploy branch have my files?
git ls-tree --name-only <branch-name>
```

### 2. File Existence Check
```bash
# Are required files present?
ls -la package.json vite.config.js
ls -la src/

# Check on specific branch
git show <branch>:package.json
```

### 3. Build Test
```bash
# Can I build locally?
npm install
npm run build
ls -la dist/
```

---

## Common Patterns & Solutions

### Pattern 1: "Clone Success + Package.json Missing"

**Diagnosis**: Branch mismatch

**Fix**: Point deployment to correct branch

**Docs**: [DEBUG_CLONING_ISSUES_ANALYSIS.md](./DEBUG_CLONING_ISSUES_ANALYSIS.md) - Issue #1

---

### Pattern 2: "Clone Success + Build Command Empty"

**Diagnosis**: Build configuration missing

**Fix**: Add `npm run build` to build command

**Docs**: [DEBUG_CLONING_ISSUES_ANALYSIS.md](./DEBUG_CLONING_ISSUES_ANALYSIS.md) - Issue #2

---

### Pattern 3: "Clone Success + dist/ Not Found"

**Diagnosis**: Expecting build artifact in git

**Fix**: Configure build command to create dist/

**Docs**: [DEBUG_CLONING_ISSUES_ANALYSIS.md](./DEBUG_CLONING_ISSUES_ANALYSIS.md) - Issue #3

---

## Prevention Checklist

Before your next deployment:

- [ ] **Verify branch**: Cloudflare points to branch with application code
- [ ] **Test locally**: Run `npm install && npm run build` successfully
- [ ] **Check git**: Ensure required files are committed to deploy branch
- [ ] **Set build command**: Configure `npm run build` in Cloudflare
- [ ] **Set output dir**: Configure `dist` as output directory
- [ ] **Document settings**: Keep copy of all deployment configuration

---

## Quick Reference: Required Settings

### Cloudflare Pages Settings
```
Framework preset: React
Build command: npm run build
Output directory: dist
Root directory: / (or empty)
Production branch: main (or your feature branch)
Node version: 18+
```

### Files Required in Deploy Branch
```
✓ package.json
✓ vite.config.js
✓ src/ directory
✓ public/ directory (if used)
✓ index.html (if in root)
```

### Files NOT in Git (Build Artifacts)
```
✗ node_modules/ (installed during build)
✗ dist/ (created during build)
✗ .env.local (environment-specific)
```

---

## Emergency Recovery

### If deployment is completely broken:

1. **Verify locally first**:
   ```bash
   npm install
   npm run build
   npm run preview
   ```

2. **If local works**:
   - Problem is deployment configuration
   - Check branch, build command, output directory

3. **If local fails**:
   - Problem is in code
   - Fix code before worrying about deployment

4. **Quick rollback**:
   ```bash
   # Revert to last working commit
   git log --oneline
   git reset --hard <last-working-commit>
   git push -f origin <branch>
   ```

---

## Get Help

### Documentation
- **Detailed Analysis**: [DEBUG_CLONING_ISSUES_ANALYSIS.md](./DEBUG_CLONING_ISSUES_ANALYSIS.md)
- **Step-by-Step Fix**: [START_HERE_DEPLOYMENT_FIX.md](./START_HERE_DEPLOYMENT_FIX.md)
- **Build Settings**: [DEPLOYMENT_SETTINGS.md](./DEPLOYMENT_SETTINGS.md)

### Common Questions

**Q: Clone succeeded, why is package.json missing?**  
A: Cloned the wrong branch. Check which branch deployment uses.

**Q: Where should dist/ directory come from?**  
A: It's created by `npm run build`, not cloned from git.

**Q: Should I merge to main or change Cloudflare branch?**  
A: Merge to main is better long-term. Change branch for quick fix.

**Q: Can I have multiple branches deployed?**  
A: Yes, Cloudflare can deploy different branches to different URLs.

---

## URZ Method Summary

**Understand**: 
- Verify what was cloned (which branch, which files)
- Check error logs carefully
- Don't assume success messages mean correct content

**Resolve**:
- Pick fastest appropriate fix for your situation
- Consider long-term implications
- Follow Git best practices when possible

**Zero-in**:
- Apply the specific fix
- Verify with build logs
- Test deployed application
- Document what you did

---

## Remember

> **"Success: Finished cloning repository files"**  
> ≠  
> **"Cloned the correct branch with required files"**

Always verify content, not just operation success! ✅

---

**Quick Ref Version**: 1.0  
**Last Updated**: February 19, 2026  
**Related PR**: #8
