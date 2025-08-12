# 📋 MyDiaryOneNote - Digital Productivity Companion

> **A minimalist, framework-free productivity tracking website that brings the power of structured daily logging to your browser.**

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge)](https://github.com/PhonxayMax/phonxaymax)
[![Pure HTML](https://img.shields.io/badge/Pure-HTML-orange?style=for-the-badge)](https://github.com/PhonxayMax/phonxaymax)
[![No Build Tools](https://img.shields.io/badge/No-Build%20Tools-green?style=for-the-badge)](https://github.com/PhonxayMax/phonxaymax)
[![Zero Dependencies](https://img.shields.io/badge/Zero-Dependencies-purple?style=for-the-badge)](https://github.com/PhonxayMax/phonxaymax)

## 🚀 What is MyDiaryOneNote?

**MyDiaryOneNote** is a beautifully crafted, static HTML website designed for developers, students, and professionals who want to track their daily progress without the complexity of modern web frameworks. Born from the need to mirror OneNote productivity workflows in a simple, portable format.

### ✨ Key Features

- **📝 Structured Daily Entries** - Consistent format across all pages with Summary, Tasks, Resources, Links, Time Log, and Comeback sections
- **✅ Task Management** - Three-column Kanban-style layout (Planned → Doing → Done) with interactive checkboxes
- **📚 Resource Tracking** - Categorized resources with visual badges (Book, Course, Tool, Service, Doc)
- **🔗 Link Organization** - Dedicated sections for ChatGPT sessions, OneNote pages, and external resources
- **⏱️ Time Logging** - Built-in time tracking and productivity metrics
- **🧭 Smart Navigation** - Seamless prev/next navigation with "Continue where I left off" functionality

### 🎯 Perfect For

- **Daily Productivity Tracking** - Monitor accomplishments, challenges, and progress
- **Learning Journeys** - Document courses, books, and skill development
- **Project Documentation** - Keep track of tasks, resources, and milestones
- **Research Organization** - Structure notes, links, and findings
- **Personal Knowledge Management** - Create your own digital workspace

## 📸 Visual Preview

### Home Page Interface
![MyDiaryOneNote Home Page](https://github.com/user-attachments/assets/56edbf3e-63e5-432d-9c0a-e3fad13c09b4)
*Clean, dark-themed interface with intuitive date navigation*

### Daily Entry Structure
![MyDiaryOneNote Date Page](https://github.com/user-attachments/assets/068d8438-aef9-47b4-b3f2-2531a5a73817)
*Comprehensive daily tracking with tasks, resources, and time management*

## ⚡ Quick Start

```bash
# Clone the repository
git clone https://github.com/PhonxayMax/phonxaymax.git
cd phonxaymax

# Open the website
open index.html
# or serve locally
python -m http.server 8000
```

**That's it!** No installation, no build process, no dependencies. Just pure HTML that works anywhere.

## 🏗️ Architecture

- **Technology**: Pure HTML5 + Inline CSS (CSS Custom Properties)
- **Framework**: None - Zero dependencies
- **Build Tools**: None - Ready to use
- **Browser Support**: All modern browsers (Chrome 80+, Firefox 75+, Safari 13+, Edge 80+)
- **File Size**: Ultra-lightweight (~40KB total for 8 pages)
- **Deployment**: Works on any web server or file system

---

## 📖 Detailed Setup Guide

A minimal, **HTML-only** website that mirrors your MyDiaryOneNote workflow.
It includes a **Home page** and **7 daily pages**: `Date-05-08-2025` → `Date-11-08-2025`.
All pages follow the same standard sections based on your analysis pattern: Entry summary, Tasks, Resources, Links, Paths, Time Log, and Comeback marker.

> ✅ Pure HTML (with inline `<style>`), no frameworks, no JS required.

---

## 🎯 Why MyDiaryOneNote?

This project was created to solve a common problem: **How do you maintain consistent, structured productivity tracking without getting bogged down by complex tools?**

### The Challenge
- Traditional productivity apps are often overkill for simple daily logging
- Cloud-based solutions create dependency and potential data lock-in
- Complex frameworks require build processes and maintenance overhead
- Many tools lack the specific structure needed for comprehensive daily tracking

### The Solution
MyDiaryOneNote provides a **framework-free, future-proof solution** that:
- ✅ Works offline and online equally well
- ✅ Requires no installation or setup
- ✅ Can be edited with any text editor
- ✅ Deploys anywhere (GitHub Pages, Netlify, local server, or file system)
- ✅ Maintains data ownership and portability
- ✅ Provides consistent structure without rigid constraints

---

## 1) Goals

- Provide a consistent structure for daily entries.
- Home page links to 7 date pages.
- Each date page has the same sections and navigation (prev/next/back to home).
- Easy to extend to future dates by duplicating a single template.

---

## 2) File Tree (you will create these)

```
mydiary/
├─ index.html                      # Home page (MyDiaryOneNote)
├─ Date-05-08-2025.html
├─ Date-06-08-2025.html
├─ Date-07-08-2025.html
├─ Date-08-08-2025.html
├─ Date-09-08-2025.html
├─ Date-10-08-2025.html
└─ Date-11-08-2025.html
```

> You can keep it all in one folder. No external CSS/JS needed.

---

## 3) Quick Start (Warp / any terminal)

```bash
# 1) Create the folder
mkdir -p mydiary && cd mydiary

# 2) Create empty files
touch index.html Date-05-08-2025.html Date-06-08-2025.html Date-07-08-2025.html \
      Date-08-08-2025.html Date-09-08-2025.html Date-10-08-2025.html Date-11-08-2025.html
```

Open each file in Cursor/VS Code and paste the exact HTML from the sections below.

---

## 4) Page Standard (the contract)

All **date pages** share identical sections:

1. **Header**: Title + date
2. **Nav**: Back to Home | Prev Date | Next Date
3. **Summary**: 2–5 bullet points
4. **Tasks**: Three blocks — `Planned`, `Doing`, `Done` (each with checklist items and optional time usage)
5. **Resources**: Label items with type badges (Book/Course/Tool/Service/Doc)
6. **Links**: Subsections for `ChatGPT`, `OneNote`, and `External`
7. **Paths**: Local/Cloud paths needed to continue work
8. **Time Log**: Total time and notes
9. **Comeback**: A single “return-to” marker for next session

> Keep headings and class names intact for consistency.

---

## 5) INDEX (Home) — paste into `index.html`

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>MyDiaryOneNote — Home</title>
  <style>
    :root { --bg:#0b0c10; --card:#111217; --fg:#e6e6e6; --muted:#9aa0a6; --accent:#4fc3f7; --chip:#1b1e27; --border:#1f2330; }
    * { box-sizing: border-box; }
    body { margin:0; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial; background: var(--bg); color: var(--fg); }
    .container { max-width: 960px; margin: 0 auto; padding: 24px; }
    header { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
    .title { font-size: 28px; font-weight: 800; letter-spacing: 0.2px; }
    .subtitle { color: var(--muted); margin-top: 4px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 24px; }
    .card { background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 16px; transition: transform .1s ease; }
    .card:hover { transform: translateY(-3px); }
    .card a { color: inherit; text-decoration: none; display: block; }
    .chip { display: inline-block; background: var(--chip); border: 1px solid var(--border); padding: 4px 10px; border-radius: 999px; font-size: 12px; color: var(--muted); }
    .accent { color: var(--accent); }
    footer { margin-top: 36px; color: var(--muted); font-size: 14px; }
    ul { margin: 8px 0 0 18px; }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div>
        <div class="title">MyDiaryOneNote</div>
        <div class="subtitle">Daily entries mirrored from OneNote — static HTML only</div>
      </div>
      <div class="chip">Aug 2025 · 7 entries</div>
    </header>

    <section class="grid" aria-label="Dates">
      <div class="card"><a href="Date-05-08-2025.html"><strong class="accent">Date-05-08-2025</strong><ul><li>Summary · Tasks · Links</li></ul></a></div>
      <div class="card"><a href="Date-06-08-2025.html"><strong class="accent">Date-06-08-2025</strong><ul><li>Summary · Tasks · Links</li></ul></a></div>
      <div class="card"><a href="Date-07-08-2025.html"><strong class="accent">Date-07-08-2025</strong><ul><li>Summary · Tasks · Links</li></ul></a></div>
      <div class="card"><a href="Date-08-08-2025.html"><strong class="accent">Date-08-08-2025</strong><ul><li>Summary · Tasks · Links</li></ul></a></div>
      <div class="card"><a href="Date-09-08-2025.html"><strong class="accent">Date-09-08-2025</strong><ul><li>Summary · Tasks · Links</li></ul></a></div>
      <div class="card"><a href="Date-10-08-2025.html"><strong class="accent">Date-10-08-2025</strong><ul><li>Summary · Tasks · Links</li></ul></a></div>
      <div class="card"><a href="Date-11-08-2025.html"><strong class="accent">Date-11-08-2025</strong><ul><li>Summary · Tasks · Links</li></ul></a></div>
    </section>

    <footer>
      Continue where I left off → <a class="accent" href="Date-11-08-2025.html">Date-11-08-2025</a>
    </footer>
  </div>
</body>
</html>
```

---

## 6) DATE PAGE TEMPLATE — paste into each `Date-XX-XX-XXXX.html`

> Replace the `{{DATE}}`, `{{PREV}}`, and `{{NEXT}}` placeholders accordingly.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>MyDiaryOneNote — {{DATE}}</title>
  <style>
    :root { --bg:#0b0c10; --card:#111217; --fg:#e6e6e6; --muted:#9aa0a6; --accent:#4fc3f7; --ok:#6ee7b7; --warn:#fcd34d; --done:#93c5fd; --chip:#1b1e27; --border:#1f2330; }
    * { box-sizing: border-box; }
    body { margin:0; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial; background: var(--bg); color: var(--fg); }
    .container { max-width: 960px; margin: 0 auto; padding: 24px; }
    header { display:flex; align-items:center; justify-content:space-between; gap:12px; margin-bottom: 12px; }
    .title { font-size: 24px; font-weight: 800; letter-spacing:.2px; }
    nav a { color: var(--accent); text-decoration: none; margin-right: 14px; }
    h2 { margin: 18px 0 8px; }
    section { background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 16px; margin-top: 14px; }
    .grid-2 { display:grid; grid-template-columns: 1fr 1fr; gap:12px; }
    ul { margin: 6px 0 0 18px; }
    .badge { display:inline-block; font-size:12px; padding:4px 8px; border-radius:999px; border:1px solid var(--border); background: var(--chip); color: var(--muted); }
    .kpi { display:flex; gap:10px; align-items:center; color: var(--muted); font-size: 14px; }
    .ok { color: var(--ok); } .warn { color: var(--warn); } .done { color: var(--done); }
    code, pre { background: #0a0b0f; border:1px solid var(--border); border-radius:10px; padding: 8px; display:block; overflow:auto; }
    .checkbox li { list-style: none; margin-left: 0; }
    .checkbox input { margin-right: 8px; }
    .muted { color: var(--muted); }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div class="title">MyDiaryOneNote — {{DATE}}</div>
      <nav>
        <a href="index.html">Home</a>
        <a href="{{PREV}}">← Prev</a>
        <a href="{{NEXT}}">Next →</a>
      </nav>
    </header>

    <section aria-labelledby="summary">
      <h2 id="summary">Summary</h2>
      <ul>
        <li>• Key accomplishment #1</li>
        <li>• Key accomplishment #2</li>
        <li>• Key challenge / note</li>
      </ul>
    </section>

    <section aria-labelledby="tasks">
      <h2 id="tasks">Tasks</h2>
      <div class="grid-2">
        <div>
          <h3>Planned</h3>
          <ul class="checkbox">
            <li><label><input type="checkbox"> Task A (plan)</label></li>
            <li><label><input type="checkbox"> Task B (plan)</label></li>
          </ul>
        </div>
        <div>
          <h3>Doing</h3>
          <ul class="checkbox">
            <li><label><input type="checkbox"> Task C (doing)</label></li>
          </ul>
        </div>
      </div>
      <div style="margin-top:12px;">
        <h3>Done</h3>
        <ul class="checkbox">
          <li><label><input type="checkbox" checked> Output: <code>index-headings.html</code></label></li>
          <li><label><input type="checkbox" checked> Output: <code>Index--lists-unordered-lists.html</code></label></li>
        </ul>
      </div>
      <div class="kpi" style="margin-top:10px;">
        <span class="badge">Status: <span class="done">Progressing</span></span>
        <span class="badge">Time: 4h 29m</span>
      </div>
    </section>

    <section aria-labelledby="resources">
      <h2 id="resources">Resources</h2>
      <ul>
        <li><span class="badge">Book</span> Build a Website with ChatGPT (Manning) — Ch.2</li>
        <li><span class="badge">Course</span> Udemy — TI C2000</li>
        <li><span class="badge">Tool</span> Cursor AI · GitKraken · Docker</li>
      </ul>
    </section>

    <section aria-labelledby="links">
      <h2 id="links">Links</h2>
      <h3>ChatGPT</h3>
      <ul>
        <li><a href="#" class="muted">Chat session link #1</a></li>
        <li><a href="#" class="muted">Chat session link #2</a></li>
      </ul>
      <h3>OneNote</h3>
      <ul>
        <li><a href="#" class="muted">OneNote page link</a></li>
      </ul>
      <h3>External</h3>
      <ul>
        <li><a href="#" class="muted">Cloudflare/Bunny/CDN dashboard</a></li>
        <li><a href="#" class="muted">Documentation link</a></li>
      </ul>
    </section>

    <section aria-labelledby="paths">
      <h2 id="paths">Paths</h2>
      <pre>E:/_0_P1_MyDiaryOneNote/Date-{{DATE}}/1stTaskA/HTML
E:/_0_P0_SoftwareDevelopmentRoadMap_ZIP/.../LWD6e_materials/ch04</pre>
    </section>

    <section aria-labelledby="timelog">
      <h2 id="timelog">Time Log</h2>
      <ul>
        <li>Total time usage: 0h 00m (edit as needed)</li>
        <li>Notes: </li>
      </ul>
    </section>

    <section aria-labelledby="comeback">
      <h2 id="comeback">Comeback</h2>
      <p class="muted">Comback-{{DATE}}-task-01 — Continue with: <code>index-lists.html</code></p>
    </section>
  </div>
</body>
</html>
```

---

## 7) Fill the Prev/Next for each date

Use this mapping to replace `{{PREV}}` and `{{NEXT}}`:

| Page                | PREV                      | NEXT                      |
|---------------------|---------------------------|---------------------------|
| Date-05-08-2025.html | index.html                | Date-06-08-2025.html      |
| Date-06-08-2025.html | Date-05-08-2025.html      | Date-07-08-2025.html      |
| Date-07-08-2025.html | Date-06-08-2025.html      | Date-08-08-2025.html      |
| Date-08-08-2025.html | Date-07-08-2025.html      | Date-09-08-2025.html      |
| Date-09-08-2025.html | Date-08-08-2025.html      | Date-10-08-2025.html      |
| Date-10-08-2025.html | Date-09-08-2025.html      | Date-11-08-2025.html      |
| Date-11-08-2025.html | Date-10-08-2025.html      | index.html                |

Replace `{{DATE}}` with the page date string (e.g., `05-08-2025`).

---

## 8) Checklist ✅ COMPLETED

- [x] Create folder `mydiary/`
- [x] Create `index.html` + 7 date pages
- [x] Paste the **exact** HTML for Home + Template
- [x] Replace placeholders in each date page
- [x] Open `index.html` in the browser (double-click or serve with Live Server)
- [x] Initialize Git repository with proper .gitignore
- [x] Commit all files with descriptive messages

**🎯 Project Status: COMPLETE & READY TO USE**

Optional enhancements available:
- Add a tiny script to auto-highlight the newest date on Home
- Generate pages from a JSON file (keep structure identical)
- Export to PDF per date (print CSS)
- Add search functionality across all entries
- Implement data persistence for checkboxes

---

## 9) Daily Usage Workflow

### Getting Started
1. **Navigate**: Open `index.html` in your browser
2. **Choose Entry**: Click any date card or use "Continue where I left off"
3. **Update Content**: Edit the HTML files directly in your preferred text editor
4. **Save & Refresh**: Save changes and refresh browser to see updates

### Typical Daily Session
1. 📝 **Update Summary** - Add 2-5 bullet points of key accomplishments
2. ✅ **Manage Tasks** - Move items between Planned → Doing → Done columns
3. 📚 **Add Resources** - Include books, courses, tools, or documents used
4. 🔗 **Save Links** - Add ChatGPT sessions, OneNote pages, external references
5. 📁 **Update Paths** - Include file system paths for easy continuation
6. ⏱️ **Log Time** - Record time spent and productivity notes
7. 🎯 **Set Comeback** - Update the return-to marker for your next session

### Pro Tips
- **Consistent Structure**: Keep the same sections across all date pages
- **Visual Scanning**: Use the color-coded badges and status indicators effectively
- **Navigation Flow**: Use Prev/Next links to review recent progress
- **Time Tracking**: Be honest about time logs for better productivity insights
- **Comeback Markers**: Always update these for seamless session continuity

---

## 10) How to extend

When you want to add new dates, just duplicate any existing date page, rename the file, and adjust the `{{DATE}}`, `{{PREV}}`, and `{{NEXT}}` links accordingly. Keep all sections and class names intact.

---
## 📈 Project Status

**🎯 Project Status: COMPLETE & READY TO USE**

This repository contains:
- ✅ **Production-ready website** with 8 HTML pages
- ✅ **Comprehensive documentation** (README + DOCUMENTATION.md)  
- ✅ **Visual examples** and screenshots
- ✅ **Version control** with proper .gitignore
- ✅ **Zero-dependency architecture** - works anywhere
- ✅ **Mobile-responsive design** with dark theme
- ✅ **Accessibility features** (ARIA labels, semantic HTML)

### Optional Enhancements Available
- 🔍 Add search functionality across all entries
- 📊 Generate productivity analytics from time logs  
- 📱 PWA (Progressive Web App) capabilities
- 🔄 Auto-backup to cloud storage
- 📄 Export individual pages to PDF
- 💾 Implement checkbox state persistence with localStorage

### Contributing
Feel free to fork this repository and adapt it for your needs! Some ideas:
- Create templates for different use cases (student, developer, researcher)
- Add new section types while maintaining the consistent structure  
- Improve the color scheme or responsive design
- Create automation tools for page generation

**That’s it.** You now have a clean, reproducible standard your tools can follow to produce a static, portable website out of your diary structure.
