import type { ServiceTag } from './site';

/** French long-form copy; keep card summaries and Basque translations in site.ts. */
export interface EditorialSection {
  title: string;
  paragraphs?: string[];
  items?: string[];
}

export interface EditorialContent {
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string;
  sections: EditorialSection[];
}

export const serviceEditorial: Record<ServiceTag, EditorialContent> = {
  'identite-visuelle': {
    seoTitle: 'Logo et identité visuelle au Pays basque | Studio Kutzu',
    seoDescription: 'Création de logo, charte graphique et identité visuelle au Pays basque. Studio Kutzu traduit les valeurs de votre activité en une image cohérente.',
    h1: 'Création de logo et identité visuelle au Pays basque',
    intro: 'Vous lancez une activité ou votre image ne correspond plus à ce que vous proposez ? Je vous accompagne dans la création ou la refonte de votre identité visuelle, pour donner une expression claire et reconnaissable à votre entreprise.',
    sections: [
      {
        title: 'Une identité qui part de votre activité',
        paragraphs: ['Votre histoire, vos valeurs et les personnes auxquelles vous vous adressez donnent une direction au travail graphique. L’enjeu est de trouver une image juste pour votre activité, puis de la décliner avec cohérence sur vos différents supports.'],
      },
      {
        title: 'Du logo à ses déclinaisons',
        items: ['Création ou refonte du logo.', 'Moodboard pour définir un univers visuel.', 'Charte graphique pour guider l’utilisation de votre identité.', 'Déclinaisons sur vos cartes de visite, supports de communication ou packaging, selon le projet.'],
      },
      {
        title: 'Des marques ancrées dans leur métier',
        paragraphs: ['L’image du cabinet dentaire Hortzkina, l’identité d’Elkar Bat et le travail réalisé pour la boutique Arraya illustrent des besoins différents : créer une marque, la faire évoluer ou préserver son caractère tout en la modernisant.', 'Si vous disposez déjà d’une identité et souhaitez concevoir un catalogue ou une brochure, la prestation d’éditions imprimées porte plus précisément sur l’organisation et la mise en forme de ce document.'],
      },
    ],
  },
  'sites-web': {
    seoTitle: 'Création et refonte de sites web au Pays basque | Kutzu',
    seoDescription: 'Sites vitrines, e-commerce et multilingues : Studio Kutzu vous accompagne au Pays basque dans la création, la refonte et les contenus de votre site.',
    h1: 'Création et refonte de sites web au Pays basque',
    intro: 'Présenter votre entreprise, préparer une visite, informer des familles ou vendre en ligne : votre site doit répondre aux besoins de vos visiteurs. Je crée et repense des sites vitrines, e-commerce et multilingues avec une attention portée aux contenus et à leur organisation.',
    sections: [
      {
        title: 'Un site pensé pour vos visiteurs',
        paragraphs: ['Le projet commence par les informations à transmettre et les actions que vous souhaitez faciliter. Un audit du site existant peut aider à préparer une refonte ; pour une création, le travail porte sur la structure et les contenus nécessaires à votre activité.'],
      },
      {
        title: 'Structure, rédaction et réalisation',
        items: ['Création ou refonte de sites vitrines et de boutiques en ligne.', 'Organisation des pages et rédaction web.', 'Intégration du référencement naturel dans les contenus.', 'Sites multilingues et mises à jour d’actualités ou d’articles, selon les besoins.'],
      },
      {
        title: 'Des usages concrets, du patrimoine au e-commerce',
        paragraphs: ['Pour la Villa Arnaga, la refonte accompagne la préparation de la visite et l’accès aux informations pratiques. Pour Haria, le site e-commerce est proposé en français et en euskara pour présenter des abonnements de livres en basque. La DDEC 64 illustre un autre enjeu : rendre les informations plus accessibles aux futurs enseignants.', 'Le référencement fait partie de cette réflexion sur le site : Arima Agencements illustre le travail sur l’arborescence, les contenus et les recherches locales dès la conception.'],
      },
    ],
  },
  'social-media': {
    seoTitle: 'Community management au Pays basque | Studio Kutzu',
    seoDescription: 'Stratégie réseaux sociaux, création de contenus et community management au Pays basque. Un accompagnement adapté à vos publics et à votre activité.',
    h1: 'Gestion des réseaux sociaux et community management',
    intro: 'Vous souhaitez communiquer régulièrement, mieux présenter votre savoir-faire ou donner une direction à vos réseaux sociaux ? Je vous accompagne dans votre stratégie, la création de contenus et l’animation de vos communautés, depuis le Pays basque.',
    sections: [
      {
        title: 'Choisir les réseaux en fonction de vos publics',
        paragraphs: ['L’audit de vos comptes existants permet de faire le point sur votre présence et vos contenus. La stratégie se construit ensuite autour de vos cibles et de votre activité : une entreprise qui s’adresse à des professionnels n’a pas les mêmes besoins qu’une maison d’hôtes ou un club de sport.'],
      },
      {
        title: 'Un accompagnement éditorial et quotidien',
        items: ['Stratégie social media et audit des comptes existants.', 'Création de photos, vidéos, publications, carrousels et reels.', 'Animation des comptes et modération des échanges.', 'Reporting, coaching et accompagnement d’une personne en charge de la communication.', 'Optimisation et gestion de votre fiche Google Business Profile, selon votre situation.'],
      },
      {
        title: 'Des missions adaptées à chaque activité',
        paragraphs: ['La mission pour la Poterie Goicoechea associe la valorisation du savoir-faire à un objectif de visibilité auprès des professionnels, notamment sur LinkedIn et Pinterest. Chez Maison Olhabidea, la communication prend en compte les mariages, les séjours hors saison et la clientèle locale.', 'Hatsa Sport illustre une autre forme d’intervention : accompagner un alternant et construire une communication cohérente entre plusieurs clubs.'],
      },
    ],
  },
  'marketing-digital': {
    seoTitle: 'Publicités et newsletters au Pays basque | Studio Kutzu',
    seoDescription: 'Campagnes Facebook, Instagram et Google Ads, création de newsletters : Studio Kutzu accompagne votre communication et votre acquisition digitale.',
    h1: 'Campagnes publicitaires et newsletters',
    intro: 'Faire connaître une offre, soutenir un temps fort ou garder le contact avec votre audience : le marketing digital complète votre communication. Je vous accompagne dans la préparation de campagnes ciblées et la création de newsletters.',
    sections: [
      {
        title: 'Partir d’un objectif et d’un public précis',
        paragraphs: ['Avant de choisir un canal, il faut préciser ce que vous souhaitez communiquer et à qui. Une campagne publicitaire peut soutenir un objectif d’acquisition ; une newsletter permet de partager vos actualités avec les personnes déjà en lien avec votre activité.'],
      },
      {
        title: 'Les prestations proposées',
        items: ['Stratégie d’acquisition et préparation de campagnes ciblées.', 'Publicités sur Facebook et Instagram.', 'Campagnes Google Ads.', 'Création et envoi de newsletters.'],
      },
      {
        title: 'Une communication cohérente entre vos supports',
        paragraphs: ['Le message publicitaire, la page vers laquelle il renvoie et votre newsletter doivent présenter la même offre de façon claire. Selon votre besoin, cet accompagnement peut être associé au travail sur votre site ou vos réseaux sociaux.', 'Pour préparer notre échange, indiquez votre offre, le public visé, vos supports actuels et la période concernée. Ces éléments permettront de définir le périmètre de la mission.'],
      },
    ],
  },
  'editions-imprimees': {
    seoTitle: 'Brochures et éditions imprimées au Pays basque | Kutzu',
    seoDescription: 'Conception de brochures, catalogues, flyers et documents institutionnels au Pays basque : mise en forme éditoriale et gestion des impressions.',
    h1: 'Conception de brochures et supports imprimés',
    intro: 'Un catalogue, une brochure ou un document institutionnel doit être agréable à consulter et facile à comprendre. Je vous accompagne dans la conception éditoriale de vos supports imprimés et la gestion de leur impression.',
    sections: [
      {
        title: 'Donner une forme lisible à vos contenus',
        paragraphs: ['Cette prestation porte sur le document : organiser les informations, les mettre en page et les inscrire dans votre univers graphique. Elle s’adresse aux entreprises, associations et institutions qui souhaitent présenter une offre, un projet ou des informations de référence.'],
      },
      {
        title: 'Des supports adaptés à leur usage',
        items: ['Catalogues, brochures et documents institutionnels.', 'Flyers, dépliants, affiches et cartes de visite.', 'Conception éditoriale et mise en page.', 'Gestion des impressions.'],
      },
      {
        title: 'Un exemple : le Musée Basque de Bayonne',
        paragraphs: ['Le Musée Basque et de l’Histoire de Bayonne m’a confié la conception éditoriale et la réalisation de son Projet Scientifique et Culturel. Ce document institutionnel présente les orientations du musée en français, en euskara et en gascon.', 'La création d’un logo ou d’une charte graphique relève de la prestation d’identité visuelle. Les deux interventions peuvent se compléter lorsque votre projet nécessite à la fois une nouvelle image et des documents pour la faire vivre.'],
      },
    ],
  },
  'evenementiel': {
    seoTitle: 'Communication événementielle au Pays basque | Kutzu',
    seoDescription: 'Planification de la communication, invitations, kakémonos et signalétique : Studio Kutzu conçoit les supports de vos événements au Pays basque.',
    h1: 'Communication et supports pour vos événements',
    intro: 'Vous préparez un événement et souhaitez lui donner une communication cohérente ? Je vous accompagne dans sa planification et la conception des supports qui serviront à informer, inviter et orienter vos publics.',
    sections: [
      {
        title: 'Préparer les informations et les supports',
        paragraphs: ['L’événement, ses publics, son lieu et ses dates permettent de définir les besoins de communication. L’objectif est de prévoir les messages et les supports utiles, en tenant compte de votre identité visuelle et du calendrier.'],
      },
      {
        title: 'Les prestations proposées',
        items: ['Planification de la communication événementielle.', 'Conception de kakémonos et de signalétique.', 'Création d’invitations et de supports dédiés.', 'Déclinaison de votre identité sur les documents de l’événement.'],
      },
      {
        title: 'Relier l’événement à votre communication',
        paragraphs: ['Vos supports imprimés, votre site et vos réseaux sociaux peuvent relayer les mêmes informations pour faciliter la préparation de l’événement. Le choix des supports dépendra des usages et du périmètre convenu.', 'Pour m’en parler, précisez le type d’événement, sa date, les publics attendus et les éléments dont vous disposez déjà. L’accompagnement présenté ici concerne la communication et ses supports.'],
      },
    ],
  },
};

export const projectEditorial: Record<string, EditorialContent> = {
  'ddec-64': {
    seoTitle: 'DDEC 64 : refonte web et contenus | Studio Kutzu',
    seoDescription: 'Refonte du site de la DDEC 64 et stratégie de contenu orientée vers les futurs enseignants de l’Enseignement catholique des Pyrénées-Atlantiques.',
    h1: 'DDEC 64 : un site tourné vers les futurs enseignants',
    intro: 'La Direction Diocésaine de l’Enseignement Catholique des Pyrénées-Atlantiques souhaitait un site plus actuel et plus clair. La refonte s’accompagne d’un travail sur les contenus destinés aux personnes qui envisagent de devenir enseignantes.',
    sections: [
      { title: 'Faciliter l’accès aux informations', paragraphs: ['L’objectif était de faire du site une porte d’entrée vers l’Enseignement catholique du département, en facilitant la compréhension des différentes étapes pour devenir enseignant. Ce besoin a orienté la réflexion sur la présentation des contenus.'] },
      { title: 'La mission', items: ['Refonte du site internet de la DDEC 64.', 'Stratégie de contenu orientée vers les futurs enseignants.', 'Travail sur la clarté des informations et des étapes du parcours.'] },
    ],
  },
  'musee-arnaga': {
    seoTitle: 'Villa Arnaga : refonte du site du musée | Studio Kutzu',
    seoDescription: 'Refonte du site de la Villa Arnaga à Cambo-les-Bains : patrimoine, informations pratiques, programmation et accès à la réservation en ligne.',
    h1: 'Villa Arnaga : préparer sa visite dès le site internet',
    intro: 'À Cambo-les-Bains, la Villa Arnaga fait découvrir l’univers d’Edmond Rostand et un patrimoine singulier. La refonte de son site a été pensée pour raconter le lieu tout en accompagnant la préparation d’une visite.',
    sections: [
      { title: 'Raconter le patrimoine et renseigner les visiteurs', paragraphs: ['L’enjeu était d’articuler l’histoire d’Edmond Rostand et la découverte du domaine avec les besoins pratiques des visiteurs. Le site devait donner accès à la programmation, aux informations utiles et à la réservation en ligne.'] },
      { title: 'La mission', items: ['Refonte du site internet de la Villa Arnaga.', 'Organisation des contenus consacrés au lieu et à son patrimoine.', 'Travail sur l’accès aux informations pratiques, à la programmation et à la réservation.'] },
    ],
  },
  'arima-agencements': {
    seoTitle: 'Arima Agencements : création de site web | Studio Kutzu',
    seoDescription: 'Création du site d’Arima Agencements au Pays basque : présentation du savoir-faire et référencement pensé dès l’arborescence et la rédaction.',
    h1: 'Arima Agencements : un site pour présenter le sur-mesure',
    intro: 'Arima Agencements intervient dans l’aménagement intérieur au Pays basque : cuisines, salles de bain et agencements sur mesure. La création de son site devait traduire ce savoir-faire dans un secteur concurrentiel.',
    sections: [
      { title: 'Penser la visibilité dès la conception', paragraphs: ['Le référencement naturel a été intégré à la réflexion sur l’arborescence, les contenus et les recherches locales. L’objectif était de construire une présence en ligne qui présente clairement l’activité et aide l’entreprise à se différencier.'] },
      { title: 'La mission', items: ['Création du site internet.', 'Réflexion sur la structure des pages et leurs contenus.', 'Prise en compte des recherches locales dans la conception.'] },
    ],
  },
  'hortzkina': {
    seoTitle: 'Hortzkina : identité visuelle et site web | Studio Kutzu',
    seoDescription: 'Création de l’image de marque et du site bilingue français-basque du cabinet dentaire Hortzkina, installé à Baigorri.',
    h1: 'Hortzkina : une identité et un site pour un cabinet dentaire',
    intro: 'Le cabinet dentaire Hortzkina accueille ses patients à Baigorri, dans de nouveaux locaux aux équipements de pointe. Le projet associe la création de son image de marque et de son site internet.',
    sections: [
      { title: 'Une présence cohérente pour le cabinet', paragraphs: ['L’identité visuelle donne au cabinet une image chaleureuse, reprise sur son site. Le projet permet de présenter Hortzkina à travers un univers graphique commun, en français et en euskara.'] },
      { title: 'La mission', items: ['Création de l’image de marque du cabinet.', 'Travail sur le logo et l’univers visuel.', 'Création du site internet bilingue euskara-français.'] },
    ],
  },
  'elkar-bat': {
    seoTitle: 'Elkar Bat : identité et refonte web | Studio Kutzu',
    seoDescription: 'Logo, cartes de visite, brochures et refonte du site d’Elkar Bat, société de maîtrise d’œuvre à Espelette, au Pays basque.',
    h1: 'Elkar Bat : une identité renouvelée, du logo au site',
    intro: 'Elkar Bat, société de maîtrise d’œuvre à Espelette, accompagne des projets de rénovation et de construction de maisons. L’entreprise souhaitait repenser son identité pour affirmer ses valeurs d’authenticité et de modernité.',
    sections: [
      { title: 'Faire évoluer les différents supports ensemble', paragraphs: ['Le travail a porté sur le logo, les outils de communication et la refonte du site. Ces supports permettent de décliner l’identité de l’entreprise aussi bien dans les échanges directs que dans sa présentation en ligne.'] },
      { title: 'La mission', items: ['Travail sur le logo et l’identité visuelle.', 'Conception de cartes de visite et de brochures.', 'Refonte du site internet.'] },
    ],
  },
  'poterie-goicoechea': {
    seoTitle: 'Poterie Goicoechea : réseaux sociaux | Studio Kutzu',
    seoDescription: 'Community management pour la Poterie Goicoechea à Ossès : savoir-faire, collections et stratégie de visibilité B2B sur LinkedIn et Pinterest.',
    h1: 'Poterie Goicoechea : partager un savoir-faire artisanal',
    intro: 'Installée à Ossès, la Poterie Goicoechea perpétue depuis trois générations un savoir-faire entre tradition et création contemporaine. La mission de community management vise à raconter ce travail et à présenter les collections.',
    sections: [
      { title: 'S’adresser aux amateurs comme aux professionnels', paragraphs: ['La stratégie social media poursuit plusieurs objectifs : renforcer la notoriété de la maison, fédérer une communauté autour de l’artisanat et développer sa visibilité B2B. LinkedIn et Pinterest font partie des canaux mobilisés pour cette dimension professionnelle.'] },
      { title: 'La mission', items: ['Stratégie social media et community management.', 'Valorisation du savoir-faire et des collections.', 'Communication tournée vers les professionnels sur LinkedIn et Pinterest.'] },
    ],
  },
  'hatsa-sport': {
    seoTitle: 'Hatsa Sport : accompagnement communication | Kutzu',
    seoDescription: 'Accompagnement d’un alternant et stratégie de communication commune aux clubs Hatsa Sport d’Ossès, Larressore et Bassussarry.',
    h1: 'Hatsa Sport : accompagner la communication de plusieurs clubs',
    intro: 'Hatsa Sport réunit des salles de sport à Ossès, Larressore et Bassussarry. La mission consiste à encadrer et accompagner un alternant en communication pour construire une stratégie cohérente entre les clubs.',
    sections: [
      { title: 'Donner une direction commune', paragraphs: ['L’accompagnement porte sur la cohérence de la communication de la structure. Dans ce cadre, l’identité visuelle et le site ont été repensés, avec un déploiement progressif sur les réseaux sociaux. Le rôle de Studio Kutzu présenté ici est celui de l’accompagnement et de la coordination.'] },
      { title: 'La mission', items: ['Encadrement et accompagnement d’un alternant en communication.', 'Mise en place d’une stratégie commune aux différents clubs.', 'Accompagnement du déploiement sur les réseaux sociaux.'] },
    ],
  },
  'maison-olhabidea': {
    seoTitle: 'Maison Olhabidea : community management | Studio Kutzu',
    seoDescription: 'Stratégie social media pour Maison Olhabidea : valorisation du lieu, communication autour des mariages et des séjours hors saison.',
    h1: 'Maison Olhabidea : communiquer au rythme du lieu',
    intro: 'Maison Olhabidea associe restaurant, chambres d’hôtes et événements privés dans un cadre de campagne. La mission de community management s’appuie sur les différentes facettes de cette maison et sur sa saisonnalité.',
    sections: [
      { title: 'Des publics et des occasions de séjour différents', paragraphs: ['L’accompagnement vise à faire connaître le lieu, à intéresser de nouveaux clients aux mariages et aux séjours hors saison, et à entretenir le lien avec une clientèle locale. La communication doit refléter l’expérience et l’art de vivre proposés par la maison.'] },
      { title: 'La mission', items: ['Stratégie social media et community management.', 'Valorisation du restaurant, des chambres d’hôtes et des événements privés.', 'Communication prenant en compte les mariages, les séjours hors saison et les publics locaux.'] },
    ],
  },
  'fep-cfdt': {
    seoTitle: 'FEP-CFDT : création d’un site de ressources | Studio Kutzu',
    seoDescription: 'Création du site de la FEP-CFDT Pays Basque Béarn Landes : actualités, droits et ressources pour les personnels de l’enseignement privé.',
    h1: 'FEP-CFDT : créer un espace de ressources pour les personnels',
    intro: 'La FEP-CFDT Pays Basque Béarn Landes ne disposait pas encore de site internet. Le projet a consisté à créer un espace destiné aux enseignants et aux personnels de l’enseignement privé.',
    sections: [
      { title: 'Réunir les informations utiles au quotidien', paragraphs: ['Le site rassemble des actualités, des informations sur les droits et des ressources utiles. L’objectif est de proposer un point d’accès commun à ces contenus et d’accompagner la mission d’information du syndicat.'] },
      { title: 'La mission', items: ['Création du site internet à partir de zéro.', 'Organisation des actualités, des informations sur les droits et des ressources.', 'Présentation de contenus destinés aux personnels de l’enseignement privé.'] },
    ],
  },
  'college-sfx': {
    seoTitle: 'Collège SFX à Ustaritz : site et rédaction web | Kutzu',
    seoDescription: 'Site internet et rédaction de contenus pour le collège Saint François Xavier à Ustaritz : présentation de l’établissement et de son internat.',
    h1: 'Collège Saint François Xavier : un site et des contenus dédiés',
    intro: 'Le collège Saint François Xavier, à Ustaritz, souhaitait dynamiser son image et mieux communiquer sur ses atouts. Le site internet et sa rédaction présentent l’établissement, notamment son internat.',
    sections: [
      { title: 'Présenter les atouts du collège', paragraphs: ['Le travail sur les contenus accompagne la présentation du collège et des informations utiles à sa découverte. La rédaction a également été pensée pour le référencement naturel, afin de soutenir sa visibilité dans les recherches.'] },
      { title: 'La mission', items: ['Réalisation du site internet du collège.', 'Rédaction des contenus avec une attention portée au référencement naturel.', 'Présentation des atouts de l’établissement, dont l’internat.'] },
    ],
  },
  'ecole-saint-joseph': {
    seoTitle: 'École Saint-Joseph : site vitrine et blog | Studio Kutzu',
    seoDescription: 'Création du site vitrine et du blog de l’école Saint-Joseph à Itxassou, pour présenter son enseignement bilingue et partager la vie de l’école.',
    h1: 'École Saint-Joseph : présenter l’école et partager son quotidien',
    intro: 'À Itxassou, l’école Saint-Joseph souhaitait moderniser sa communication et valoriser son enseignement bilingue français-basque. Le projet associe un site vitrine à un blog dédié à la vie de l’école.',
    sections: [
      { title: 'Informer les parents et les futures familles', paragraphs: ['Le site présente l’établissement et son enseignement. Le blog le complète avec les projets et les actualités de l’école, dans l’objectif d’entretenir le lien avec les parents et de faire découvrir son quotidien aux futures familles.'] },
      { title: 'La mission', items: ['Création du site vitrine de l’école.', 'Création d’un blog pour les projets et les actualités.', 'Présentation de l’enseignement bilingue français-basque.'] },
    ],
  },
  'ifas-cambo': {
    seoTitle: 'IFAS Cambo-les-Bains : refonte de site web | Studio Kutzu',
    seoDescription: 'Refonte du site de l’Institut de Formation d’Aides-Soignants de Cambo-les-Bains, avec l’objectif de faire découvrir la formation à de futurs candidats.',
    h1: 'IFAS de Cambo-les-Bains : renouveler le site de l’institut',
    intro: 'L’Institut de Formation d’Aides-Soignants est une institution de Cambo-les-Bains. La mission porte sur la refonte de son site internet pour renouveler sa communication auprès des personnes qui envisagent cette formation.',
    sections: [
      { title: 'S’adresser aux futurs candidats', paragraphs: ['La refonte a été menée avec l’objectif d’attirer davantage de candidats vers l’institut. Le site constitue un support de communication pour faire découvrir cet établissement de formation.'] },
      { title: 'La mission', items: ['Refonte du site internet de l’IFAS.', 'Renouvellement du support de communication en ligne de l’institut.'] },
    ],
  },
  'haria': {
    seoTitle: 'Haria : site e-commerce français-basque | Studio Kutzu',
    seoDescription: 'Création du site e-commerce bilingue de Haria à Sare : des abonnements de livres en euskara pour les enfants, présentés en français et en basque.',
    h1: 'Haria : un site e-commerce autour de la lecture en euskara',
    intro: 'Mirentxu, enseignante passionnée de littérature, propose avec Haria des abonnements de livres en euskara pour les enfants. Son projet vise à donner le goût de la lecture et à créer un moment partagé entre parents et enfants.',
    sections: [
      { title: 'Présenter l’offre dans les deux langues', paragraphs: ['Le site e-commerce a été réalisé en euskara et en français. Il donne une présence en ligne à cette offre d’abonnements, en conservant les deux langues au cœur de la présentation du projet.'] },
      { title: 'La mission', items: ['Création du site e-commerce de Haria.', 'Réalisation des versions euskara et française.', 'Présentation de l’offre d’abonnements de livres pour enfants.'] },
    ],
  },
  'boutique-arraya': {
    seoTitle: 'Boutique Arraya : identité visuelle et packaging | Kutzu',
    seoDescription: 'Modernisation du logo et de l’identité visuelle de la boutique Arraya à Sare, avec des déclinaisons de packaging fidèles à son caractère artisanal.',
    h1: 'Boutique Arraya : moderniser une identité sans perdre son caractère',
    intro: 'À Sare, la boutique Arraya propose une sélection artisanale qui réunit notamment gâteau basque, vins d’Irouléguy, linge et bijoux locaux. Le projet porte sur son identité visuelle et son packaging.',
    sections: [
      { title: 'Préserver les valeurs de la boutique', paragraphs: ['La mission consiste à moderniser le logo et l’image d’Arraya tout en conservant ses valeurs d’authenticité, de qualité et de simplicité. L’objectif est de s’adresser à la clientèle locale comme aux visiteurs de passage.'] },
      { title: 'La mission', items: ['Modernisation du logo et de l’identité visuelle.', 'Déclinaisons de l’identité sur le packaging.', 'Travail graphique fidèle au caractère artisanal de la sélection.'] },
    ],
  },
  'musee-basque': {
    seoTitle: 'Musée Basque : conception éditoriale | Studio Kutzu',
    seoDescription: 'Conception éditoriale du Projet Scientifique et Culturel du Musée Basque de Bayonne, document institutionnel en français, euskara et gascon.',
    h1: 'Musée Basque : mettre en forme un projet scientifique et culturel',
    intro: 'Le Musée Basque et de l’Histoire de Bayonne a confié à Studio Kutzu la conception éditoriale et la réalisation de son Projet Scientifique et Culturel. Ce document présente les grandes orientations du musée.',
    sections: [
      { title: 'Un document pour les publics institutionnels', paragraphs: ['Destiné au Ministère de la Culture et aux publics institutionnels, le document réunit les orientations du musée dans une édition présentée en français, en euskara et en gascon. La mission concerne sa conception éditoriale et sa réalisation.'] },
      { title: 'La mission', items: ['Conception éditoriale du Projet Scientifique et Culturel.', 'Réalisation du document institutionnel.', 'Mise en forme d’une publication présentée dans trois langues.'] },
    ],
  },
  'beskoitzeko-ikastola': {
    seoTitle: 'Beskoitzeko Ikastola : refonte du site web | Studio Kutzu',
    seoDescription: 'Refonte du site de Beskoitzeko Ikastola à Briscous : présentation du projet pédagogique et informations essentielles pour les familles.',
    h1: 'Beskoitzeko Ikastola : un site au service du projet pédagogique',
    intro: 'L’ikastola de Briscous souhaitait valoriser son projet pédagogique et se présenter à de nouvelles familles. Elle a confié à Studio Kutzu la refonte complète de son site internet.',
    sections: [
      { title: 'Clarifier les informations pour les familles', paragraphs: ['L’objectif était de moderniser l’image de l’établissement et de rendre les informations essentielles plus lisibles. Le site devait rester accueillant et fidèle aux valeurs de l’ikastola.'] },
      { title: 'La mission', items: ['Refonte complète du site internet.', 'Présentation du projet pédagogique de l’établissement.', 'Travail sur la clarté des informations destinées aux familles.'] },
    ],
  },
};

export const aboutEditorial: EditorialContent = {
  seoTitle: 'Maider Gaicotchea, conseil en communication | Studio Kutzu',
  seoDescription: 'Basée à Cambo-les-Bains, Maider Gaicotchea accompagne entreprises et institutions dans leur communication, avec 18 ans d’expérience métier.',
  h1: 'Maider Gaicotchea, fondatrice de Studio Kutzu',
  intro: 'Installée à Cambo-les-Bains, j’accompagne les entreprises, associations et institutions dans leurs projets de communication. Mon rôle : comprendre votre activité et traduire vos valeurs dans des messages et des supports qui vous ressemblent.',
  sections: [
    {
      title: 'Un parcours en communication et en e-commerce',
      paragraphs: ['Mes 18 années d’expérience m’ont amenée à travailler dans des secteurs différents, notamment la sécurité sociale, l’agroalimentaire et les cosmétiques, à des postes en communication et en e-commerce.', 'Cette expérience nourrit une approche qui relie votre image, vos contenus et vos canaux de communication, en fonction de votre situation.'],
    },
    {
      title: 'Un accompagnement adapté à vos besoins',
      paragraphs: ['Je vous accompagne sur l’identité visuelle, les sites web, les réseaux sociaux, le marketing digital, les éditions imprimées et la communication événementielle. Selon le projet, l’intervention peut prendre la forme d’une réalisation ou d’un accompagnement de votre équipe.', 'Le point de départ reste le même : comprendre vos besoins spécifiques pour proposer des solutions de communication adaptées. Les réalisations du studio montrent comment cette approche prend forme pour un artisan, une école, un musée ou une entreprise locale.'],
    },
    {
      title: 'Un studio implanté au Pays basque',
      paragraphs: ['Studio Kutzu est basé à Cambo-les-Bains. Les projets menés à Baigorri, Espelette, Ossès, Sare ou Bayonne témoignent de cet ancrage et de la diversité des activités accompagnées.'],
    },
  ],
};
