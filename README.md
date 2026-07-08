# Responsive Frontend Interface

This project is a complete, browser-ready frontend experience built with semantic HTML5, CSS3, and vanilla JavaScript only.

## Project structure
- index.html — semantic page structure with header, nav, main, article, and footer landmarks
- styles.css — mobile-first responsive styling with CSS Grid, Flexbox, clamp-based typography, and container queries
- script.js — simple state-based interactivity for the mobile nav, theme switch, and card filter

## Discovery notes
- How might we help teams make thoughtful decisions faster?
- Empathy map summary: people need calm context, clear direction, and confidence that their ideas will be received with respect.
- Grayscale wireframe sketch description: a single-column flow on mobile that expands into a split hero-and-discovery layout at tablet and a wider editorial composition on desktop.

## Accessibility and performance checklist
- WCAG-friendly color contrast and readable type scale
- Visible focus states for keyboard users
- ARIA attributes on navigation and filter controls
- Alt text on the hero illustration
- Semantic heading hierarchy from h1 to h3
- Lightweight assets and no framework overhead for faster loading

## Run locally
Open index.html directly in a browser, or serve the folder with a simple static server such as:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.
