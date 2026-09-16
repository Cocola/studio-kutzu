import type { Bilingual } from '../i18n/config';

export const siteConfig = {
  name: 'Studio Kutzu',
  tagline: {
    fr: "Vous avez une histoire à raconter, des valeurs à défendre : mon rôle est de les traduire de manière authentique !",
    eu: "Kontatzeko istorio bat duzu, defendatzeko balioak: ene zeregina da modu benetakoan adieraztea!",
  } as Bilingual,
  founder: 'Maider Gaicotchea',
  founderTitle: {
    fr: 'Fondatrice | Communication Digitale & Stratégie Réseaux Sociaux',
    eu: 'Sortzailea | Komunikazio Digitala eta Sare Sozialen Estrategia',
  } as Bilingual,
  location: {
    fr: 'Cambo-les-Bains, Pays Basque',
    eu: 'Kanbo, Euskal Herria',
  } as Bilingual,
  address: '8 chemin du Camp de César',
  postalCode: '64250',
  city: {
    fr: 'Cambo-les-Bains',
    eu: 'Kanbo',
  } as Bilingual,
  region: {
    fr: 'Pays Basque',
    eu: 'Euskal Herria',
  } as Bilingual,
  phone: '06 03 20 02 26',
  founded: 2022,
  experience: 18,
  email: 'kutzukom@gmail.com',
  // Web3Forms access key — public token, destinataire (kutzukom@gmail.com) configuré côté dashboard web3forms.com
  web3formsKey: '78c0459b-8dc5-40a3-9a71-91e731a2ab88',
  instagram: 'https://www.instagram.com/studiokutzu/',
  linkedin: 'https://www.linkedin.com/company/kutzu/',
  facebook: 'https://www.facebook.com/183023188225288',
};

export interface Service {
  name: Bilingual;
  slug: string;
  shortDescription: Bilingual;
  description: Bilingual;
  features: Bilingual<string[]>;
  icon: string;
  iconContainer: string;
  iconColor: string;
  accentBorder: string;
}

export const services: Service[] = [
  {
    name: { fr: 'Gestion des réseaux sociaux', eu: 'Sare sozialen kudeaketa' },
    slug: 'social-media',
    shortDescription: {
      fr: 'Stratégie, animation et gestion de vos communautés.',
      eu: 'Zure komunitateen estrategia, animazioa eta kudeaketa.',
    },
    description: {
      fr: "Audit de vos comptes existants, mise en place d'une stratégie social media adaptée à vos cibles et animation de vos réseaux au quotidien.",
      eu: 'Zure kontuen auditoretza, zure xedeei egokitutako sare sozialen estrategia ezartzea eta zure sareen eguneroko animazioa.',
    },
    features: {
      fr: ['Stratégie social media', 'Community management', 'Création de contenu', 'Reporting & analytics', 'Google My Business'],
      eu: ['Sare sozialen estrategia', 'Komunitate kudeaketa', 'Edukien sorkuntza', 'Txostenak eta analitikak', 'Google My Business'],
    },
    icon: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/><path d="M8 12.5h.01"/><path d="M12 12.5h.01"/><path d="M16 12.5h.01"/>',
    iconContainer: 'rounded-full',
    iconColor: 'bg-blue/10 text-blue',
    accentBorder: 'border-t-blue',
  },
  {
    name: { fr: 'Sites Web & E-commerce', eu: 'Webguneak eta e-merkataritza' },
    slug: 'sites-web',
    shortDescription: {
      fr: 'Sites vitrines, e-commerce et multilingues.',
      eu: 'Erakusleiho-webguneak, e-merkataritza eta eleanitzak.',
    },
    description: {
      fr: 'Création et refonte de sites vitrines, e-commerce et multilingues. Copywriting, rédaction web et référencement naturel pour une visibilité optimale.',
      eu: 'Erakusleiho-webgune, e-merkataritza eta eleanitzen sorkuntza eta berritzea. Copywriting-a, web-idazketa eta SEO naturala ikusgarritasun hoberena erdiesteko.',
    },
    features: {
      fr: ['Sites vitrines', 'E-commerce', 'Sites multilingues', 'SEO & rédaction web', 'Audit de site'],
      eu: ['Erakusleiho-webguneak', 'E-merkataritza', 'Webgune eleanitzak', 'SEO eta web-idazketa', 'Webgunearen auditoretza'],
    },
    icon: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/><circle cx="8" cy="10" r="0.5" fill="currentColor"/><path d="M12 10h4"/>',
    iconContainer: 'rounded-xl',
    iconColor: 'bg-gold/10 text-gold',
    accentBorder: 'border-t-gold',
  },
  {
    name: { fr: 'Identité visuelle & Print', eu: 'Nortasun bisuala eta inprimaketa' },
    slug: 'identite-visuelle',
    shortDescription: {
      fr: 'Logos, chartes graphiques et supports imprimés.',
      eu: 'Logotipoak, gidalerro grafikoak eta inprimatutako euskarriak.',
    },
    description: {
      fr: "Refonte ou création d'identité visuelle — logo, charte graphique, moodboard — et conception d'outils de communication imprimés.",
      eu: 'Nortasun bisualaren sorkuntza edo berritzea — logotipoa, gidalerro grafikoa, moodboard-a — eta inprimatutako komunikazio-tresnen diseinua.',
    },
    features: {
      fr: ['Création de logo', 'Charte graphique', 'Flyers & dépliants', 'Catalogues & brochures', 'Cartes de visite'],
      eu: ['Logotipoaren sorkuntza', 'Gidalerro grafikoa', 'Flyer-ak eta tolesgarriak', 'Katalogoak eta liburuxkak', 'Bisita-txartelak'],
    },
    icon: '<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>',
    iconContainer: 'rounded-2xl rotate-3',
    iconColor: 'bg-pink text-blue',
    accentBorder: 'border-t-pink-deep',
  },
  {
    name: { fr: 'Marketing digital', eu: 'Marketing digitala' },
    slug: 'marketing-digital',
    shortDescription: {
      fr: 'Acquisition, publicités et newsletters.',
      eu: 'Bezero-erakargarritasuna, publizitatea eta newsletterrak.',
    },
    description: {
      fr: "Stratégie d'acquisition via Google Ads et publicités social media. Création de campagnes ciblées et mise en place de newsletters pour fidéliser votre audience.",
      eu: 'Google Ads eta sare sozialetako publizitatearen bidezko erakargarritasun-estrategia. Kanpaina espezifikoen sorkuntza eta newsletterren ezarpena zure publikoa fidelizatzeko.',
    },
    features: {
      fr: ['Google Ads', 'Publicités social media', 'Newsletters', 'Campagnes ciblées'],
      eu: ['Google Ads', 'Sare sozialetako publizitatea', 'Newsletterrak', 'Kanpaina espezifikoak'],
    },
    icon: '<path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6z"/><path d="M22 10l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"/>',
    iconContainer: 'rounded-xl',
    iconColor: 'bg-blue/10 text-blue',
    accentBorder: 'border-t-blue',
  },
  {
    name: { fr: 'Éditions imprimées', eu: 'Inprimatutako edizioak' },
    slug: 'editions-imprimees',
    shortDescription: {
      fr: 'Conception éditoriale et gestion des impressions.',
      eu: 'Diseinu editoriala eta inprimaketen kudeaketa.',
    },
    description: {
      fr: 'Conception de supports imprimés — flyers, dépliants, catalogues, brochures, affiches — et gestion complète des impressions.',
      eu: 'Inprimatutako euskarrien diseinua — flyer-ak, tolesgarriak, katalogoak, liburuxkak, kartelak — eta inprimaketen kudeaketa osoa.',
    },
    features: {
      fr: ['Flyers & affiches', 'Catalogues', 'Brochures', 'Gestion des impressions'],
      eu: ['Flyer-ak eta kartelak', 'Katalogoak', 'Liburuxkak', 'Inprimaketen kudeaketa'],
    },
    icon: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><path d="M8 7h8"/><path d="M8 11h6"/>',
    iconContainer: 'rounded-full',
    iconColor: 'bg-gold/10 text-gold',
    accentBorder: 'border-t-gold',
  },
  {
    name: { fr: 'Communication événementielle', eu: 'Gertaeren komunikazioa' },
    slug: 'evenementiel',
    shortDescription: {
      fr: 'Planification et supports pour vos événements.',
      eu: 'Zure ekitaldietarako plangintza eta euskarriak.',
    },
    description: {
      fr: 'Planification de votre communication événementielle et conception de supports dédiés : kakémonos, signalétique, invitations.',
      eu: 'Zure ekitaldien komunikazioaren plangintza eta euskarri espezifikoen diseinua: kakemonoak, seinaleztapena, gonbidapenak.',
    },
    features: {
      fr: ['Planification', 'Kakémonos', 'Signalétique', 'Supports événementiels'],
      eu: ['Plangintza', 'Kakemonoak', 'Seinaleztapena', 'Ekitaldi-euskarriak'],
    },
    icon: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M12 14l-2 2 2 2"/>',
    iconContainer: 'rounded-2xl -rotate-3',
    iconColor: 'bg-pink text-blue',
    accentBorder: 'border-t-pink-deep',
  },
];

/**
 * Canonical service tags used to map a project's prestations to a service slug.
 * Independent of the displayed (translated) labels in `Project.services`.
 */
export type ServiceTag =
  | 'social-media'
  | 'sites-web'
  | 'identite-visuelle'
  | 'marketing-digital'
  | 'editions-imprimees'
  | 'evenementiel';

export interface Project {
  client: string;
  slug: string;
  description: Bilingual;
  services: Bilingual<string[]>;
  serviceTags: ServiceTag[];
  location: Bilingual;
  website?: string;
  instagram?: string;
  year: number;
  featured: boolean;
  image: {
    desktop: string;
    mobile: string;
    position?: string;
  };
  gallery?: string[];
}

export const portfolio: Project[] = [
  {
    client: 'DDEC 64',
    slug: 'ddec-64',
    description: {
      fr: 'La DDEC 64 avait besoin d’un site plus actuel, plus clair et surtout davantage tourné vers les futurs enseignants. L’objectif était de faire du site une véritable porte d’entrée vers l’Enseignement catholique dans les Pyrénées-Atlantiques, en facilitant l’accès aux informations et aux différentes étapes pour devenir enseignant.',
      eu: 'DDEC 64 erakundeak webgune modernoago eta argiago bat behar zuen, bereziki etorkizuneko irakasleei zuzendua. Helburua zen webgunea Pirinio Atlantikoetako irakaskuntza katolikora sartzeko benetako ate bihurtzea, informazioa eta irakasle izateko urratsak errazago eskuratzeko.',
    },
    services: {
      fr: ['Refonte de site web'],
      eu: ['Webgunearen berritzea'],
    },
    serviceTags: ['sites-web'],
    location: { fr: 'Pyrénées-Atlantiques', eu: 'Pirinio Atlantikoak' },
    website: 'www.ddec64.net',
    year: 2026,
    featured: true,
    image: { desktop: '/portfolio/ddec-64.png', mobile: '/portfolio/ddec-64.png', position: 'center 80%' },
  },
  {
    client: 'Musée Arnaga',
    slug: 'musee-arnaga',
    description: {
      fr: 'Musée Edmond Rostand à Cambo-les-Bains. Villa classée monument historique, lieu de culture et de patrimoine.',
      eu: 'Edmond Rostand Museoa Kanbon. Monumentu historiko gisa sailkatutako etxaldea, kultura eta ondarearen gunea.',
    },
    services: {
      fr: ['Création site web'],
      eu: ['Webgunearen sorkuntza'],
    },
    serviceTags: ['sites-web'],
    location: { fr: 'Cambo-les-Bains', eu: 'Kanbo' },
    website: 'www.arnaga.com',
    year: 2025,
    featured: true,
    image: { desktop: '/portfolio/arnaga-desktop.jpg', mobile: '/portfolio/arnaga-mobile.jpg' },
    gallery: [],
  },
  {
    client: 'Arima Agencements',
    slug: 'arima-agencements',
    description: {
      fr: 'Aménagement intérieur au Pays Basque — cuisines, salles de bain et agencements sur mesure.',
      eu: 'Barneko egokitzapena Euskal Herrian — sukaldeak, bainugelak eta neurrira egindako egokitzapenak.',
    },
    services: {
      fr: ['Création site web'],
      eu: ['Webgunearen sorkuntza'],
    },
    serviceTags: ['sites-web'],
    location: { fr: 'Pays Basque', eu: 'Euskal Herria' },
    website: 'www.arima-agencements.com',
    year: 2025,
    featured: true,
    image: { desktop: '/portfolio/arima-desktop.jpg', mobile: '/portfolio/arima-mobile.jpg' },
  },
  {
    client: 'Hortzkina',
    slug: 'hortzkina',
    description: {
      fr: 'Cabinet dentaire à Baigorri. Identité visuelle chaleureuse et site bilingue euskara-français.',
      eu: 'Hortz-klinika Baigorrin. Nortasun bisual beroa eta euskara-frantsesa elebidun webgunea.',
    },
    services: {
      fr: ['Identité visuelle', 'Création site web'],
      eu: ['Nortasun bisuala', 'Webgunearen sorkuntza'],
    },
    serviceTags: ['identite-visuelle', 'sites-web'],
    location: { fr: 'Baigorri', eu: 'Baigorri' },
    website: 'www.hortzkina.fr',
    year: 2025,
    featured: true,
    image: { desktop: '/portfolio/hortzkina-desktop.jpg', mobile: '/portfolio/hortzkina-mobile.jpg' },
    gallery: ['/portfolio/gallery/hortzkina-logo.jpg', '/portfolio/gallery/hortzkina-moodboard.jpg'],
  },
  {
    client: 'Elkar Bat',
    slug: 'elkar-bat',
    description: {
      fr: "Maître d'œuvre à Espelette. Rénovation et construction de maisons au Pays Basque.",
      eu: 'Obra-zuzendaria Ezpeletan. Etxebizitzen berritzea eta eraikuntza Euskal Herrian.',
    },
    services: {
      fr: ['Identité visuelle', 'Création site web'],
      eu: ['Nortasun bisuala', 'Webgunearen sorkuntza'],
    },
    serviceTags: ['identite-visuelle', 'sites-web'],
    location: { fr: 'Espelette', eu: 'Ezpeleta' },
    website: 'www.elkarbat.eus',
    year: 2025,
    featured: true,
    image: { desktop: '/portfolio/elkarbat-desktop.jpg', mobile: '/portfolio/elkarbat-mobile.jpg' },
    gallery: ['/portfolio/gallery/elkarbat-logo.jpg', '/portfolio/gallery/elkarbat-carte.jpg'],
  },
  {
    client: 'Poterie Goicoechea',
    slug: 'poterie-goicoechea',
    description: {
      fr: 'Poterie artisanale du Pays Basque depuis 1960. Gestion des réseaux sociaux pour valoriser un savoir-faire ancestral.',
      eu: 'Euskal Herriko eskulangile-zeramika 1960tik. Sare sozialen kudeaketa, betiereko jakintza balioesteko.',
    },
    services: {
      fr: ['Community management'],
      eu: ['Komunitate kudeaketa'],
    },
    serviceTags: ['social-media'],
    location: { fr: 'Pays Basque', eu: 'Euskal Herria' },
    website: 'poterie-goicoechea.com',
    instagram: 'https://www.instagram.com/poteriegoicoechea/',
    year: 2024,
    featured: true,
    image: { desktop: '/portfolio/goicoetchea-desktop.jpg', mobile: '/portfolio/goicoetchea-mobile.jpg' },
  },
  {
    client: 'Hatsa Sport',
    slug: 'hatsa-sport',
    description: {
      fr: 'Salles de sport à Ossès, Larressore et Bassussarry. Accompagnement communication et gestion de 3 comptes Instagram.',
      eu: 'Kirol aretoak Ortzaizen, Larresoron eta Basusarrin. Komunikazioaren laguntza eta 3 Instagram konturen kudeaketa.',
    },
    services: {
      fr: ['Stratégie communication', 'Community management'],
      eu: ['Komunikazio estrategia', 'Komunitate kudeaketa'],
    },
    serviceTags: ['social-media'],
    location: {
      fr: 'Ossès, Larressore, Bassussarry',
      eu: 'Ortzaize, Larresoro, Basusarri',
    },
    website: 'www.hatsa-sport.com',
    instagram: 'https://www.instagram.com/hatsasportlarressore/',
    year: 2024,
    featured: true,
    image: { desktop: '/portfolio/hatsa-desktop.jpg', mobile: '/portfolio/hatsa-mobile.jpg' },
  },
  {
    client: 'Maison Olhabidea',
    slug: 'maison-olhabidea',
    description: {
      fr: "Maison d'hôtes de charme mêlant restaurant, chambres d'hôtes et événements privés. Community management pour accroître la notoriété et attirer de nouveaux clients.",
      eu: 'Ostatu xarmagarria, jatetxea, landetxea eta ekitaldi pribatuak uztartzen dituena. Komunitate kudeaketa, ospea handitzeko eta bezero berriak erakartzeko.',
    },
    services: {
      fr: ['Community management'],
      eu: ['Komunitate kudeaketa'],
    },
    serviceTags: ['social-media'],
    location: { fr: 'Pays Basque', eu: 'Euskal Herria' },
    instagram: 'https://www.instagram.com/maison.olhabidea/',
    year: 2024,
    featured: false,
    image: { desktop: '/portfolio/olhabidea-ig.jpg', mobile: '/portfolio/olhabidea-ig.jpg' },
  },
  {
    client: 'FEP-CFDT Pays Basque',
    slug: 'fep-cfdt',
    description: {
      fr: "Syndicat de l'enseignement privé. Création du site web pour informer et fédérer les adhérents.",
      eu: 'Irakaskuntza pribatuko sindikatua. Webgunearen sorkuntza, kideak informatzeko eta biltzeko.',
    },
    services: {
      fr: ['Création site web'],
      eu: ['Webgunearen sorkuntza'],
    },
    serviceTags: ['sites-web'],
    location: {
      fr: 'Pays Basque & Landes',
      eu: 'Euskal Herria eta Landak',
    },
    website: 'www.fepcfdtbbl.fr',
    year: 2024,
    featured: false,
    image: { desktop: '/portfolio/fep-cfdt-desktop.jpg', mobile: '/portfolio/fep-cfdt-mobile.jpg' },
    gallery: ['/portfolio/gallery/fep-cfdt-mobile.jpg'],
  },
  {
    client: 'Collège Saint François Xavier',
    slug: 'college-sfx',
    description: {
      fr: "Refonte du site web et rédaction de contenu SEO pour dynamiser l'image du collège et communiquer sur ses atouts, dont l'internat.",
      eu: 'Webgunearen berritzea eta SEO edukien idazketa, ikastetxearen irudia biziberritzeko eta bere abantailen berri emateko, barnetegia barne.',
    },
    services: {
      fr: ['Création site web', 'SEO'],
      eu: ['Webgunearen sorkuntza', 'SEO'],
    },
    serviceTags: ['sites-web'],
    location: { fr: 'Ustaritz', eu: 'Uztaritze' },
    year: 2024,
    featured: false,
    image: { desktop: '/portfolio/college-sfx-desktop.jpg', mobile: '/portfolio/college-sfx-desktop.jpg' },
  },
  {
    client: 'École Saint-Joseph',
    slug: 'ecole-saint-joseph',
    description: {
      fr: "Site vitrine et blog pour moderniser la communication et valoriser l'enseignement bilingue français-basque de l'école.",
      eu: 'Erakusleiho-webgunea eta bloga, komunikazioa modernizatzeko eta eskolaren frantses-euskara irakaskuntza elebiduna balioesteko.',
    },
    services: {
      fr: ['Création site web'],
      eu: ['Webgunearen sorkuntza'],
    },
    serviceTags: ['sites-web'],
    location: { fr: 'Itxassou', eu: 'Itsasu' },
    year: 2024,
    featured: false,
    image: { desktop: '/portfolio/ecole-saint-joseph-desktop.jpg', mobile: '/portfolio/ecole-saint-joseph-desktop.jpg' },
  },
  {
    client: 'IFAS Cambo-les-Bains',
    slug: 'ifas-cambo',
    description: {
      fr: "Refonte du site web de l'Institut de Formation d'Aides-Soignants, institution présente depuis 50 ans, pour attirer davantage de candidats.",
      eu: 'Laguntzaile Zaintzaileen Prestakuntza Institutuaren webgunearen berritzea, 50 urte baino haboroko erakundea, hautagai haboro erakartzeko.',
    },
    services: {
      fr: ['Création site web'],
      eu: ['Webgunearen sorkuntza'],
    },
    serviceTags: ['sites-web'],
    location: { fr: 'Cambo-les-Bains', eu: 'Kanbo' },
    year: 2024,
    featured: false,
    image: { desktop: '/portfolio/ifas-cambo-desktop.jpg', mobile: '/portfolio/ifas-cambo-desktop.jpg' },
  },
  {
    client: 'Haria',
    slug: 'haria',
    description: {
      fr: 'Site e-commerce bilingue euskara-français pour des abonnements de livres en euskara destinés aux enfants.',
      eu: 'Euskara-frantsesa elebidun e-merkataritza webgunea, haurrentzat euskarazko liburu-harpidetzak eskaintzeko.',
    },
    services: {
      fr: ['E-commerce', 'Site multilingue'],
      eu: ['E-merkataritza', 'Webgune eleanitza'],
    },
    serviceTags: ['sites-web'],
    location: { fr: 'Sare', eu: 'Sara' },
    year: 2024,
    featured: false,
    image: { desktop: '/portfolio/haria-desktop.jpg', mobile: '/portfolio/haria-desktop.jpg' },
    gallery: ['/portfolio/gallery/haria-page2.jpg'],
  },
  {
    client: 'Boutique Arraya',
    slug: 'boutique-arraya',
    description: {
      fr: "Modernisation de l'identité visuelle et du logo de cette boutique emblématique proposant une sélection artisanale raffinée.",
      eu: 'Denda enblematiko honen nortasun bisualaren eta logotipoaren modernizazioa, eskulangileen hautaketa fineko eskaintzarekin.',
    },
    services: {
      fr: ['Identité visuelle', 'Packaging'],
      eu: ['Nortasun bisuala', 'Packaging-a'],
    },
    serviceTags: ['identite-visuelle'],
    location: { fr: 'Sare', eu: 'Sara' },
    year: 2024,
    featured: false,
    image: { desktop: '/portfolio/boutique-arraya-desktop.jpg', mobile: '/portfolio/boutique-arraya-desktop.jpg' },
    gallery: ['/portfolio/gallery/arraya-confiture.jpg', '/portfolio/gallery/arraya-totebag.jpg'],
  },
  {
    client: 'Musée Basque de Bayonne',
    slug: 'musee-basque',
    description: {
      fr: 'Conception éditoriale du Projet Scientifique et Culturel, document destiné au Ministère de la Culture, en français, euskara et gascon.',
      eu: 'Proiektu Zientifiko eta Kulturalaren diseinu editoriala, Kultura Ministerioari zuzendutako dokumentua, frantsesez, euskaraz eta gaskoinez.',
    },
    services: {
      fr: ['Édition imprimée'],
      eu: ['Inprimatutako edizioa'],
    },
    serviceTags: ['editions-imprimees'],
    location: { fr: 'Bayonne', eu: 'Baiona' },
    year: 2024,
    featured: false,
    image: { desktop: '/portfolio/musee-basque-desktop.jpg', mobile: '/portfolio/musee-basque-desktop.jpg' },
    gallery: ['/portfolio/gallery/musee-basque-pages1.jpg', '/portfolio/gallery/musee-basque-pages2.jpg'],
  },
  {
    client: 'Beskoitzeko Ikastola',
    slug: 'beskoitzeko-ikastola',
    description: {
      fr: "Refonte complète du site internet pour moderniser l'image de l'établissement et attirer de nouvelles familles.",
      eu: 'Webgunearen berritze osoa, erakundearen irudia modernizatzeko eta familia berriak erakartzeko.',
    },
    services: {
      fr: ['Création site web'],
      eu: ['Webgunearen sorkuntza'],
    },
    serviceTags: ['sites-web'],
    location: { fr: 'Briscous', eu: 'Beskoitze' },
    year: 2024,
    featured: false,
    image: { desktop: '/portfolio/beskoitzeko-desktop.jpg', mobile: '/portfolio/beskoitzeko-desktop.jpg' },
  },
];
