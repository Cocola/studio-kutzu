# Validation SEO — 17 septembre 2026

Cette recette concerne la version locale modifiée du site. Elle ne constitue ni une preuve de publication, ni une preuve d’indexation par Google.

## Vérifications reproductibles

```sh
npm run build
npm run test:seo
# Comparaison facultative avec le build de référence conservé localement :
npm run test:seo -- --baseline=/tmp/kutzu-seo-before/dist
# Dans un autre terminal :
npm run preview -- --host 127.0.0.1 --port 4323
npm run test:seo:browser
```

La suite navigateur accepte `BASE_URL` (hôte local uniquement) et `EVIDENCE_DIR` (par défaut `/tmp/kutzu-seo-evidence`). Elle utilise un Chromium Playwright jetable, sans profil utilisateur. Les requêtes extérieures sont bloquées ; les neuf requêtes du formulaire sont simulées dans le navigateur et ne sont jamais transmises à Web3Forms.

## Contrôles statiques

- Compilation Astro réussie : 54 pages.
- 54 URL uniques dans le sitemap, canoniques correspondantes, `hreflang` réciproques et JSON-LD valide.
- 1 898 liens internes et 1 506 références aux fichiers vérifiés ; aucune destination manquante.
- Contenu basque préservé sur 27 pages par comparaison au build précédent.
- Images optimisées : 107 variantes WebP générées, dimensions intrinsèques et `srcset` ; originaux publics conservés.

Il n’y a pas de résultat de vérification TypeScript séparée : la compilation Astro et ces recettes sont les contrôles exécutés.

## Recette navigateur

Résultat final : **12 scénarios sur 12 réussis**, neuf requêtes de formulaire simulées, aucun envoi réel.

Douze scénarios couvrent :

- le parcours mobile 390 × 844, accueil → identité visuelle → Hortzkina → contact ;
- l’ouverture, la fermeture et la touche Échap du menu, puis les bascules FR/EU ;
- huit pages françaises/basques sans JavaScript, avec texte visible, navigation et contact par courriel/téléphone ;
- l’absence de chevauchement entre l’en-tête sans JavaScript et le premier contenu ;
- le mouvement réduit, les scripts bloqués et l’accès refusé au stockage ;
- le formulaire simulé : succès confirmé, HTTP 200 avec `success:false`, HTTP 500, échec réseau et JSON invalide ; conservation des champs et nouvel essai après les quatre erreurs ;
- quatre pages sur ordinateur 1 440 × 1 000, sans débordement horizontal ;
- des captures directes et après navigation, une fois les polices chargées et les animations terminées.

La recette a détecté et permis de corriger un chevauchement de 36 px de l’en-tête mobile sans JavaScript. Une première capture prise pendant les transitions a également conduit à renforcer la synchronisation des captures ; les images finales attendent la bonne canonique, les polices et la fin des animations.

Preuves locales : `/tmp/kutzu-seo-evidence/browser-tests.json`, `seo-home-mobile.png`, `seo-home-nojs-mobile.png`, `seo-identity-mobile-viewport.png`, `seo-identity-desktop-viewport.png`, `seo-hortzkina-mobile-direct.png` et `seo-home-desktop.png`. Le fichier JSON consigne le résultat de chaque scénario, la date et les requêtes simulées/bloquées.

## Performances de laboratoire

Lighthouse **13.0.3**, mode mobile, même configuration, profil isolé et cache vide ; une mesure avant et une mesure après par page. Référence avant : build du dépôt avant les modifications SEO. Ces mesures locales indiquent une amélioration, mais ne constituent pas une série statistique ni des Core Web Vitals de terrain.

| Page | Score avant → après | LCP avant → après | Octets transférés avant → après |
| --- | --- | --- | --- |
| Accueil | 94 → 99 | 2 635 → 1 966 ms | 1 364 510 → 244 743 |
| Identité visuelle | 97 → 99 | 2 336 → 1 958 ms | 742 376 → 234 689 |
| Hortzkina | 83 → 98 | 4 356 → 2 341 ms | 820 524 → 280 912 |

Le CLS après modifications reste inférieur à 0,001 sur les trois pages. Les optimisations d’images répondent aux diagnostics de la référence : notamment DDEC (PNG d’environ 764 ko), Arnaga et Arima servis à une taille trop importante pour leurs cartes.

Synthèse durable : [seo-performance.json](./seo-performance.json). Rapports complets locaux : `/tmp/kutzu-seo-evidence/{before,after}-{home,service,project}.json`. Les mesures précèdent les derniers ajustements mineurs de libellés et du fallback sans JavaScript ; elles ne prétendent pas mesurer une publication finale.

## Vérifications restant liées à la publication

- Réponses HTTP réelles du CDN : variantes HTTP/HTTPS et `www`, slash final, conservation des paramètres, absence de boucle ; la configuration Vercel n’est pas exercée par le serveur Astro local.
- Soumission du sitemap canonique et inspection des pages prioritaires dans Search Console après publication.
- Indexation, trafic et demandes qualifiées à J+30/J+60/J+90.
- Aucun envoi réel du formulaire ni modification d’une fiche Google Business Profile pendant cette recette.

## Correction du routage `www` après publication

Le contrôle HTTP du premier déploiement a révélé que `/:path*` ne couvrait ni `/` ni les pages terminées par `/`. Le compilateur officiel inclus dans Vercel CLI 59.20.0 reproduit ce défaut. La règle utilise désormais `/:path(.*)` et la destination `https://studiokutzu.com/:path` : sa regex compilée `^(?:/(.*))$` conserve le chemin complet, y compris le slash terminal et la racine vide. La condition reste limitée à `www.studiokutzu.com` ; aucun middleware ou réglage de domaine n’a été ajouté.

Régression reproductible, sans dépendance de production supplémentaire :

```sh
# Chemin vers @vercel/routing-utils ou son module dans la CLI Vercel installée.
VERCEL_ROUTING_UTILS_MODULE=/chemin/vers/module-du-compilateur.js node scripts/test-vercel-redirects.mjs
```

Le test utilise le véritable compilateur pour vérifier les chemins du sitemap avec/sans slash, la racine et les fichiers. Il reproduit également l’échec de l’ancienne règle. La conservation des paramètres par le CDN et les réponses HTTP finales restent à confirmer par la matrice publique après publication de ce correctif. [Documentation officielle des redirections Vercel](https://vercel.com/docs/routing/redirects/configuration-redirects).
