# 🎨 Reddirani's Portfolio

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Reddirani-00d4aa?style=for-the-badge&logo=react)
[![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5+-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

> **Crafting digital experiences with precision** ✨

A modern, responsive portfolio website showcasing projects, experience, and skills as a full-stack React developer.

[View Live](https://reddirani-portfolio.com) • [Download CV](./public/cv.pdf) • [Contact Me](https://reddirani-portfolio.com#contact)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Portfolio Sections](#portfolio-sections)
- [Customization](#customization)
- [Contact](#contact)

---

## 🎯 Overview

This is a **modern, interactive portfolio website** built with React and Vite. It showcases professional projects, technical experience, and skills with a sleek dark theme and smooth animations. Designed to impress potential employers and clients with a fast, responsive user experience.

**Key Highlights:**

- ⚡ Lightning-fast performance with Vite
- 🎨 Modern UI with animated components
- 📱 Fully responsive design
- 🌙 Dark theme with accent colors
- ♿ Accessible and SEO-friendly
- 🚀 Production-ready

---

## ✨ Features

- **Hero Section** - Eye-catching introduction with animated background
- **About Section** - Professional background and expertise overview
- **Experience Section** - Detailed work history and achievements
- **Projects Portfolio** - Showcase of featured projects with descriptions
- **Contact Section** - Easy-to-use contact form
- **Smooth Animations** - CSS animations and transitions throughout
- **Responsive Navigation** - Mobile-friendly navbar with smooth scrolling
- **Social Links** - Quick access to GitHub, LinkedIn, and other profiles
- **Mobile Optimized** - Perfect on all screen sizes

---

## 🛠️ Tech Stack

| Category               | Technologies                 |
| ---------------------- | ---------------------------- |
| **Frontend Framework** | React 18+                    |
| **Build Tool**         | Vite 5+                      |
| **Styling**            | CSS3 (Custom)                |
| **Scripting**          | JavaScript (ES6+)            |
| **Code Quality**       | ESLint                       |
| **Development**        | HMR (Hot Module Replacement) |

---

## 📁 Project Structure

```
PortfolioWebsite/
├── public/
│   └── projects/              # Project images and assets
├── src/
│   ├── components/
│   │   ├── AnimatedBorderButton.jsx
│   │   └── Button.jsx
│   ├── layout/
│   │   ├── Navbar.jsx         # Navigation component
│   │   └── Footer.jsx         # Footer component
│   ├── sections/
│   │   ├── Hero.jsx           # Hero/introduction section
│   │   ├── About.jsx          # About section
│   │   ├── Experience.jsx     # Experience section
│   │   ├── Projects.jsx       # Projects showcase
│   │   └── Contact.jsx        # Contact form
│   ├── assets/                # Images, icons, media
│   ├── App.jsx                # Main app component
│   ├── index.css              # Global styles
│   └── main.jsx               # React entry point
├── index.html                 # HTML template
├── package.json               # Dependencies
├── vite.config.js             # Vite configuration
├── eslint.config.js           # ESLint configuration
└── README.md                  # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/reddirani/portfolio.git
   cd PortfolioWebsite
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173`
   - The app will hot-reload on file changes

### Building for Production

```bash
npm run build
```

The optimized build will be generated in the `dist/` folder.

---

## 📜 Available Scripts

| Script            | Purpose                           |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start development server with HMR |
| `npm run build`   | Create optimized production build |
| `npm run preview` | Preview production build locally  |
| `npm run lint`    | Run ESLint to check code quality  |

---

## 🎨 Portfolio Sections

### 1. **Hero Section**

First impression with a bold headline, subtitle, and call-to-action buttons for contacting or downloading CV.

### 2. **About Section**

Professional introduction highlighting expertise in React, Redux, Next.js, TypeScript, and modern web technologies.

### 3. **Experience Section**

Detailed timeline of professional experience and key accomplishments.

### 4. **Projects Section**

Showcase of featured projects with descriptions, technologies used, and links to live demos and source code.

### 5. **Contact Section**

Easy way for potential employers and clients to get in touch.

---

## 🎨 Customization

### Update Personal Information

Edit the content in each section component:

- **Hero**: `src/sections/Hero.jsx`
- **About**: `src/sections/About.jsx`
- **Experience**: `src/sections/Experience.jsx`
- **Projects**: `src/sections/Projects.jsx`
- **Contact**: `src/sections/Contact.jsx`

### Modify Styling

Global styles are in `src/index.css`. Component-specific styles are defined within each component file.

### Add/Remove Projects

Update the projects data in `src/sections/Projects.jsx` to add or remove portfolio items.

---

## 📱 Responsive Design

This portfolio is fully responsive and optimized for:

- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1440px+)

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Vercel automatically deploys on push

### Deploy to Netlify

1. Build the project: `npm run build`
2. Connect `dist/` folder to Netlify
3. Deploy on push

### Deploy to GitHub Pages

```bash
npm run build
git add dist -f
git commit -m "Deploy"
git push origin main
```

---

## ✅ Best Practices

- **Performance**: Images are optimized, lazy loading implemented
- **Accessibility**: Semantic HTML, proper ARIA labels
- **SEO**: Meta tags, proper heading hierarchy
- **Code Quality**: ESLint configured, consistent formatting
- **Mobile First**: Design approach starts from mobile
- **Dark Theme**: Easier on the eyes, modern aesthetic

---

## 🔮 Future Enhancements

- [ ] Add blog section
- [ ] Implement dark/light theme toggle
- [ ] Add animations on scroll
- [ ] Integrate with headless CMS
- [ ] Add animation library (Framer Motion)
- [ ] Implement email notifications on contact form submission
- [ ] Add testimonials section

---

## 📧 Contact

Let's connect! Reach out through:

- **Email**: [your-email@example.com](mailto:your-email@example.com)
- **GitHub**: [@reddirani](https://github.com/reddirani)
- **LinkedIn**: [reddirani](https://linkedin.com/in/reddirani)
- **Portfolio**: [reddirani-portfolio.com](https://reddirani-portfolio.com)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Made with ❤️ by Reddirani**

⭐ If you like this portfolio, please give it a star!

</div>
