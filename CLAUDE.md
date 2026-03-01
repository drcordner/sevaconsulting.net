# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static HTML marketing website for Seva Consulting — a boutique thinking partnership service for senior technical leaders (CTOs, founders, senior engineers) run by David Cordner.

## Development

**No build process or package manager.** This is plain HTML/CSS/JS.

Run locally with:
```bash
npx local-web-server
```

This uses `lws.config.js` to rewrite `/clarity` and `/clarity/` to `clarity.html`, matching the Netlify production behaviour.

## Deployment

Hosted on Netlify. The `_redirects` file configures URL rewrites so clean URLs (e.g. `/clarity`) serve `.html` files without a redirect (HTTP 200 rewrite, not 301).

## Pages

| URL | File | Purpose |
|-----|------|---------|
| `/` | `index.html` | Homepage: intro, profile, testimonials |
| `/clarity` | `clarity.html` | Clarity Session offering and booking |
| `/situations` | `situations.html` | Eight specific situations David addresses |

## Styling

CSS variables are defined in `css/styles.css`. Key values:
- Accent/navy: `#2c4a6e`
- Background: `#faf9f7`
- Body text: `#2d2d2d`
- Fonts: `Libre Baskerville` (headings/quotes), `Source Sans 3` (body)
- Max content width: 680px (`.container`)
- Responsive breakpoints: 600px and 480px

`css/situations.css` contains additional styles specific to `situations.html`.

## JavaScript

`js/carousel.js` contains a testimonial carousel (vanilla JS, IIFE pattern) but is not currently wired up — testimonials are rendered as static HTML.
