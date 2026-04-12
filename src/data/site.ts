export const siteConfig = {
  name: 'Studio Kutzu',
  tagline: 'Vous avez une histoire à raconter, des valeurs à défendre : mon rôle est de les traduire de manière authentique !',
  founder: 'Maider Gaicotchea',
  founderTitle: 'Fondatrice | Communication Digitale & Stratégie Réseaux Sociaux',
  location: 'Cambo-les-Bains, Pays Basque',
  address: '8 chemin du Camp de César',
  postalCode: '64250',
  phone: '06 03 20 02 26',
  founded: 2022,
  experience: 18,
  email: 'contact@studiokutzu.com',
  instagram: 'https://www.instagram.com/studiokutzu/',
  linkedin: 'https://www.linkedin.com/company/kutzu/',
  facebook: 'https://www.facebook.com/183023188225288',
};

export interface Service {
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  features: string[];
  icon: string;
  iconContainer: string;
  iconColor: string;
  accentBorder: string;
}

export const services: Service[] = [
  {
    name: 'Gestion des réseaux sociaux',
    slug: 'social-media',
    shortDescription: 'Stratégie, animation et gestion de vos communautés.',
    description: 'Audit de vos comptes existants, mise en place d\'une stratégie social media adaptée à vos cibles et animation de vos réseaux au quotidien.',
    features: ['Stratégie social media', 'Community management', 'Création de contenu', 'Reporting & analytics', 'Google My Business'],
    icon: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/><path d="M8 12.5h.01"/><path d="M12 12.5h.01"/><path d="M16 12.5h.01"/>',
    iconContainer: 'rounded-full',
    iconColor: 'bg-blue/10 text-blue',
    accentBorder: 'border-t-blue',
  },
  {
    name: 'Sites Web & E-commerce',
    slug: 'sites-web',
    shortDescription: 'Sites vitrines, e-commerce et multilingues.',
    description: 'Création et refonte de sites vitrines, e-commerce et multilingues. Copywriting, rédaction web et référencement naturel pour une visibilité optimale.',
    features: ['Sites vitrines', 'E-commerce', 'Sites multilingues', 'SEO & rédaction web', 'Audit de site'],
    icon: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/><circle cx="8" cy="10" r="0.5" fill="currentColor"/><path d="M12 10h4"/>',
    iconContainer: 'rounded-xl',
    iconColor: 'bg-gold/10 text-gold',
    accentBorder: 'border-t-gold',
  },
  {
    name: 'Identité visuelle & Print',
    slug: 'identite-visuelle',
    shortDescription: 'Logos, chartes graphiques et supports imprimés.',
    description: "Refonte ou création d'identité visuelle — logo, charte graphique, moodboard — et conception d'outils de communication imprimés.",
    features: ['Création de logo', 'Charte graphique', 'Flyers & dépliants', 'Catalogues & brochures', 'Cartes de visite'],
    icon: '<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>',
    iconContainer: 'rounded-2xl rotate-3',
    iconColor: 'bg-pink text-blue',
    accentBorder: 'border-t-pink-deep',
  },
  {
    name: 'Marketing digital',
    slug: 'marketing-digital',
    shortDescription: 'Acquisition, publicités et newsletters.',
    description: "Stratégie d'acquisition via Google Ads et publicités social media. Création de campagnes ciblées et mise en place de newsletters pour fidéliser votre audience.",
    features: ['Google Ads', 'Publicités social media', 'Newsletters', 'Campagnes ciblées'],
    icon: '<path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6z"/><path d="M22 10l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"/>',
    iconContainer: 'rounded-xl',
    iconColor: 'bg-blue/10 text-blue',
    accentBorder: 'border-t-blue',
  },
  {
    name: 'Éditions imprimées',
    slug: 'editions-imprimees',
    shortDescription: 'Conception éditoriale et gestion des impressions.',
    description: "Conception de supports imprimés — flyers, dépliants, catalogues, brochures, affiches — et gestion complète des impressions.",
    features: ['Flyers & affiches', 'Catalogues', 'Brochures', 'Gestion des impressions'],
    icon: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><path d="M8 7h8"/><path d="M8 11h6"/>',
    iconContainer: 'rounded-full',
    iconColor: 'bg-gold/10 text-gold',
    accentBorder: 'border-t-gold',
  },
  {
    name: 'Communication événementielle',
    slug: 'evenementiel',
    shortDescription: 'Planification et supports pour vos événements.',
    description: "Planification de votre communication événementielle et conception de supports dédiés : kakémonos, signalétique, invitations.",
    features: ['Planification', 'Kakémonos', 'Signalétique', 'Supports événementiels'],
    icon: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M12 14l-2 2 2 2"/>',
    iconContainer: 'rounded-2xl -rotate-3',
    iconColor: 'bg-pink text-blue',
    accentBorder: 'border-t-pink-deep',
  },
];

export interface Project {
  client: string;
  slug: string;
  description: string;
  services: string[];
  location: string;
  website?: string;
  instagram?: string;
  year: number;
  featured: boolean;
  image: {
    desktop: string;
    mobile: string;
  };
  gallery?: string[];
}

export const portfolio: Project[] = [
  {
    client: 'Musée Arnaga',
    slug: 'musee-arnaga',
    description: 'Musée Edmond Rostand à Cambo-les-Bains. Villa classée monument historique, lieu de culture et de patrimoine.',
    services: ['Création site web'],
    location: 'Cambo-les-Bains',
    website: 'www.arnaga.com',
    year: 2025,
    featured: true,
    image: { desktop: '/portfolio/arnaga-desktop.jpg', mobile: '/portfolio/arnaga-mobile.jpg' },
    gallery: [],
  },
  {
    client: 'Arima Agencements',
    slug: 'arima-agencements',
    description: 'Aménagement intérieur au Pays Basque — cuisines, salles de bain et agencements sur mesure.',
    services: ['Création site web'],
    location: 'Pays Basque',
    website: 'www.arima-agencements.com',
    year: 2025,
    featured: true,
    image: { desktop: '/portfolio/arima-desktop.jpg', mobile: '/portfolio/arima-mobile.jpg' },
  },
  {
    client: 'Hortzkina',
    slug: 'hortzkina',
    description: 'Cabinet dentaire à Baigorri. Identité visuelle chaleureuse et site bilingue euskara-français.',
    services: ['Identité visuelle', 'Création site web'],
    location: 'Baigorri',
    website: 'www.hortzkina.fr',
    year: 2025,
    featured: true,
    image: { desktop: '/portfolio/hortzkina-desktop.jpg', mobile: '/portfolio/hortzkina-mobile.jpg' },
    gallery: ['/portfolio/gallery/hortzkina-logo.jpg', '/portfolio/gallery/hortzkina-moodboard.jpg'],
  },
  {
    client: 'Elkar Bat',
    slug: 'elkar-bat',
    description: "Maître d'œuvre à Espelette. Rénovation et construction de maisons au Pays Basque.",
    services: ['Identité visuelle', 'Création site web'],
    location: 'Espelette',
    website: 'www.elkarbat.eus',
    year: 2025,
    featured: true,
    image: { desktop: '/portfolio/elkarbat-desktop.jpg', mobile: '/portfolio/elkarbat-mobile.jpg' },
    gallery: ['/portfolio/gallery/elkarbat-logo.jpg', '/portfolio/gallery/elkarbat-carte.jpg'],
  },
  {
    client: 'Poterie Goicoechea',
    slug: 'poterie-goicoechea',
    description: 'Poterie artisanale du Pays Basque depuis 1960. Gestion des réseaux sociaux pour valoriser un savoir-faire ancestral.',
    services: ['Community management'],
    location: 'Pays Basque',
    website: 'poterie-goicoechea.com',
    instagram: 'https://www.instagram.com/poteriegoicoechea/',
    year: 2024,
    featured: true,
    image: { desktop: '/portfolio/goicoetchea-desktop.jpg', mobile: '/portfolio/goicoetchea-mobile.jpg' },
  },
  {
    client: 'Hatsa Sport',
    slug: 'hatsa-sport',
    description: 'Salles de sport à Ossès, Larressore et Bassussarry. Accompagnement communication et gestion de 3 comptes Instagram.',
    services: ['Stratégie communication', 'Community management'],
    location: 'Ossès, Larressore, Bassussarry',
    website: 'www.hatsa-sport.com',
    instagram: 'https://www.instagram.com/hatsasportlarressore/',
    year: 2024,
    featured: true,
    image: { desktop: '/portfolio/hatsa-desktop.jpg', mobile: '/portfolio/hatsa-mobile.jpg' },
  },
  {
    client: 'Maison Olhabidea',
    slug: 'maison-olhabidea',
    description: "Maison d'hôtes de charme mêlant restaurant, chambres d'hôtes et événements privés. Community management pour accroître la notoriété et attirer de nouveaux clients.",
    services: ['Community management'],
    location: 'Pays Basque',
    instagram: 'https://www.instagram.com/maison.olhabidea/',
    year: 2024,
    featured: false,
    image: { desktop: '/portfolio/olhabidea-ig.jpg', mobile: '/portfolio/olhabidea-ig.jpg' },
  },
  {
    client: 'FEP-CFDT Pays Basque',
    slug: 'fep-cfdt',
    description: "Syndicat de l'enseignement privé. Création du site web pour informer et fédérer les adhérents.",
    services: ['Création site web'],
    location: 'Pays Basque & Landes',
    website: 'www.fepcfdtbbl.fr',
    year: 2024,
    featured: false,
    image: { desktop: '/portfolio/fep-cfdt-desktop.jpg', mobile: '/portfolio/fep-cfdt-mobile.jpg' },
    gallery: ['/portfolio/gallery/fep-cfdt-mobile.jpg'],
  },
  {
    client: 'Collège Saint François Xavier',
    slug: 'college-sfx',
    description: "Refonte du site web et rédaction de contenu SEO pour dynamiser l'image du collège et communiquer sur ses atouts, dont l'internat.",
    services: ['Création site web', 'SEO'],
    location: 'Ustaritz',
    year: 2024,
    featured: false,
    image: { desktop: '/portfolio/college-sfx-desktop.jpg', mobile: '/portfolio/college-sfx-desktop.jpg' },
  },
  {
    client: 'École Saint-Joseph',
    slug: 'ecole-saint-joseph',
    description: "Site vitrine et blog pour moderniser la communication et valoriser l'enseignement bilingue français-basque de l'école.",
    services: ['Création site web'],
    location: 'Itxassou',
    year: 2024,
    featured: false,
    image: { desktop: '/portfolio/ecole-saint-joseph-desktop.jpg', mobile: '/portfolio/ecole-saint-joseph-desktop.jpg' },
  },
  {
    client: 'IFAS Cambo-les-Bains',
    slug: 'ifas-cambo',
    description: "Refonte du site web de l'Institut de Formation d'Aides-Soignants, institution présente depuis 50 ans, pour attirer davantage de candidats.",
    services: ['Création site web'],
    location: 'Cambo-les-Bains',
    year: 2024,
    featured: false,
    image: { desktop: '/portfolio/ifas-cambo-desktop.jpg', mobile: '/portfolio/ifas-cambo-desktop.jpg' },
  },
  {
    client: 'Haria',
    slug: 'haria',
    description: "Site e-commerce bilingue euskara-français pour des abonnements de livres en euskara destinés aux enfants.",
    services: ['E-commerce', 'Site multilingue'],
    location: 'Sare',
    year: 2024,
    featured: false,
    image: { desktop: '/portfolio/haria-desktop.jpg', mobile: '/portfolio/haria-desktop.jpg' },
    gallery: ['/portfolio/gallery/haria-page2.jpg'],
  },
  {
    client: 'Boutique Arraya',
    slug: 'boutique-arraya',
    description: "Modernisation de l'identité visuelle et du logo de cette boutique emblématique proposant une sélection artisanale raffinée.",
    services: ['Identité visuelle', 'Packaging'],
    location: 'Sare',
    year: 2024,
    featured: false,
    image: { desktop: '/portfolio/boutique-arraya-desktop.jpg', mobile: '/portfolio/boutique-arraya-desktop.jpg' },
    gallery: ['/portfolio/gallery/arraya-confiture.jpg', '/portfolio/gallery/arraya-totebag.jpg'],
  },
  {
    client: 'Musée Basque de Bayonne',
    slug: 'musee-basque',
    description: "Conception éditoriale du Projet Scientifique et Culturel, document destiné au Ministère de la Culture, en français, euskara et gascon.",
    services: ['Édition imprimée'],
    location: 'Bayonne',
    year: 2024,
    featured: false,
    image: { desktop: '/portfolio/musee-basque-desktop.jpg', mobile: '/portfolio/musee-basque-desktop.jpg' },
    gallery: ['/portfolio/gallery/musee-basque-pages1.jpg', '/portfolio/gallery/musee-basque-pages2.jpg'],
  },
  {
    client: 'Beskoitzeko Ikastola',
    slug: 'beskoitzeko-ikastola',
    description: "Refonte complète du site internet pour moderniser l'image de l'établissement et attirer de nouvelles familles.",
    services: ['Création site web'],
    location: 'Briscous',
    year: 2024,
    featured: false,
    image: { desktop: '/portfolio/beskoitzeko-desktop.jpg', mobile: '/portfolio/beskoitzeko-desktop.jpg' },
  },
];
