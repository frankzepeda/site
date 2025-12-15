# Frank Zepeda Consulting Website

Professional marketing consulting website for frankzepeda.com

## 🚀 Deploy to Vercel (Recommended)

### Method 1: Upload Folder (Easiest)

1. **Download your project folder** from wherever you saved it
2. Go to [vercel.com](https://vercel.com) and log in
3. Click **"Add New..."** → **"Project"**
4. Click **"Browse"** or drag the `frankzepeda-site` folder
5. Vercel will automatically detect it's a Vite project
6. Click **"Deploy"**
7. Wait 1-2 minutes - Done! 🎉

### Method 2: GitHub (Professional Way)

1. **Create a GitHub account** (if you don't have one) at github.com
2. **Create a new repository** called `frankzepeda-site`
3. **Upload your files** to GitHub:
   - Use GitHub's web interface to upload the folder, OR
   - Use GitHub Desktop (easier for beginners)
4. **Connect to Vercel:**
   - Go to vercel.com
   - Click "Add New..." → "Project"
   - Click "Import Git Repository"
   - Select your `frankzepeda-site` repo
   - Click "Deploy"

## 🌐 Connect Your Custom Domain (frankzepeda.com)

After deployment:

1. Go to your project in Vercel
2. Click **"Settings"** → **"Domains"**
3. Enter `frankzepeda.com`
4. Vercel will show you DNS records to add
5. Go to your domain registrar (where you bought frankzepeda.com)
6. Add the DNS records Vercel provides
7. Wait 5-60 minutes for DNS to update
8. Your site will be live at frankzepeda.com! 🎉

## 📝 Customize Your Site

Before deploying, update these details in `src/App.jsx`:

**Contact Information (around line 400-420):**
```jsx
// Change these lines:
<a href="mailto:frank@frankzepeda.com">  // ← Your real email
<a href="tel:+1234567890">  // ← Your real phone number
<a href="https://linkedin.com/in/yourprofile">  // ← Your LinkedIn URL
```

## 🛠️ Local Development (Optional)

To edit and preview locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

## 📦 What's Included

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll navigation
- ✅ Animated sections
- ✅ Contact form
- ✅ Professional Deloitte-inspired design
- ✅ Fast loading with Vite
- ✅ SEO optimized

## 🎨 Make Changes

After initial deployment, you can update:
- Text content in `src/App.jsx`
- Colors by changing the Tailwind classes
- Add new sections by copying existing section patterns

**To update live site:**
1. Make changes locally
2. Re-upload to Vercel (Method 1), OR
3. Push to GitHub (Method 2 - Vercel auto-deploys!)

## 💡 Tips

- **Free hosting forever** on Vercel's free plan
- **Automatic SSL certificate** (https://) included
- **Global CDN** = super fast worldwide
- **Updates deploy in 1-2 minutes**

## 🆘 Need Help?

- Vercel Docs: https://vercel.com/docs
- Contact: Vercel has great support chat

---

**Ready to go live!** 🚀

Upload your folder to Vercel and you'll be live in 2 minutes!
