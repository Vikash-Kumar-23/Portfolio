# 🚀 GitHub Pages Deployment Guide

## ✅ Current Configuration Status

Your project is **already configured** for GitHub Pages deployment with the following setup:

### 1. **vite.config.js** ✅ CORRECT
```javascript
base: command === "serve" ? "/" : "/Portfolio/"
```
- **Local development**: Uses `/` as base path
- **Production build**: Uses `/Portfolio/` as base path

**⚠️ IMPORTANT**: The `/Portfolio/` must match your **exact GitHub repository name** (case-sensitive).

---

## 🔧 Why The Blank Screen Happens

### The Problem:
When you use **absolute paths** starting with `/` (e.g., `/images/bg.png`), they work locally but fail on GitHub Pages because:

- **Locally**: `http://localhost:5173/images/bg.png` ✅
- **GitHub Pages**: `https://username.github.io/images/bg.png` ❌ (404 - missing `/Portfolio/`)
- **Should be**: `https://username.github.io/Portfolio/images/bg.png` ✅

### The Solution:
Vite's `base` configuration handles this **automatically** for:
- ✅ JavaScript imports and built bundles
- ✅ CSS background images loaded via `url()`
- ✅ Assets in the `public` folder **when referenced correctly**

**However**, paths in your `public` folder files (like `index.html`) and **hardcoded string paths** in JSX need special handling.

---

## 📋 Pre-Deployment Checklist

### Step 1: Verify Repository Name
Check that your GitHub repository name **exactly matches** the base path in `vite.config.js`:

```javascript
// If repo is named "Portfolio" → base: "/Portfolio/"
// If repo is named "portfolio" → base: "/portfolio/"
// If repo is named "my-3d-portfolio" → base: "/my-3d-portfolio/"
```

### Step 2: Update vite.config.js (if needed)
If your repository name is different, update line 6:

```javascript
export default defineConfig(({ command }) => ({
  base: command === "serve" ? "/" : "/YOUR-EXACT-REPO-NAME/",
  // ... rest of config
}));
```

### Step 3: Verify File Structure
Ensure all your assets are in the `public` folder:
```
public/
  ├── images/
  │   ├── logos/
  │   └── textures/
  └── models/
```

### Step 4: Asset Paths in Code
Your current code uses paths like `/images/bg.png` and `/models/room.glb`.

**These will work correctly** because:
1. Vite's build process handles the base path for JS bundles
2. The public folder assets are copied with the correct base path

**The only change needed** was in `index.html` (already fixed):
- ❌ `href="/images/logos/vik3.png"`
- ✅ `href="./images/logos/vik3.png"`

---

## 🏗️ Build and Deploy Process

### Option A: Manual Deployment (Recommended for First Time)

1. **Build the project**:
   ```powershell
   npm run build
   ```

2. **Verify the build**:
   - Check that `dist` folder is created
   - Verify `dist/assets/` contains your JS/CSS files
   - Verify `dist/images/` and `dist/models/` exist

3. **Test locally before deploying**:
   ```powershell
   npm run preview
   ```
   - This will serve the built files at `http://localhost:4173/Portfolio/`
   - Navigate to that URL and verify everything works

4. **Deploy to GitHub Pages**:
   
   **Method 1: Using GitHub Actions (Automated)**
   - Create `.github/workflows/deploy.yml` (see below)
   - Push to main branch
   - GitHub Actions will build and deploy automatically

   **Method 2: Manual gh-pages branch**
   ```powershell
   # Install gh-pages package
   npm install -D gh-pages

   # Add deploy script to package.json
   # Then run:
   npm run deploy
   ```

### Option B: Automated Deployment with GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## 🔍 Troubleshooting

### Issue 1: Still Getting 404 Errors
**Solution**: Verify the base path matches your repository name exactly
```javascript
// Check your repo URL: https://github.com/username/Portfolio
// Then ensure vite.config.js has:
base: "/Portfolio/"  // Must match case!
```

### Issue 2: Images Load But Models Don't
**Solution**: Check model file paths in your code. All paths starting with `/` will automatically use the base path.

### Issue 3: Styles Are Broken
**Solution**: This shouldn't happen with the current setup, but if it does:
- Verify `npm run build` completes without errors
- Check that CSS files are in `dist/assets/`

### Issue 4: Works in Preview But Not on GitHub Pages
**Solution**: 
1. Clear browser cache
2. Wait 5-10 minutes after deployment (GitHub Pages caching)
3. Check GitHub Pages settings in your repository:
   - Go to Settings → Pages
   - Ensure source is set to "GitHub Actions" or "gh-pages branch"

---

## 📝 Quick Deploy Script

Add this to your `package.json` scripts for easy deployment:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

Then install gh-pages:
```powershell
npm install -D gh-pages
```

Deploy with one command:
```powershell
npm run deploy
```

---

## ✅ Final Verification Steps

After deploying:

1. ✅ Visit `https://username.github.io/Portfolio/`
2. ✅ Open browser DevTools → Console (F12)
3. ✅ Check for no 404 errors
4. ✅ Verify all images load
5. ✅ Verify 3D models render correctly
6. ✅ Test all navigation and interactions

---

## 🎯 Summary of Changes Made

1. ✅ **index.html**: Changed favicon path from `/images/...` to `./images/...`
2. ✅ **vite.config.js**: Already correctly configured with conditional base path
3. ✅ **Asset paths in code**: No changes needed - Vite handles them automatically

## 🚀 Next Steps

1. Run `npm run build` to create production build
2. Run `npm run preview` to test locally at `/Portfolio/` path
3. If preview works, deploy to GitHub Pages using your preferred method
4. Verify deployment at `https://YOUR-USERNAME.github.io/Portfolio/`

---

## ⚠️ Important Notes

- **Repository Name**: Must match the base path exactly (case-sensitive)
- **Branch**: Ensure you're deploying from the correct branch
- **Cache**: Clear browser cache if you don't see changes immediately
- **Wait Time**: GitHub Pages can take 5-10 minutes to update after deployment

---

**Good luck with your deployment! 🎉**
