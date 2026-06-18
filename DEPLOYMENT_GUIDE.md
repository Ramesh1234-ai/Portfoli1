# DEPLOYMENT & TESTING CHECKLIST

## ✅ Pre-Deployment Verification

Run these checks before deploying to ensure everything works:

```bash
# 1. Verify build completes without errors
npm run build

# 2. Preview the production build locally
npm run preview

# 3. Run linter to catch any issues
npm run lint

# 4. Check console for errors (open DevTools)
```

---

## 📤 Deployment Steps

### For Vercel (Recommended):

```bash
# Commit all changes
git add .
git commit -m "feat: complete portfolio overhaul - P0 and P1 fixes
- Rewritten experience section with real metrics
- Converted projects to case studies
- Added Contact form component
- Fixed all typos and grammar errors
- Improved hero section
- Created design system"

# Push to main branch
git push origin main

# Vercel auto-deploys on push
# Monitor deployment at https://vercel.com/dashboard
```

---

## 🧪 Post-Deployment Testing

### 1. Visual Verification (2 min)

- [ ] Hero section displays correctly
- [ ] All images load (check Network tab)
- [ ] Contact section visible
- [ ] Navigation dock works
- [ ] Theme toggle functions
- [ ] No console errors

### 2. Contact Form Testing (3 min)

```
Go to #contact section:
- [ ] All form fields visible
- [ ] Try submitting with empty fields (should show validation)
- [ ] Enter test data and submit
- [ ] Verify success message appears
- [ ] Check if email arrives (may need to setup Formspree first)
```

### 3. Mobile Testing (5 min)

```
View on phone or Chrome DevTools mobile mode:
- [ ] Hero text readable (no overflow)
- [ ] Contact form responsive
- [ ] Navigation dock works on mobile
- [ ] Images scale properly
- [ ] No horizontal scroll
```

### 4. Accessibility Check (5 min)

```
Chrome DevTools > Lighthouse:
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Click "Generate report"
4. Check Accessibility score (should be 85+)
5. Review issues and fix if score < 85
```

### 5. SEO Verification (2 min)

```
Google Search Console:
- [ ] Sitemap submitted (robots.txt present)
- [ ] No crawl errors
- [ ] Mobile-friendly status: YES
```

---

## 🔧 Formspree Setup (For Contact Form Email)

The contact form currently has a placeholder Formspree ID. To make it functional:

### Step 1: Create Formspree Account

```
1. Go to https://formspree.io
2. Sign up with email
3. Create new project
```

### Step 2: Get Your Form ID

```
After creating project, you'll get a form ID like: YOUR_FORM_ID
```

### Step 3: Update Contact Component

```javascript
// In src/components/contact.jsx, line 33:
Replace: "https://formspree.io/f/YOUR_FORM_ID";
With: "https://formspree.io/f/YOUR_ACTUAL_ID";
```

### Step 4: Rebuild & Deploy

```bash
npm run build
git add .
git commit -m "chore: setup formspree email integration"
git push origin main
```

---

## 📊 Performance Targets

After deployment, verify these metrics:

| Metric                         | Target  | Tool          |
| ------------------------------ | ------- | ------------- |
| Largest Contentful Paint (LCP) | < 2.5s  | Lighthouse    |
| First Input Delay (FID)        | < 100ms | Lighthouse    |
| Cumulative Layout Shift (CLS)  | < 0.1   | Lighthouse    |
| Mobile Score                   | > 85    | Lighthouse    |
| Accessibility                  | > 85    | Lighthouse    |
| Build Size                     | < 500KB | npm run build |

---

## 🐛 Common Issues & Fixes

### Issue: Contact Form Not Sending Emails

```
Solution:
1. Check Formspree account is created
2. Verify form ID is correct in code
3. Check spam folder for test email
4. Verify CORS settings (likely not needed for Formspree)
```

### Issue: Images Not Loading

```
Solution:
1. Check image paths in imports
2. Verify .avif format supported (it is, we use it)
3. Check file exists in src/assets/
4. Rebuild and clear browser cache
```

### Issue: Mobile Layout Broken

```
Solution:
1. Check viewport meta tag in index.html
2. Use Chrome DevTools mobile mode to debug
3. Add missing media queries for breakpoints
4. Test on actual device (not just browser emulation)
```

---

## 🎯 Metrics to Track

After deployment, monitor these metrics for improvement:

### Portfolio Analytics:

```
1. Traffic source (Google Search, LinkedIn, etc.)
2. Time spent on page (target: > 2 min)
3. Scroll depth (target: reach Contact section)
4. Contact form submissions (target: > 5 per week)
```

### Business Metrics:

```
1. Interview requests (track weekly)
2. Recruiter emails (separate from spam)
3. GitHub followers/stars (from portfolio exposure)
4. LinkedIn connection requests
```

---

## 📋 Week-by-Week Tracking

### Week 1 (After Deploy):

- [ ] Deploy to Vercel
- [ ] Test all functionality
- [ ] Fix any bugs
- [ ] Monitor error logs
- [ ] First recruiter feedback

### Week 2-3:

- [ ] Implement P2 fixes (accessibility, technical depth)
- [ ] Update GitHub READMEs
- [ ] Write technical blog post (optional)
- [ ] Track shortlist improvement

### Week 4+:

- [ ] Monitor application success rate
- [ ] Gather recruiter feedback
- [ ] Iterate based on interviews
- [ ] Add new projects as they complete

---

## 💡 Quick Reference

**Build:** `npm run build`  
**Preview:** `npm run preview`  
**Lint:** `npm run lint`  
**Dev:** `npm run dev`

**Git Workflow:**

```bash
git status          # Check what changed
git add .           # Stage all changes
git commit -m "msg" # Commit with message
git push origin main # Push to Vercel
```

---

**Ready to deploy?** Follow the deployment steps above and monitor the results!
