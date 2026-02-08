# Valentine's Day Clone 💖

A beautiful, interactive Valentine's Day website clone built with React, TypeScript, and Tailwind CSS.

## Features

- 💝 Interactive "Will you be my Valentine?" question
- 🏃‍♂️ Evasive "No" button that moves away when you hover
- 🎉 Success celebration view with animations
- 🐱 Cute cat GIF from Giphy
- 💯 Love meter at 100%
- ✨ "Why you're special" interactive messages
- 🎵 Soundtrack section with horizontal scrolling
- 🎨 Beautiful gradient background
- 🌟 Floating emoji animations

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **GitHub Pages** - Deployment

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

### Automatic Deployment

```bash
./deploy.sh
```

Or manually:

```bash
npm run deploy
```

### Manual Push to GitHub (if needed)

If you need to push the code to GitHub first:

```bash
# Push to GitHub
git push -u origin main

# Then deploy to GitHub Pages
npm run deploy
```

### Troubleshooting Network Issues

If you encounter network connectivity issues:

1. Check your internet connection
2. Verify DNS settings (try `ping github.com`)
3. Check if you're behind a proxy or firewall
4. Try using a different network

Once network is restored, run:
```bash
git push -u origin main
npm run deploy
```

Your site will be available at: **https://dinesh0666.github.io/valentines-day/**

## Project Structure

```
valentines-day-clone/
├── src/
│   ├── components/
│   │   ├── FloatingEmoji.tsx    # Animated floating emojis
│   │   ├── InitialView.tsx      # Initial question view
│   │   └── SuccessView.tsx      # Success celebration view
│   ├── App.tsx                  # Main app component
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles
├── index.html                   # HTML template
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── package.json                # Dependencies and scripts
```

## License

MIT

## Credits

Inspired by the original Valentine's Day website at https://valentines-day-seven-mocha.vercel.app/
