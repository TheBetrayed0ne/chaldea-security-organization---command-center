# Chaldea Tactical Intranet

An in-universe control interface for the Chaldea Security Organization.

This project recreates Chaldea’s internal terminal as a living web app: facility dashboards, rayshift status, staff bulletins, cafeteria rotation, weird anomaly logs, and all the quiet HR / morale systems that keep the place from collapsing between singularities.

The goal is for the UI to feel like something Da Vinci, Romani, Mash, Ritsuka, and the rest of Chaldea’s staff would actually use hour by hour—not just a fandom landing page.

---



## Status

- **Current focus:** Command Core dashboard, CHALDEAS status view, and basic navigation shell  
- **Planned:** Rayshift mission list, Servant/Staff registry (Chaldexnet), Anomalies index, HR / Safeguarding tools, “Hearthspace” morale view

---

## Features

- **Command Core:** Leyline energy monitoring, facility + human order status, live security feed, and summary tiles (staff efficiency, leyline sync, critical room status).
- **CHALDEAS Overview:** Earth/orbit view with environmental status, emotional climate, staff bulletins, and daily cafeteria rotation.
- **In-universe flavor:** All copy, labels, and logs are written as if they were produced by Chaldea staff (Security, Medical, Logistics, HR, etc.).

More sections (Rayshift, Saint Graph, Chaldexnet, Medical, Anomalies, Sheba Lens, Kyle Archives) are already present in the navigation and will be wired up as content and data models are added.

---

## Tech Stack

- TypeScript  
- React + Vite (generated from the `google-gemini/aistudio-repository-template`)  
- Tailwind / custom CSS for the “arctic operations terminal” look  
- Component-driven layout with data pulled from local JSON for now

No external backend is required at this stage; everything runs as a static SPA.

---

## Getting Started

### Requirements

- Node.js (LTS recommended)
- npm or pnpm

### Install and run

```bash
# clone
git clone https://github.com/TheBetrayed0ne/Chaldea-Website.git
cd Chaldea-Website

# install dependencies
npm install

# start dev server
npm run dev
```

Then open the printed `localhost` URL in your browser.
You should see the Chaldea login terminal, followed by the CHALDEAS overview and Command Core.

### Build for production

```bash
npm run build
npm run preview   # optional local preview
```

Static output is generated into `dist/` and can be deployed to GitHub Pages, Netlify, Vercel, or any static host.

---

## Project Structure

High-level layout (names may evolve as the app grows):

* `src/`

  * `components/` – Reusable UI blocks (cards, feeds, status tiles, charts).
  * `data/` – In-universe data sources (bulletins, menus, metrics, sample missions).
  * `services/` – Helpers for loading / mapping data into UI state.
  * `App.tsx` – Top-level layout shell and routing between major views.
  * `types.ts` – Shared TypeScript types for metrics, logs, and entities.

The idea is to keep **lore/content** in `data/` and **UI logic** in `components/` so Chaldea can expand without turning into a junk drawer.

---


## Canon / AU Notes

This project assumes a specific **AU (alternate universe)** version of Chaldea and Fate/Grand Order:

- It uses a lot of original lore and OCs (for example, the Warden “Kyle” and his associated systems/rooms).
- Chaldea’s layout, departments, and culture are expanded and sometimes reinterpreted (Hearthspace, HR / Safeguarding, anomalous rooms, etc.).
- The timeline and character status **do not** strictly match FGO’s canonical story beats or endings.
- Any familiar characters (Ritsuka, Mash, Da Vinci, various Servants) are used in an AU context that may diverge heavily from canon personality, relationships, or events.

Nothing here should be taken as “what actually happens in Fate/Grand Order.”  
It’s a lore-heavy fan AU being visualized as if it were a real Chaldea intranet.

---


## In-Universe Design Notes

A few principles guiding how the UI behaves:

* It should feel like **infrastructure**, not a marketing site: calm, legible, and slightly paranoid.
* Color is treated like an instrument panel: cyan/blue for routine, amber/red only when things are truly bad.
* Every piece of text should sound like a real department wrote it (Security, HR, Logistics, Medical, etc.).
* Kyle, Foreigners, and other anomalies are treated as **operational facts** in the system (FROST tags, room status, HR notes) rather than mascots plastered on the home page.

---

## Roadmap (short version)

* Rayshift / Mission dashboard (team assignments, risk, timelines)
* Chaldexnet / Saint Graph registry for Servants and key staff
* Anomalies index linked to the Command Core security feed
* HR / Safeguarding hub (policies, reports, mediation, wellbeing tools)
* “Hearthspace” morale view and anonymous board
* Role-aware views for Staff / Master / Servants

---


## Roadmap (short version)

* Rayshift / Mission dashboard (team assignments, risk, timelines)
* Chaldexnet / Saint Graph registry for Servants and key staff
* Anomalies index linked to the Command Core security feed
* HR / Safeguarding hub (policies, reports, mediation, wellbeing tools)
* “Hearthspace” morale view and anonymous board
* Role-aware views for Staff / Master / Servants

---

## License / Disclaimer

TBD – personal/fandom project. Please do not reuse Chaldea-specific copy or assets commercially.

Lore, text, and in-universe content:
- This is **fan work** set in an AU version of Fate/Grand Order’s Chaldea.
- All Fate/Grand Order / TYPE-MOON properties and characters are © their respective owners.
- No affiliation or endorsement is implied.