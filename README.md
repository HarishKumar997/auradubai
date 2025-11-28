<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1AR_bUzFZYJeMvH4ALvRnM14jAdvP5aZj

## Run Locally

### Quick Start

**Prerequisites:** 
- Node.js (version 18 or higher) - [Download here](https://nodejs.org/)

**Steps:**

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   or
   ```bash
   npm start
   ```

3. **Open your browser:**
   - The app will automatically open at `http://localhost:3000`
   - If it doesn't open automatically, manually navigate to the URL

### Environment Variables (Optional)

If you need to use the Gemini API key:

1. Create a `.env.local` file in the root directory
2. Add your API key:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

**Note:** The application works without this key if you're not using AI features.

### Available Commands

- `npm run dev` or `npm start` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Troubleshooting Local Development

- **Port 3000 already in use?** Change the port in `vite.config.ts`
- **Dependencies not installing?** Try `npm cache clean --force` then `npm install`
- **Images not loading?** Make sure you have an internet connection (images load from Unsplash CDN)

For detailed local setup instructions, see [LOCAL_SETUP.md](LOCAL_SETUP.md)

## Deploy to Vercel (Free Account)

This project is fully configured for deployment on Vercel. Follow these steps:

### Prerequisites
- A Vercel account (sign up at [vercel.com](https://vercel.com) - free)
- Your project pushed to a Git repository (GitHub, GitLab, or Bitbucket)

### Quick Deployment Steps

#### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to Git:**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Import Project to Vercel:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Git Repository"
   - Select your repository (GitHub/GitLab/Bitbucket)
   - Vercel will automatically detect it's a Vite project

3. **Configure Environment Variables:**
   - In the Vercel project settings, go to "Environment Variables"
   - Add `GEMINI_API_KEY` with your API key value
   - **Important:** Select all environments (Production, Preview, Development)
   - Click "Save"

4. **Deploy:**
   - Click "Deploy"
   - Vercel will build and deploy your site automatically
   - Your site will be live at `your-project-name.vercel.app`

#### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   - Follow the prompts
   - When asked about environment variables, add `GEMINI_API_KEY`

4. **For production deployment:**
   ```bash
   vercel --prod
   ```

### Configuration Files

The project includes:
- ✅ `vercel.json` - Vercel configuration with proper routing for SPA
- ✅ Build output directory: `dist` (Vite default)
- ✅ Framework: Automatically detected as Vite
- ✅ Node.js version: >=18.0.0 (specified in package.json)

### Environment Variables

**Required Environment Variable:**
- `GEMINI_API_KEY` - Your Gemini API key

**To add environment variables in Vercel:**
1. Go to your project dashboard on Vercel
2. Navigate to **Settings** → **Environment Variables**
3. Add `GEMINI_API_KEY` with your value
4. Select all environments (Production, Preview, Development)
5. Click **Save**
6. **Redeploy** your project for changes to take effect

### Post-Deployment

- ✅ Your site will be automatically deployed on every push to your main branch
- ✅ Preview deployments are created for pull requests
- ✅ Custom domains can be added in **Project Settings** → **Domains**
- ✅ All images are using verified working URLs
- ✅ SPA routing is configured (all routes redirect to index.html)

### Troubleshooting

- **Build fails?** 
  - Check that all dependencies are in `package.json`
  - Verify Node.js version is >=18.0.0
  - Check build logs in Vercel dashboard

- **Environment variables not working?** 
  - Make sure they're set in Vercel dashboard
  - Select all environments (Production, Preview, Development)
  - Redeploy after adding variables

- **404 errors on routes?** 
  - The `vercel.json` includes SPA rewrites to handle client-side routing
  - All routes should redirect to `/index.html`

- **Images not loading?**
  - All images have been updated to use verified working Unsplash URLs
  - Images are loaded from Unsplash CDN (no local storage needed)

### Free Tier Limits

Vercel's free tier includes:
- ✅ Unlimited deployments
- ✅ 100GB bandwidth per month
- ✅ Custom domains
- ✅ Automatic SSL certificates
- ✅ Preview deployments for PRs

Perfect for hosting this furniture e-commerce site!
