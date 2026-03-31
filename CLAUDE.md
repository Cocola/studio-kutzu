# Studio Kutzu

Site vitrine pour Studio Kutzu, studio de communication digitale au Pays Basque.

## Tech Stack

- **Framework**: Astro 5 (static, islands architecture)
- **Styling**: Tailwind CSS v4 (`@theme` tokens in `src/styles/global.css`)
- **Interactivity**: React (islands only, for forms/filters), GSAP + ScrollTrigger (scroll animations), Lenis (smooth scroll)
- **Typography**: Cabinet Grotesk (display, via Fontshare) + Satoshi (body, via Fontshare)
- **Language**: TypeScript strict
- **Deploy target**: Vercel (static output)

## Commands

- `npm run dev` — dev server on :4321
- `npm run build` — static build to `dist/`
- `npm run preview` — preview production build

## Design Context

### Users

Local professionals and business owners in the Pays Basque region (Cambo-les-Bains, Bayonne, Biarritz, Anglet). They need digital communication services but often feel overwhelmed by it — communication feels "floue, superflue, ou hors de portée." They come to the site to understand what Maider offers, see proof of her work, and feel confident enough to reach out. Many are small teams or solo entrepreneurs.

### Brand Personality

**Chaleureuse, authentique, ancrée.** Studio Kutzu is not a cold agency — it's Maider, one person who holds your hand through communication projects. The voice is warm and personal ("je" not "nous"), rooted in the Basque territory (euskara, local references), and sincere without being casual. The gold accent (·) on the logo's K is a detail that signals craft and care.

### Emotional Goal

**Confiance et réassurance.** A visitor should think: "Je suis entre de bonnes mains." The site must communicate competence through quality of execution, not through corporate jargon. Show the work, let the results speak, and make it easy to take the first step (contact).

### Aesthetic Direction

- **Mode**: Light only. Warm, airy, feminine without being fragile.
- **Palette**: Rose pâle `#FFE7E9` (warmth), bleu cobalt `#273CC6` (expertise/trust), or `#C98B27` (craft/premium detail). Background cream `#FFFBF9`. Text navy `#1A1A2E`.
- **Tone**: Clean and editorial, not minimal-tech. Think a well-designed magazine spread, not a SaaS landing page.
- **Anti-references**: Dark mode, neon gradients, glassmorphism-heavy, overly techy aesthetics, generic SaaS templates, card-grid monotony. Nothing that could look like it was made for a fintech startup.
- **Motion**: Purposeful and gentle — scroll reveals, soft entrances. Not flashy or attention-seeking. Motion should feel like a page turning, not a fireworks show.

### Design Principles

1. **Warmth over wow.** Every design decision should feel inviting, not impressive. The site should feel like walking into a well-lit atelier, not a showroom.
2. **Substance over decoration.** No visual element without purpose. If a gradient, texture, or animation doesn't reinforce trust or guide attention, remove it.
3. **Territory matters.** The Basque identity is core — not as folklore decoration, but as genuine cultural grounding (bilingual content, local client references, place names).
4. **Show, don't tell.** Portfolio work and client outcomes are more convincing than feature lists. Let the projects carry the narrative.
5. **Accessibility is non-negotiable.** WCAG AA compliance: 4.5:1 contrast ratios, keyboard navigation, reduced motion support, semantic HTML, meaningful alt texts.

### Color Contrast Guide (WCAG AA)

- `#1A1A2E` on `#FFFBF9` → ~15.8:1 ✅ (primary text)
- `#6B6580` on `#FFFBF9` → ~5.4:1 ✅ (muted text)
- `#273CC6` on `#FFFBF9` → ~5.9:1 ✅ (links/accents)
- `#C98B27` on `#FFFBF9` → ~3.5:1 ⚠️ (decorative only, not for text — use `#9A6A1A` for accessible gold text)
- `#FFFFFF` on `#273CC6` → ~7.1:1 ✅ (white on blue buttons)
