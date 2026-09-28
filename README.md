# 📝 React Post Composer

A modern, responsive, and beginner-friendly social media Post Composer web application built with **React** and **Vite**. Easily draft, format, and preview content for **Twitter / X** and **LinkedIn** with real-time character limit validation, visual progress indicators, and live platform mockups.

---

## 📌 Project Overview

Crafting posts for different social media networks often requires adhering to varying character limits and content layouts. **React Post Composer** streamlines this process by providing a dynamic interface where switching platforms instantly recalibrates character thresholds, updates error boundaries, and mirrors the post in an authentic live preview card.

---

## ✨ Features

- 🔄 **Multi-Platform Switching:** Seamlessly toggle between Twitter/X and LinkedIn.
- ⚡ **Dynamic Character Limits:**
  - **Twitter:** 280 characters
  - **LinkedIn:** 3,000 characters
- 📊 **Real-Time Character Counter:** Live calculation in `count / limit` format with remaining character status.
- 🚦 **Visual Progress Bar:** Dynamic color-coded indicator that transitions from indigo to warning yellow, and error red when limit is exceeded.
- ⚠️ **Clear Error Handling:** High-visibility banner and input highlight when content exceeds the maximum allowed limit.
- 📱 **Live Social Media Preview:** Real-time interactive mockup showing exactly how the post looks with profile header, timestamps, and reaction buttons.
- 🏷️ **Quick-Insert Hashtags:** One-click hashtag chips relevant to Twitter and LinkedIn.
- 📋 **One-Click Copy & Clear:** Instant clipboard copy with animated success indicator and quick-reset option.
- 📱 **Fully Responsive:** Optimized for mobile phones, tablets, laptops, and ultra-wide desktops.
- 💡 **Controlled Components:** Implements React `useState` best practices for clean two-way state binding.

---

## 🛠️ Technologies Used

- **React 18** – UI library using functional components and `useState` hook
- **Vite** – Next-generation fast frontend tooling and dev server
- **Vanilla CSS (CSS3)** – Modern custom design system with CSS custom properties, glassmorphism, flexbox, and grid
- **Lucide React** – Clean and consistent vector iconography
- **Google Fonts** – *Plus Jakarta Sans* & *JetBrains Mono* for typography

---

## 📏 Platform Character Limits

| Platform | Character Limit | Ideal Content Type |
| :--- | :---: | :--- |
| **Twitter / X** | `280` characters | Bite-sized updates, quick thoughts, threads, links |
| **LinkedIn** | `3,000` characters | Detailed insights, industry lessons, articles, career stories |

---

## 📂 Folder Structure

```text
react-post-composer/
├── public/
│   └── vite.svg              # Application favicon & brand icon
├── src/
│   ├── App.jsx               # Root container, layout, and header
│   ├── App.css               # Global styling, theme tokens & responsiveness
│   ├── PostComposer.jsx      # Core composer component & live preview logic
│   └── main.jsx              # React DOM entry point
├── .gitignore                # Git ignored patterns (node_modules, dist, etc.)
├── index.html                # HTML entry template with web fonts
├── package.json              # Project dependencies and npm scripts
├── vite.config.js            # Vite configuration
└── README.md                 # Complete documentation & GitHub setup guide
```

---

## 🚀 Getting Started

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (version 18.x or higher recommended) and `npm` installed on your machine.

Verify your installation:
```bash
node -v
npm -v
```

---

### 2. Installation

Clone or extract the project, navigate into the directory, and install dependencies:

```bash
# Navigate to the project directory
cd "React Post Composer"

# Install dependencies
npm install
```

---

### 3. Running Locally

Start the local development server:

```bash
npm run dev
```

Open your browser and navigate to the displayed local URL (typically `http://localhost:5173`).

---

### 4. Building for Production

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 📸 Example Output & Behavior

### 1. Normal State (Under Limit)
```text
Composing for Twitter
[ Textarea: "Excited to share our new React release! 🚀" ]
Count: 42 / 280 (238 left)
Status: [Progress bar in vibrant Indigo]
```

### 2. Exceeded State (Over Limit)
```text
Composing for Twitter
[ Textarea: "... content exceeding 280 characters ..." ]
Count: 310 / 280 (30 over limit)
Status: [Progress bar turns Red]
[ Alert Banner ]: ⚠️ Character limit exceeded! Your post is 30 characters over the Twitter limit of 280 characters.
```

### 3. Platform Switching
Switching from **Twitter** to **LinkedIn** instantly adjusts the limit from `280` to `3,000` characters, updates the placeholder, resets warning states if within range, and renders the LinkedIn preview card mockup.

---

## 🐙 GitHub Setup & Push Instructions

Follow these exact steps to push this project to your GitHub account:

### Step 1: Initialize Git & Commit Files locally
```bash
# Initialize a new Git repository
git init

# Add all files (respecting .gitignore)
git add .

# Create initial commit
git commit -m "feat: Initial commit for React Post Composer with Twitter and LinkedIn limits"
```

### Step 2: Create a new Repository on GitHub
1. Go to [GitHub.com/new](https://github.com/new).
2. Set the repository name to: **`react-post-composer`**.
3. Choose **Public** (or **Private**).
4. Do **not** initialize with a README, .gitignore, or license (they are already included here).
5. Click **Create repository**.

### Step 3: Link and Push to GitHub
Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username:

```bash
# Rename default branch to main
git branch -M main

# Add the remote origin
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/react-post-composer.git

# Push code to GitHub
git push -u origin main
```

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
