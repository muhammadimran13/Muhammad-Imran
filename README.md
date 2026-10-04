# Muhammad Imran — Premium Portfolio

A production-ready, premium personal portfolio built with React + Vite + Tailwind CSS + Framer Motion.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open http://localhost:5173
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Fixed navigation with scroll effect
│   ├── Hero.jsx            # Hero section with typing animation
│   ├── About.jsx           # About + animated counters
│   ├── TechMarquee.jsx     # Infinite scrolling tech stack
│   ├── Skills.jsx          # Skills cards
│   ├── Services.jsx        # Services cards
│   ├── Projects.jsx        # Featured project showcase
│   ├── Timeline.jsx        # Experience timeline
│   ├── Certificates.jsx    # Certificate cards
│   ├── GitHub.jsx          # GitHub stats & contribution graph
│   ├── Testimonials.jsx    # Auto-rotating testimonials
│   ├── Achievements.jsx    # Achievement cards
│   ├── Contact.jsx         # Contact form
│   ├── Footer.jsx          # Footer with links
│   ├── Loader.jsx          # Loading screen
│   ├── CustomCursor.jsx    # Custom cursor with lag effect
│   ├── ScrollProgress.jsx  # Scroll progress bar
│   └── BackToTop.jsx       # Back to top button
├── data/
│   └── portfolioData.js    # ⭐ ALL YOUR CONTENT LIVES HERE
├── App.jsx
├── main.jsx
└── index.css
```

## ✏️ Customization

**All content is in one file:** `src/data/portfolioData.js`

Update these fields:
- `personalInfo` — your name, email, GitHub, LinkedIn links
- `projects` — add your real project URLs
- `certificates` — add real certificate links
- `stats` — your actual numbers

**Add your photo:**
Replace the "MI" placeholder in `Hero.jsx` with:
```jsx
<img src="/your-photo.jpg" alt="Muhammad Imran" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} />
```
Put your photo in the `/public/` folder.

**Add your resume:**
Put `resume.pdf` in the `/public/` folder.

## 🌐 Deployment

### Deploy to Vercel (Recommended — Free)

```bash
# Option 1: CLI
npm install -g vercel
vercel

# Option 2: GitHub
# 1. Push to GitHub
# 2. Go to vercel.com → New Project → Import your repo
# 3. Framework: Vite → Deploy
# Done! Live in 60 seconds.
```

### Deploy to Netlify

```bash
npm run build
# Drag the 'dist' folder to netlify.com/drop
```

### Deploy to GitHub Pages

1. Push this project to a GitHub repository on the `main` or `master` branch.
2. In the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
3. Every push to `main` or `master` will build the site and deploy it automatically. You can also start a deployment from the **Actions** tab with **Run workflow**.

The workflow sets Vite's base path from the repository name, so project Pages URLs work without editing configuration. For a user or organization site (`owner.github.io`), it uses `/`.

## 📦 Build for Production

```bash
npm run build
# Output in /dist folder
```

## 🔧 Contact Form

The contact form is UI-only. To make it functional, integrate one of:

1. **EmailJS** (free, no backend needed):
   - Sign up at emailjs.com
   - Install: `npm install @emailjs/browser`
   - Replace the `submit` function in `Contact.jsx`

2. **Formspree** (easiest):
   - Sign up at formspree.io
   - Change form action to your Formspree URL

3. **Your own backend**: POST to your Express API

## 🎨 Tech Stack

- ⚛️ React 18
- ⚡ Vite
- 🎨 Tailwind CSS
- 🎬 Framer Motion
- 🔷 React Icons
- ✍️ React Type Animation
- 👁️ React Intersection Observer
- 🔢 React CountUp
