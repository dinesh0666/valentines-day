#!/bin/bash

# Deployment script for Valentine's Day website to GitHub Pages

echo "🚀 Starting deployment process..."

# Check if we have network connectivity
if ! ping -c 1 github.com &> /dev/null; then
    echo "❌ Error: Cannot reach github.com. Please check your network connection."
    exit 1
fi

# Build the project
echo "📦 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

# Deploy to GitHub Pages
echo "🌐 Deploying to GitHub Pages..."
npm run deploy

if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo "🎉 Your site will be available at: https://dinesh0666.github.io/valentines-day/"
else
    echo "❌ Deployment failed!"
    exit 1
fi
