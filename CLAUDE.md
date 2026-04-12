# Studio Kutzu

Site vitrine pour **Studio Kutzu**, studio de communication digitale au Pays Basque, fondé par **Maider Gaicotchea**.

## Quick Start

```bash
npm install        # installer les dépendances
npm run dev        # serveur local sur :4321
npm run build      # build statique dans dist/
npx vercel --prod  # déployer en production
```

## Tech Stack

- **Framework** : Astro 5 (static, islands architecture)
- **Styling** : Tailwind CSS v4 (tokens dans `src/styles/global.css`)
- **Animations** : GSAP + Lenis (smooth scroll)
- **Typography** : Cabinet Grotesk (display) + Satoshi (body) — fonts locales dans `public/fonts/`
- **TypeScript** strict
- **Deploy** : Vercel (static output, deploy auto via GitHub push)

## Architecture du Projet

```
src/
├── data/site.ts              # Toutes les données : config, services, portfolio
├── styles/global.css          # Tokens de couleurs, fonts, base styles
├── layouts/Layout.astro       # Layout principal (meta, loader, transitions)
├── components/
│   ├── layout/
│   │   ├── Header.astro       # Navigation + menu mobile
│   │   └── Footer.astro       # Pied de page
│   └── sections/
│       ├── HeroSection.astro  # Hero animé de la homepage
│       └── CtaSection.astro   # Bloc CTA réutilisable
├── pages/
│   ├── index.astro            # Homepage
│   ├── a-propos.astro         # Page À propos
│   ├── contact.astro          # Page Contact (formulaire)
│   ├── services/
│   │   ├── index.astro        # Liste des services
│   │   └── [slug].astro       # Page par service (dynamique)
│   └── realisations/
│       ├── index.astro        # Grille des réalisations
│       └── [slug].astro       # Page par projet (dynamique)
public/
├── portfolio/                 # Images des projets (mockups, captures)
│   └── gallery/               # Images additionnelles pour les galeries
├── fonts/                     # Fonts locales (woff2)
├── logo.svg                   # Logo couleur
├── logo-white.svg             # Logo blanc (loader, menu mobile)
└── maider.jpg                 # Portrait de Maider
```

## Comment Modifier le Contenu

### Ajouter un nouveau client/projet

1. Ajouter une image dans `public/portfolio/` (format JPG, ~1280px de large)
2. Ajouter les images de galerie dans `public/portfolio/gallery/` si besoin
3. Ajouter l'entrée dans le tableau `portfolio` dans `src/data/site.ts` :

```typescript
{
  client: 'Nom du Client',
  slug: 'nom-du-client',        // URL : /realisations/nom-du-client
  description: 'Description du projet...',
  services: ['Création site web', 'Identité visuelle'],
  location: 'Cambo-les-Bains',
  website: 'www.exemple.com',    // optionnel
  instagram: 'https://...',      // optionnel
  year: 2025,
  featured: true,                // true = apparait sur la homepage
  image: { desktop: '/portfolio/nom-desktop.jpg', mobile: '/portfolio/nom-desktop.jpg' },
  gallery: ['/portfolio/gallery/nom-visuel1.jpg', '/portfolio/gallery/nom-visuel2.jpg'],  // optionnel
},
```

### Modifier un service

Les services sont dans le tableau `services` dans `src/data/site.ts`. Chaque service a : nom, slug, description, features (liste), icone SVG, couleurs.

### Modifier les infos de contact

Tout est dans `siteConfig` en haut de `src/data/site.ts` : email, téléphone, adresse, réseaux sociaux.

### Modifier les textes des pages

- **Homepage** : `src/pages/index.astro`
- **À propos** : `src/pages/a-propos.astro`
- **Contact** : `src/pages/contact.astro`
- **Hero** : `src/components/sections/HeroSection.astro`

## Design & Marque

### Identité

- **Fondatrice** : Maider Gaicotchea, 18 ans d'expérience en communication
- **Localisation** : 8 chemin du Camp de César, 64250 Cambo-les-Bains
- **Positionnement** : Communication digitale chaleureuse, authentique, ancrée au Pays Basque
- **Voix** : "je" (pas "nous"), chaleureuse et professionnelle, bilingue français/euskara

### Palette de Couleurs

| Token | Hex | Usage |
|-------|-----|-------|
| `blue` | `#273CC6` | Accent principal, liens, boutons |
| `pink` | `#FFE7E9` | Fonds doux, badges |
| `gold` | `#C98B27` | Détails premium, accents secondaires |
| `bg` | `#FFFBF9` | Fond de page |
| `ink` | `#1A1A2E` | Texte principal |
| `ink-muted` | `#6B6580` | Texte secondaire |
| `ink-faint` | `#6B6378` | Métadonnées, dates |

### Typographie

- **Cabinet Grotesk** : titres (`font-display`), weights 400/500/700/800
- **Satoshi** : corps de texte (`font-body`), weights 400/500/700
- Fonts servies localement depuis `public/fonts/` (pas de CDN)

### Principes de Design

1. **Chaleur** : le site doit donner envie de contacter Maider, pas impressionner
2. **Light mode uniquement** : pas de dark mode
3. **Pas de** : gradients néon, glassmorphism, esthétique SaaS/tech
4. **Motion douce** : animations subtiles, scroll reveals, pas de flashy
5. **Accessibilité** : WCAG AA, contraste 4.5:1 minimum, navigation clavier

### Contraste WCAG AA

- `ink` sur `bg` → ~15.8:1
- `ink-muted` sur `bg` → ~5.4:1
- `blue` sur `bg` → ~5.9:1
- `white` sur `blue` → ~7.1:1
- `gold` → décoratif uniquement, pas pour du texte

## Services (6)

1. Gestion des réseaux sociaux (`social-media`)
2. Sites Web & E-commerce (`sites-web`)
3. Identité visuelle & Print (`identite-visuelle`)
4. Marketing digital (`marketing-digital`)
5. Éditions imprimées (`editions-imprimees`)
6. Communication événementielle (`evenementiel`)

## Déploiement

Le site est déployé sur **Vercel** en mode statique. Chaque push sur la branche principale déclenche un redéploiement automatique.

Pour déployer manuellement : `npx vercel --prod`

## Notes Importantes

- Le formulaire de contact pointe vers Formspree — il faut un vrai form ID pour que ça fonctionne (actuellement placeholder)
- Le `robots.txt` est configuré en `Disallow: /` (pas d'indexation) — à changer quand le site sera prêt pour le public
- Les URL canoniques et OG pointent vers `studiokutzu.com` — à vérifier quand le domaine sera connecté
- Le site n'est PAS sur GitHub pour l'instant — il faut créer le repo et push
