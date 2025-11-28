# Local Development Setup Guide

## Prerequisites

Before running the application locally, make sure you have:

- **Node.js** (version 18 or higher)
  - Download from: https://nodejs.org/
  - Verify installation: `node --version`
- **npm** (comes with Node.js)
  - Verify installation: `npm --version`

## Quick Start

### 1. Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages including:
- React 19.2.0
- Vite (build tool)
- TypeScript
- All other dependencies

### 2. Environment Variables (Optional)

If you need to use the Gemini API key:

1. Create a `.env.local` file in the root directory
2. Add your API key:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

**Note:** The application works without this key if you're not using AI features.

### 3. Start Development Server

Run one of these commands:

```bash
npm run dev
```

or

```bash
npm start
```

### 4. Access the Application

Once the server starts, you'll see output like:

```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

Open your browser and navigate to: **http://localhost:3000**

The browser should open automatically. If not, manually visit the URL.

## Available Scripts

- `npm run dev` or `npm start` - Start development server
- `npm run build` - Build for production
- `npm run preview` or `npm run serve` - Preview production build locally

## Development Features

- **Hot Module Replacement (HMR)** - Changes reflect instantly without page refresh
- **TypeScript Support** - Full type checking and IntelliSense
- **Fast Refresh** - React components update instantly
- **Auto-open Browser** - Browser opens automatically when server starts

## Troubleshooting

### Port Already in Use

If port 3000 is already in use:

1. Kill the process using port 3000, or
2. Change the port in `vite.config.ts`:
   ```typescript
   server: {
     port: 3001, // or any other available port
   }
   ```

### Dependencies Not Installing

If `npm install` fails:

1. Clear npm cache: `npm cache clean --force`
2. Delete `node_modules` folder and `package-lock.json`
3. Run `npm install` again

### Images Not Loading

- All images use Unsplash CDN, so you need an internet connection
- Check your firewall/antivirus isn't blocking requests

### TypeScript Errors

- Make sure all dependencies are installed: `npm install`
- Restart your IDE/editor
- Check `tsconfig.json` is properly configured

## Project Structure

```
├── components/          # React components
│   ├── UI.tsx          # UI components (Header, Footer, etc.)
│   └── Views.tsx       # Page views (Home, Catalog, etc.)
├── App.tsx             # Main app component
├── index.tsx           # Entry point
├── constants.ts        # Product data and constants
├── types.ts            # TypeScript type definitions
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies and scripts
```

## Development Tips

1. **Hot Reload**: Save any file and see changes instantly
2. **Console Logs**: Check browser console for any errors
3. **Network Tab**: Monitor API calls and image loading
4. **React DevTools**: Install React DevTools browser extension for debugging

## Building for Production

To test the production build locally:

```bash
npm run build
npm run preview
```

This builds the app and serves it on a local server (usually http://localhost:4173)

## Need Help?

- Check the browser console for errors
- Verify Node.js version: `node --version` (should be 18+)
- Make sure all dependencies are installed: `npm install`
- Check that port 3000 is available

