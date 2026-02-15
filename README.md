# Siam Arefin - Machine Learning Engineer Portfolio

A modern, professional portfolio website built with React, showcasing ML/AI projects, competitions, and experience.

## 🚀 Features

- **Modern Design**: Cyberpunk-inspired aesthetic with cyan/blue gradient theme
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Engaging scroll effects and hover interactions
- **SEO Optimized**: Comprehensive meta tags for better search visibility
- **Performance Focused**: Fast loading and smooth user experience

## 🛠️ Technologies Used

- **React 18** - UI framework
- **Lucide React** - Modern icon library
- **CSS3** - Custom animations and responsive design
- **JetBrains Mono** - Monospace font for code aesthetic

## 📦 Installation

1. **Clone or extract the project files**

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

The application will open at `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── Portfolio.jsx       # Main portfolio component
│   ├── App.js             # App wrapper
│   ├── index.js           # Entry point
│   └── styles.css         # Global styles
├── package.json           # Dependencies
└── README.md             # This file
```

## 🎨 Customization

### Replace Images

Update the `image` property in the `projects` array in `Portfolio.jsx`:

```javascript
const projects = [
  {
    title: "Your Project",
    image: "/path/to/your/image.jpg",  // Update this
    // ... other properties
  }
];
```

### Update Links

All GitHub links currently point to `https://github.com/siamarefin`. Update them with your actual project repository URLs.

### Modify Content

- **Personal Info**: Update contact details in the hero section
- **Projects**: Edit the `projects` array
- **Skills**: Modify the `skills` object
- **Competitions**: Update the `competitions` array
- **Experience**: Edit the experience section content

### Change Colors

The main color scheme uses CSS custom properties. To change the theme:

1. Primary accent: `#06b6d4` (cyan)
2. Secondary accent: `#3b82f6` (blue)
3. Background: `#0a0a0a` (dark)

Update these values in `Portfolio.jsx` or add CSS variables in `styles.css`.

## 🌐 Deployment

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag the `build` folder to [Netlify Drop](https://app.netlify.com/drop)
3. Your site is live!

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/your-repo-name",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
3. Run: `npm run deploy`

## 📧 Contact

- **Email**: siam12@student.sust.edu
- **GitHub**: [@siamarefin](https://github.com/siamarefin)
- **LinkedIn**: [linkedin.com/in/siamarefin](https://linkedin.com/in/siamarefin)

## 📄 License

This project is open source and available for personal use.

---

**Built with ❤️ by Siam Arefin**
