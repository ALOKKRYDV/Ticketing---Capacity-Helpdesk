# Deployment Guide

## Current Status
Your frontend is deployed on Netlify and will work with **mock data** by default when the backend is not available.

## Quick Fix (Already Applied) ✅
The application now includes:
- **Automatic fallback to mock data** when backend is unavailable
- **Environment variable support** for different API URLs
- **Development and Production configurations**

## Option 1: Use Mock Data (Current Setup)
The app is already configured to work with mock data on Netlify. No additional steps needed!

## Option 2: Deploy Backend to Connect Real API

### Deploy Backend to Render (Free)
1. Go to [Render.com](https://render.com/) and sign up
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment**: Node
5. Click "Create Web Service"
6. Once deployed, copy your service URL (e.g., `https://your-app.onrender.com`)

### Deploy Backend to Railway (Free)
1. Go to [Railway.app](https://railway.app/) and sign up
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Add these settings:
   - **Root Directory**: `/backend`
   - **Start Command**: `npm start`
5. Once deployed, copy your service URL

### Update Frontend to Use Deployed Backend

After deploying your backend:

1. Update `.env.production` file:
```env
REACT_APP_API_BASE_URL=https://your-backend-url.onrender.com/api
```

2. Commit and push:
```bash
git add .env.production
git commit -m "Configure production API endpoint"
git push origin main
```

3. Netlify will auto-rebuild and connect to your backend!

## Environment Variables

- **Development** (`.env.development`): Uses `/api` with proxy to localhost:5000
- **Production** (`.env.production`): Configure with your deployed backend URL or leave empty for mock data

## Verify It Works

### For Mock Data:
Open your Netlify URL - it should load tickets automatically!

### For Real Backend:
1. Check console in browser DevTools
2. Look for: "Using mock data" = fallback mode, "Error fetching" = trying to connect

## Need Help?
- Check browser console for detailed logs
- Verify backend is deployed and accessible
- Test backend API directly: `https://your-backend-url.onrender.com/api/tickets`
