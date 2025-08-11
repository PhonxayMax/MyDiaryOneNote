# MyDiaryOneNote - Technical Documentation

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Architecture](#architecture)
- [File Structure](#file-structure)
- [Design System](#design-system)
- [Features](#features)
- [Usage Guide](#usage-guide)
- [Customization](#customization)
- [Deployment](#deployment)
- [Maintenance](#maintenance)
- [Troubleshooting](#troubleshooting)
- [Development](#development)

---

## 📊 Project Overview

**MyDiaryOneNote** is a minimal, static HTML website designed to mirror OneNote diary workflows without any build tools, frameworks, or JavaScript dependencies. It provides a clean, dark-themed interface for organizing daily entries with consistent structure and navigation.

### Key Characteristics
- **Zero Dependencies**: Pure HTML with inline CSS
- **Framework-Free**: No React, Vue, Angular, or any JS framework
- **Build-Tool-Free**: No Webpack, Vite, Parcel, or bundlers
- **Portable**: Runs on any web server or file system
- **Offline-Ready**: Works without internet connection
- **Version Controlled**: Git-tracked with proper .gitignore

### Target Use Cases
- Daily productivity tracking
- Project documentation
- Learning progress journals
- Task management workflows
- Research note organization

---

## 🏗️ Architecture

### Design Philosophy
The project follows a **Static Site Architecture** with emphasis on:

1. **Simplicity**: Minimal complexity, maximum maintainability
2. **Consistency**: Identical structure across all date pages
3. **Accessibility**: Proper semantic HTML and ARIA labels
4. **Responsiveness**: Mobile-first responsive design
5. **Performance**: Zero-bundle, zero-framework approach

### Technology Stack
```
Frontend: HTML5 + Inline CSS (CSS Custom Properties)
Version Control: Git
Browser Support: Modern browsers (Chrome 80+, Firefox 75+, Safari 13+, Edge 80+)
```

### Page Types
```
1. Home Page (index.html)
   ├─ Navigation grid
   ├─ Entry overview cards
   └─ "Continue where I left off" link

2. Date Pages (Date-XX-XX-XXXX.html)
   ├─ Header with navigation
   ├─ Summary section
   ├─ Tasks section (Planned/Doing/Done)
   ├─ Resources section
   ├─ Links section (ChatGPT/OneNote/External)
   ├─ Paths section
   ├─ Time Log section
   └─ Comeback section
```

---

## 📁 File Structure

```
mydiary/
├── index.html                      # Home page (3.1KB)
├── Date-05-08-2025.html            # Entry 1 (5.1KB)
├── Date-06-08-2025.html            # Entry 2 (5.1KB)
├── Date-07-08-2025.html            # Entry 3 (5.1KB)
├── Date-08-08-2025.html            # Entry 4 (5.1KB)
├── Date-09-08-2025.html            # Entry 5 (5.1KB)
├── Date-10-08-2025.html            # Entry 6 (5.1KB)
└── Date-11-08-2025.html            # Entry 7 (5.1KB)

Project Root:
├── .git/                           # Git repository
├── .gitignore                      # Git ignore rules
├── README.md                       # Setup instructions
├── DOCUMENTATION.md                # This file
└── mydiary/                        # Website files
```

### File Naming Convention
- **Home**: `index.html`
- **Date Pages**: `Date-DD-MM-YYYY.html` (e.g., `Date-05-08-2025.html`)
- **Assets**: None (all styles inline)

---

## 🎨 Design System

### Color Palette
```css
:root {
  --bg: #0b0c10;        /* Background - Deep Dark */
  --card: #111217;      /* Card Background - Charcoal */
  --fg: #e6e6e6;        /* Foreground Text - Light Gray */
  --muted: #9aa0a6;     /* Muted Text - Medium Gray */
  --accent: #4fc3f7;    /* Accent/Links - Light Blue */
  --ok: #6ee7b7;        /* Success/Good - Green */
  --warn: #fcd34d;      /* Warning - Yellow */
  --done: #93c5fd;      /* Completed - Light Blue */
  --chip: #1b1e27;      /* Badge Background - Dark Gray */
  --border: #1f2330;    /* Borders - Dark Blue Gray */
}
```

### Typography
```css
Font Family: ui-sans-serif, system-ui, -apple-system, 
             Segoe UI, Roboto, 'Helvetica Neue', Arial

Font Sizes:
- Page Title: 28px (Home), 24px (Date pages)
- Section Headers (h2): 18px (calculated)
- Subsection Headers (h3): 16px (calculated)
- Body Text: 14px (calculated)
- Badge Text: 12px
```

### Layout System
```css
Container: max-width: 960px, centered
Grid: CSS Grid with auto-fit columns
Spacing: 12px, 16px, 24px, 36px increments
Border Radius: 10px (code), 16px (cards), 999px (badges)
```

### Interactive Elements
- **Hover Effects**: `transform: translateY(-3px)` on cards
- **Transitions**: `transition: transform .1s ease`
- **Checkboxes**: Native HTML checkboxes with custom styling
- **Links**: Accent color with no text-decoration

---

## ✨ Features

### Navigation System
- **Home Page**: Grid of date cards with hover effects
- **Date Pages**: Prev/Next navigation + Home link
- **Circular Navigation**: Last date links back to Home

### Task Management
- **Three-Column Layout**: Planned | Doing | Done
- **Interactive Checkboxes**: Native HTML checkboxes
- **Status Indicators**: Color-coded badges
- **Time Tracking**: Manual time logging

### Content Organization
- **Summary**: Bullet-point accomplishments
- **Resources**: Type-categorized with badges (Book/Course/Tool)
- **Links**: Organized by source (ChatGPT/OneNote/External)
- **Paths**: File system paths in code blocks
- **Comeback**: Return-to markers for next session

### Responsive Design
- **Mobile-First**: Viewport meta tag configured
- **Flexible Grid**: Auto-fit columns with minimum width
- **Touch-Friendly**: Adequate spacing for mobile interaction

### Accessibility Features
- **Semantic HTML**: Proper heading hierarchy
- **ARIA Labels**: `aria-labelledby` for sections
- **Color Contrast**: WCAG AA compliant
- **Keyboard Navigation**: Standard tab order

---

## 📖 Usage Guide

### Getting Started
1. **Open the website**: Double-click `mydiary/index.html`
2. **Navigate**: Click any date card to view that entry
3. **Edit content**: Modify HTML files directly in any text editor
4. **Save changes**: Refresh browser to see updates

### Daily Workflow
1. **Start**: Open Home page, click "Continue where I left off"
2. **Update Summary**: Edit bullet points for the day's accomplishments
3. **Manage Tasks**: Check off completed items, add new ones
4. **Add Resources**: Include books, courses, tools used
5. **Save Links**: Add relevant ChatGPT, OneNote, external links
6. **Update Paths**: Include file system paths for continuation
7. **Log Time**: Record time spent and notes
8. **Set Comeback**: Update the return-to marker

### Content Editing
```html
<!-- Edit Summary -->
<li>• Key accomplishment #1</li>
<li>• New accomplishment</li>

<!-- Add Tasks -->
<li><label><input type="checkbox"> New planned task</label></li>
<li><label><input type="checkbox" checked> Completed task</label></li>

<!-- Update Resources -->
<li><span class="badge">Book</span> New Resource Title</li>

<!-- Add Links -->
<li><a href="https://actual-link.com" class="muted">Actual Link Title</a></li>
```

---

## ⚙️ Customization

### Adding New Date Pages

1. **Duplicate existing page**:
   ```bash
   cp mydiary/Date-11-08-2025.html mydiary/Date-12-08-2025.html
   ```

2. **Update page title and header**:
   ```html
   <title>MyDiaryOneNote — Date-12-08-2025</title>
   <div class="title">MyDiaryOneNote — Date-12-08-2025</div>
   ```

3. **Fix navigation links**:
   ```html
   <a href="Date-11-08-2025.html">← Prev</a>
   <a href="Date-13-08-2025.html">Next →</a>
   ```

4. **Update paths and comeback**:
   ```html
   <pre>E:/_0_P1_MyDiaryOneNote/Date-12-08-2025/1stTaskA/HTML</pre>
   <p class="muted">Comeback-12-08-2025-task-01 — Continue with: <code>...</code></p>
   ```

5. **Add to home page**:
   ```html
   <div class="card">
     <a href="Date-12-08-2025.html">
       <strong class="accent">Date-12-08-2025</strong>
       <ul><li>Summary · Tasks · Links</li></ul>
     </a>
   </div>
   ```

### Styling Modifications

**Change color scheme**:
```css
:root {
  --bg: #your-background-color;
  --accent: #your-accent-color;
  /* ... other variables */
}
```

**Modify layout**:
```css
.container { max-width: 1200px; } /* Wider layout */
.grid { gap: 20px; }               /* More spacing */
```

**Add custom sections**:
```html
<section aria-labelledby="custom">
  <h2 id="custom">Custom Section</h2>
  <!-- Your content -->
</section>
```

### Badge System Extension
```html
<!-- Add new badge types -->
<li><span class="badge">Video</span> YouTube Tutorial</li>
<li><span class="badge">Article</span> Blog Post Title</li>
<li><span class="badge">Project</span> GitHub Repository</li>
```

---

## 🚀 Deployment

### Local Development
- **File System**: Open `index.html` directly in browser
- **Local Server**: Use Live Server extension in VS Code
- **Python**: `python -m http.server 8000`
- **Node.js**: `npx serve mydiary`

### Web Hosting
- **GitHub Pages**: Push to repository, enable Pages
- **Netlify**: Drag & drop `mydiary` folder
- **Vercel**: Connect repository, set build command to none
- **Traditional Hosting**: Upload `mydiary` folder contents

### CDN Deployment
- **Cloudflare**: Direct file upload
- **AWS S3**: Static website hosting
- **Azure Static Web Apps**: Repository deployment

### Example: GitHub Pages Deployment
```bash
# Create gh-pages branch
git checkout -b gh-pages

# Move mydiary contents to root
cp -r mydiary/* .
rm -rf mydiary

# Commit and push
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

---

## 🔧 Maintenance

### Regular Tasks
- **Content Updates**: Edit HTML files as needed
- **Git Commits**: Regular version control
- **Backup**: Export entire folder periodically
- **Browser Testing**: Verify cross-browser compatibility

### Version Control Workflow
```bash
# Daily workflow
git add .
git commit -m "Update Date-$(date +%d-%m-%Y) entries"
git push origin master

# Feature additions
git checkout -b feature/new-section
# ... make changes ...
git commit -m "Add new section to date pages"
git checkout master
git merge feature/new-section
```

### Performance Monitoring
- **File Sizes**: Keep HTML files under 10KB each
- **Load Times**: Monitor with browser DevTools
- **Mobile Testing**: Use responsive design mode

### Content Migration
```bash
# Export all content to markdown
find mydiary -name "*.html" -exec pandoc {} -o {}.md \;

# Backup with timestamp
tar -czf mydiary-backup-$(date +%Y%m%d).tar.gz mydiary/
```

---

## 🐛 Troubleshooting

### Common Issues

**1. Pages not linking correctly**
```
Problem: 404 errors when clicking navigation
Solution: Check file names match exactly (case-sensitive)
```

**2. Styles not applying**
```
Problem: Page appears unstyled
Solution: Verify CSS is within <style> tags in <head>
```

**3. Checkboxes not saving state**
```
Problem: Checkbox states reset on refresh
Solution: This is expected behavior (static HTML)
Enhancement: Add localStorage JavaScript if needed
```

**4. Mobile display issues**
```
Problem: Layout broken on mobile
Solution: Verify viewport meta tag is present
```

### Browser Compatibility
```
Chrome 80+: Full support ✅
Firefox 75+: Full support ✅
Safari 13+: Full support ✅
Edge 80+: Full support ✅
IE 11: Not supported ❌
```

### Validation
- **HTML**: Use W3C Markup Validator
- **CSS**: Use W3C CSS Validator
- **Accessibility**: Use WAVE or axe tools

---

## 🔨 Development

### Development Environment Setup
```bash
# Clone repository
git clone <repository-url>
cd mydiary-project

# Optional: Use VS Code with extensions
code .
# Install: Live Server, HTML CSS Support, Prettier
```

### Code Standards
- **HTML**: Valid HTML5, semantic structure
- **CSS**: Use custom properties, consistent naming
- **Comments**: Document complex sections
- **Formatting**: Consistent indentation (2 spaces)

### Testing Checklist
- [ ] All navigation links work
- [ ] All pages load without errors
- [ ] Mobile responsive design
- [ ] Cross-browser compatibility
- [ ] HTML/CSS validation passes
- [ ] Accessibility audit passes

### Enhancement Ideas
```javascript
// Optional: Add search functionality
function searchEntries(query) {
  // Implementation for searching across all date pages
}

// Optional: Add export functionality
function exportToPDF(pageId) {
  // Implementation for PDF export
}

// Optional: Add checkbox persistence
function saveCheckboxState(pageId, checkboxId, state) {
  localStorage.setItem(`${pageId}-${checkboxId}`, state);
}
```

### Code Review Guidelines
1. **Structure**: Consistent HTML structure across pages
2. **Styling**: Use CSS custom properties
3. **Navigation**: Verify all links work correctly
4. **Content**: Placeholder content is appropriate
5. **Accessibility**: ARIA labels and semantic HTML

---

## 📝 License & Credits

This project is designed as a personal productivity tool. Feel free to modify and adapt for your own needs.

**Created**: August 2025  
**Last Updated**: August 11, 2025  
**Version**: 1.0.0

---

## 📞 Support

For issues, questions, or enhancements:
1. Check this documentation first
2. Review the README.md file
3. Test in multiple browsers
4. Check Git commit history for recent changes

Remember: This is a simple static website. Most "issues" can be resolved by checking file paths and HTML syntax.
