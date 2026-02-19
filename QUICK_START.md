# 🚀 Quick Start Guide

## Run StudyPOD Locally on Your Computer

Follow these simple steps to run the app on your own computer:

### Step 1: Check if You Have Node.js

Open your terminal (Command Prompt on Windows, Terminal on Mac/Linux) and type:

```bash
node --version
```

**If you see a version number (like v18.x.x or higher)**, you're good to go! Skip to Step 3.

**If you get an error or "command not found"**, continue to Step 2.

### Step 2: Install Node.js (if needed)

1. Go to [nodejs.org](https://nodejs.org/)
2. Download the **LTS version** (Long Term Support)
3. Install it (follow the installer instructions)
4. Restart your terminal
5. Test again with `node --version`

### Step 3: Navigate to the Project Folder

Open your terminal and go to where you cloned/downloaded this project:

```bash
cd path/to/studyPOD
```

For example:
- Windows: `cd C:\Users\YourName\Documents\studyPOD`
- Mac/Linux: `cd ~/Documents/studyPOD`

### Step 4: Install Dependencies

This downloads all the packages the app needs (only do this once):

```bash
npm install
```

Wait for it to finish (might take a minute or two).

### Step 5: Start the App!

```bash
npm run dev
```

You should see something like:

```
  VITE v5.x.x  ready in XXX ms

  ➜  Local:   http://localhost:3000/
  ➜  press h + enter to show help
```

### Step 6: Open in Your Browser

The app should automatically open in your browser. If not:

1. Open your web browser (Chrome, Firefox, Safari, etc.)
2. Go to: `http://localhost:3000`

**That's it! The app is now running locally on your computer! 🎉**

---

## Stopping the App

To stop the app:
- Press `Ctrl + C` in the terminal (or `Cmd + C` on Mac)

## Running It Again Later

Next time you want to run the app:

1. Open terminal
2. Navigate to project folder: `cd path/to/studyPOD`
3. Run: `npm run dev`

That's it! No need to install dependencies again.

---

## Troubleshooting

### Port Already in Use

If you see "port 3000 is already in use":
- Another app is using that port
- Close the other app or use: `npm run dev -- --port 3001`

### Module Not Found Errors

If you see "Cannot find module" errors:
- Run `npm install` again
- Make sure you're in the correct folder

### Changes Not Showing

If you made changes but don't see them:
- The app should auto-reload, but if not:
  - Stop the app (Ctrl+C)
  - Run `npm run dev` again
  - Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)

### Still Having Issues?

1. Make sure you're in the right folder
2. Delete `node_modules` folder and run `npm install` again
3. Make sure your Node.js version is 18 or higher

---

## Building for Production

If you want to create a production build (like what's deployed on Netlify):

```bash
npm run build
```

The build output will be in the `dist` folder.

To preview the production build locally:

```bash
npm run preview
```
