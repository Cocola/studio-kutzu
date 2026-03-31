export const siteConfig = {
  name: 'Studio Kutzu',
  tagline: 'Vous avez une histoire à raconter, des valeurs à défendre : mon rôle est de les traduire de manière authentique !',
  founder: 'Maider Gaicotchea',
  founderTitle: 'Fondatrice | Communication Digitale & Stratégie Réseaux Sociaux',
  location: 'Cambo-les-Bains, Pays Basque',
  postalCode: '64250',
  founded: 2022,
  email: 'contact@studiokutzu.com',
  instagram: 'https://www.instagram.com/studiokutzu/',
  linkedin: 'https://www.linkedin.com/company/studio-kutzu',
  facebook: 'https://www.facebook.com/183023188225288',
};

export const services = [
  {
    name: 'Gestion des réseaux sociaux',
    slug: 'social-media',
    shortDescription: 'Stratégie, animation et gestion de vos communautés.',
    description: 'Stratégie, animation et gestion de vos communautés sur Instagram, Facebook et autres plateformes sociales. Créer une communauté engagée autour de votre marque.',
    features: ['Stratégie social media', 'Community management', 'Création de contenu', 'Reporting & analytics'],
  },
  {
    name: 'Sites Web',
    slug: 'sites-web',
    shortDescription: 'Sites vitrines, e-commerce et multilingues.',
    description: 'Création et refonte de sites vitrines, e-commerce et multilingues, pensés pour votre visibilité et vos objectifs.',
    features: ['Sites vitrines', 'E-commerce', 'Sites multilingues', 'Référencement naturel (SEO)'],
  },
  {
    name: 'Identité visuelle',
    slug: 'identite-visuelle',
    shortDescription: 'Logos, chartes graphiques et univers visuels.',
    description: "Création de logos, chartes graphiques et univers visuels qui reflètent votre personnalité et vos valeurs.",
    features: ['Création de logo', 'Charte graphique', 'Supports print', 'Direction artistique'],
  },
  {
    name: 'Stratégie digitale',
    slug: 'strategie-digitale',
    shortDescription: 'Accompagnement personnalisé pour votre communication.',
    description: "Accompagnement personnalisé pour définir et mettre en œuvre votre stratégie de communication digitale.",
    features: ['Audit communication', 'Plan stratégique', 'Coaching & formation', 'Marketing digital'],
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
    description: "Maison d'hôtes de charme. Accompagnement community management pour développer la visibilité sur Instagram.",
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
  },
];
