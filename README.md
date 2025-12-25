# Professional Developer Portfolio

A high-performance, interactive personal portfolio website built for Full Stack Developers. Features a "Digital Architect" theme with advanced animations and 3D effects.

## 🚀 Live Demo
[Link to your live demo here]

## ✨ Features

- **Cyber/Terminal Aesthetic**: Dark mode with neon accents and coding themes.
- **Advanced Animations**:
  - **Glitch Effect**: Custom CSS text glitch on the hero section.
  - **Staggered Reveal**: Grid items pop in sequentially for a cinematic feel.
  - **Neon Pulse**: Interactive hover states on cards.
- **Interactive Elements**:
  - **Custom Cursor**: High-performance, 60fps trailing cursor.
  - **3D Tilt Cards**: Project cards respond to mouse movement.
- **Fully Responsive**: Optimized for all devices.

## 🛠️ Tech Stack

- **Core**: React 18, Vite
- **Styling**: Modern CSS3 (Variables, Keyframes, Flexbox/Grid)
- **Performance**: Intersection Observer for scroll animations (Zero bloat).

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Local Server**
   ```bash
   npm run dev
   ```

## 🌍 Deployment

This project is configured for **GitHub Pages** (see `vite.config.js`).

To deploy:
1. Update `base` in `vite.config.js` to match your repository name:
   ```js
   base: '/repository-name/'
   ```
2. Run build:
   ```bash
   npm run build
   ```
3. Deploy the `dist` folder.

## 📝 Customization

- **Content**: Edit files in `src/components/` (Hero, TechStack, Projects, etc.).
- **Styles**: Global variables are in `src/index.css`.

---
Designed & Built by **Mohammed Toulli**
