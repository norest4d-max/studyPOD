#!/bin/bash

# Build Verification Script for StudyPOD
# This script verifies that all necessary files exist for deployment

echo "🔍 StudyPOD Build Verification"
echo "================================"
echo ""

# Check for required files
echo "Checking for required files..."
files_missing=0

if [ -f "package.json" ]; then
    echo "✅ package.json found"
else
    echo "❌ package.json NOT FOUND"
    files_missing=$((files_missing + 1))
fi

if [ -f "vite.config.js" ]; then
    echo "✅ vite.config.js found"
else
    echo "❌ vite.config.js NOT FOUND"
    files_missing=$((files_missing + 1))
fi

if [ -d "src" ]; then
    echo "✅ src/ directory found"
else
    echo "❌ src/ directory NOT FOUND"
    files_missing=$((files_missing + 1))
fi

if [ -f "index.html" ]; then
    echo "✅ index.html found"
else
    echo "❌ index.html NOT FOUND"
    files_missing=$((files_missing + 1))
fi

echo ""

if [ $files_missing -eq 0 ]; then
    echo "✅ All required files present!"
    echo ""
    echo "📦 Installing dependencies..."
    npm install --silent
    
    if [ $? -eq 0 ]; then
        echo "✅ Dependencies installed successfully"
        echo ""
        echo "🔨 Running build..."
        npm run build
        
        if [ $? -eq 0 ]; then
            echo ""
            echo "✅ Build successful!"
            echo ""
            if [ -d "dist" ]; then
                echo "✅ dist/ directory created"
                echo ""
                echo "🎉 Your project is ready for deployment!"
                echo ""
                echo "Cloudflare Pages settings:"
                echo "  Build command: npm run build"
                echo "  Build output directory: dist"
                echo "  Framework preset: Vite"
                exit 0
            else
                echo "❌ dist/ directory not found after build"
                exit 1
            fi
        else
            echo "❌ Build failed"
            exit 1
        fi
    else
        echo "❌ npm install failed"
        exit 1
    fi
else
    echo "❌ Missing $files_missing required file(s)"
    echo ""
    echo "⚠️  This appears to be the Python version of the app."
    echo "    The React version should be on a different branch."
    echo ""
    echo "If you're deploying with Cloudflare Pages, make sure:"
    echo "  1. You're deploying from the correct branch"
    echo "  2. The branch contains the React app files"
    echo ""
    echo "See FIX_CLOUDFLARE_BRANCH_ERROR.md for help"
    exit 1
fi
