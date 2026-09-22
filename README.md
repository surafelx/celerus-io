# Celerus.io

Marketing site for Celerus.io, a service that matches startups with pre-vetted global software talent. The site has a landing page and a set of articles, and the repo also holds a standalone GTM AI Agent product guide.

The repository doesn't contain a live URL or deployment config. It is a standard Next.js app intended for Vercel.

## What it does

### Landing page (`src/app/page.tsx`)

- Hero section ("Need Pre-Vetted Talent to Help You Scale?") with an animated typing placeholder that cycles through role examples, next to an auto-rotating 3D dot globe. The globe is built with `react-globe.gl` and uses country outlines fetched at runtime from the react-globe.gl GitHub examples.
- "Why Choose Us" section: top-tier talent at competitive rates, access to specialized skills, and round-the-clock productivity.
- Three-step process: Connect, Match, Scale.
- Contact form (name, email, message). The SEND button has no handler, so the form doesn't submit anything.
- Calendly booking: a popup from the "Find talent" buttons and an inline widget in the "Or book a call" section.
- Scroll animations through AOS, and icons through Lordicon.

### Articles (`src/app/articles/`)

There are seven static article pages. Each one is a hand-written `page.tsx`, and some use Chart.js charts:

- Global software talent: the key to innovation and growth at Celerus
- Choosing the right tech stack for your next SaaS product
- How C2C hiring is revolutionizing global work
- 10 companies revolutionizing hiring with flexibility and skill-based strategies
- From idea to MVP: a lean approach to SaaS product development
- How to build a remote-first team without borders
- Culture over skill (why culture matters more than skill in remote jobs)

### GTM AI Agent guide (`gtm-agent-guide.html`)

This is a self-contained HTML page with inline CSS and Google Fonts. It is a branded example product guide and walks through building a go-to-market research agent with OpenClaw and the Claude API. It covers:

- The agent's prompt
- An `input.json` template and a TypeScript runner script
- Three core prompts (market research, positioning, ICP)
- A tool list and sample output
- A $29 "Agent Pack" offer

The file sits in the repo root, not in `public/`, so the Next.js app does not serve it. To view it, open it directly in a browser. The purchase button links to `#`, so the Gumroad checkout isn't wired up.

### Analytics

`src/app/layout.tsx` loads Google Analytics (gtag), the Calendly widget script and the Lordicon script on every page.

## Tech stack

- Next.js 15 (App Router), React 19, TypeScript
- Tailwind CSS 3
- `react-globe.gl`, which pulls in three.js
- Chart.js with `react-chartjs-2`
- AOS for scroll animations
- Google Fonts through `next/font` (Geist, Tektur, Khand)

## Project structure

```
src/app/layout.tsx     Root layout: fonts, favicon, Calendly, Lordicon and Google Analytics scripts
src/app/page.tsx       Landing page
src/app/articles/      One folder per article, each with its own page.tsx
src/app/globals.css    Global styles and Tailwind layers
public/                Logos and article images
gtm-agent-guide.html   Standalone GTM AI Agent guide (not served by Next.js)
```

## Run it locally

Requirements: Node.js 18.18 or later.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

## Environment variables

None. The Google Analytics ID and the Calendly URL are hard-coded in `src/app/layout.tsx` and `src/app/page.tsx`.

## Deployment

The repo has no deployment config (no `vercel.json`) and `next.config.ts` is empty, so any Next.js host works with the default settings. On Vercel, import the repo and use the default Next.js preset.
