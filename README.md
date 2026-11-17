# Mohamed Erruas — Engineering Portfolio

A responsive personal portfolio built with React, Vite, plain CSS, and Lucide icons.

## Features

- Responsive navigation with a mobile menu
- Introduction and professional summary
- Project cards with technology tags and repository links
- Grouped technical skills
- Professional experience, education, and certification sections
- Contact links and accessible focus styles
- CSS design tokens for consistent colors, spacing, and surfaces
- Reduced-motion support for visitors who prefer less animation

## Tech stack

- React
- Vite
- JavaScript (ES modules)
- CSS
- Lucide React icons

## Run locally

You need a recent version of Node.js and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your terminal.

To test a production build:

```bash
npm run build
npm run preview
```

## Project structure

```text
engineering-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── App.jsx
    ├── index.css
    └── main.jsx
```

- `index.html` provides the HTML page and the root element.
- `vite.config.js` configures Vite's React plugin.
- `src/main.jsx` mounts the React application and imports global CSS.
- `src/App.jsx` contains the page sections and reusable React components.
- `src/index.css` contains design tokens, layout, component styling, and responsive rules.

## How it was built

1. Created a React application with Vite for local development and production builds.
2. Defined shared CSS custom properties in `:root` for colors, borders, layout width, and radius.
3. Split the page into small components: `Header`, `Hero`, `Projects`, `Skills`, `Experience`, `Education`, `Contact`, and `Footer`.
4. Stored repeatable project and skill content in JavaScript arrays and rendered it with `.map()`.
5. Used CSS Grid for the hero and card layouts, and Flexbox for navigation, buttons, and aligned content.
6. Added a mobile navigation menu with React state (`useState`).
7. Added media queries for tablet and mobile screens, keyboard focus indicators, semantic page landmarks, and reduced-motion support.
8. Ran a production build and manually checked links, text, responsiveness, and project descriptions before publishing.

## Personalization checklist

Before making this public:

- [ ] Replace `YOUR_USERNAME` with your GitHub username.
- [ ] Replace the sample project repository URLs with real repositories.
- [ ] Replace `YOUR_LINKEDIN` with your actual LinkedIn profile path.
- [ ] Replace `YOUR_EMAIL@example.com` with an email address you want employers to use.
- [ ] Confirm all job dates, degree details, certification details, and technical skills.
- [ ] Make sure each project description accurately represents what you built.
- [ ] Remove any project that is unfinished or that you cannot comfortably explain.
- [ ] Add a resume PDF to `public/resume.pdf` only if you also add a visible resume link.
- [ ] Test the mobile menu and every external link.
- [ ] Run `npm run build` before deployment.

## Deployment

This project can be deployed to a static hosting provider that supports Vite builds.

Typical build settings:
- Build command: `npm run build`
- Output directory: `dist`

For example, you can deploy with GitHub Pages, Netlify, or Vercel. Follow the provider's current setup instructions and test the public URL after deployment.

## License

Personal portfolio template. Update the content and links to reflect your own work before publishing.
