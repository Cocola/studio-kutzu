# Livraison SEO et suivi de Studio Kutzu

Préparé le 17 septembre 2026. Ce document distingue la préparation locale, la publication et l’observation ultérieure dans Google. Aucune publication, soumission de sitemap ou prise de contact externe n’est attestée par cette checklist.

## État de référence

Propriété Search Console : `sc-domain:studiokutzu.com`. Données observées du 27 avril au 14 septembre 2026 : **37 clics, 909 impressions, CTR 4,1 %, position moyenne 12,6**. Le sélecteur de période était réglé sur 12 mois, mais l’historique effectif est plus court.

- Les variantes de l’accueil totalisent 36 des 37 clics. Les URL HTTP et `www` figurent dans l’historique ; cela ne suffit pas à conclure à un défaut actuel de redirection.
- Page `/services/identite-visuelle/` : 97 impressions, aucun clic, position moyenne 43,7. Requête « identité visuelle pays basque » : 90 impressions, position 43,4. Les volumes sont faibles ; ce signal ne classe pas les offres par potentiel commercial.
- 26 pages indexées ; 23 exclusions : 15 alternatives avec canonique correcte, 2 redirections et 6 URL détectées non indexées. Les six dernières étaient des variantes sans slash final : vérifier leur canonique avant de les considérer comme six contenus absents.
- Ancien sitemap soumis : `https://www.studiokutzu.com/sitemap.xml`, 10 URL découvertes, dernière lecture le 15 septembre 2026. Le site comporte 54 pages françaises et basques au moment du travail.
- Aucun résultat PageSpeed public exploitable obtenu lors du diagnostic initial. Une absence de données CrUX ne prouve pas une bonne ou une mauvaise performance.

Les requêtes anonymisées ne figurent pas toutes dans les tableaux Search Console : les lignes visibles ne permettent pas de reconstituer à elles seules les totaux ni la part exacte de clics hors marque.

## Vérification et publication

Avant publication :

- [ ] Examiner les changements et valider la rédaction française avec les preuves de `seo-editorial-sources.md`.
- [ ] Compiler le site et exécuter les vérifications de liens, canoniques, sitemap et alternatives linguistiques.
- [ ] Parcourir sur mobile accueil → service → réalisation → contact, avec JavaScript puis sans JavaScript pour la lecture et la navigation.
- [ ] Tester les succès et erreurs du formulaire avec réponses simulées, sans envoi réel.
- [ ] Consigner les mesures mobiles avant/après sur `/`, `/services/identite-visuelle/` et `/realisations/hortzkina/`, dans les mêmes conditions.
- [ ] Distinguer mesures de laboratoire (Lighthouse) et données terrain (CrUX) ; ne pas présenter un score local comme un score de production.

Après une publication autorisée :

- [ ] Recontrôler les redirections HTTP/HTTPS, `www`/sans `www` et slash final sur le domaine public, avec conservation des paramètres utiles et sans boucle.
- [ ] Vérifier les 54 pages canoniques sur le domaine public et le sitemap `https://studiokutzu.com/sitemap.xml`.
- [ ] Soumettre ce sitemap dans Search Console. Vérifier son statut avant de supprimer l’ancienne entrée `www` de la liste des sitemaps soumis.
- [ ] Inspecter l’accueil et les six pages services pour comparer URL déclarée et URL canonique retenue par Google ; demander leur indexation seulement si utile et dans les limites de l’outil.
- [ ] Consigner la date, la révision publiée et le résultat de chaque contrôle. Le statut « publié » ne signifie pas « réindexé ».

## Suivi à J+30, J+60 et J+90

J désigne la date de publication vérifiée, pas la date de rédaction de ce document. Ces échéances constituent une procédure ; elles ne créent pas de rappel automatique.

| Échéance | Contrôle | Décision attendue |
| --- | --- | --- |
| J+30 | Lecture du nouveau sitemap, indexation des six services, canoniques retenues, éventuelles erreurs d’exploration. | Corriger uniquement les anomalies confirmées ; ne pas traiter les doublons canoniques normaux comme des erreurs. |
| J+60 | Comparer deux périodes complètes et consécutives de 28 jours, mêmes filtres pays/type de recherche/appareil. Relever clics, impressions, CTR et position par service. | Repérer les pages qui commencent à apparaître et les contenus à clarifier ; distinguer marque/hors marque sur les requêtes disponibles. |
| J+90 | Refaire la comparaison, compléter avec les demandes qualifiées et leur provenance connue. | Décider des prochains contenus utiles, puis seulement réévaluer blog, nouveaux cas clients ou autres pages. |

Conserver les exports Search Console localement dans un espace adapté ; ne pas ajouter au dépôt de données personnelles ou de captures de comptes. Classer les requêtes contenant « kutzu » ou « gaicotchea » comme marque, puis relire manuellement les variantes. Ne pas classer automatiquement les recherches sur les clients comme intentions commerciales pour le studio.

Le fichier `seo-leads.csv` fournit uniquement les en-têtes d’un journal anonyme. Utiliser un identifiant interne, la date, l’offre demandée, la provenance déclarée et le caractère qualifié de la demande. Ne pas y ajouter noms, adresses, emails ou messages de clients. La provenance inconnue reste « inconnue » ; ne pas attribuer par défaut une demande au SEO. Une demande qualifiée est ici une demande portant sur une prestation proposée et contenant assez d’informations pour envisager un échange commercial.

## Présence locale et possibilités de mentions

Coordonnées de référence du site : Studio Kutzu, Maider Gaicotchea, 8 chemin du Camp de César, 64250 Cambo-les-Bains, 06 03 20 02 26, kutzukom@gmail.com. Vérifications en lecture seule rapportées le 17 septembre 2026 :

| Source | Vérifié | Suite utile |
| --- | --- | --- |
| [LinkedIn du studio](https://fr.linkedin.com/company/kutzu) | Cambo-les-Bains, 64250 et fondation en 2022 cohérents avec le site. | Vérifier que le lien de site mène au domaine canonique. |
| [Annuaire fournisseurs Eusko 2026](https://www.euskalmoneta.org/wp-content/uploads/2025/12/Eskuz_Esku_2026-Eusko_sareko_hornitzaileak.pdf), p.20–21 | Studio Kutzu à Kanbo et téléphone cohérents. Mention déjà existante. | Examiner la fiche numérique et son éventuel lien ; aucune nouvelle sollicitation nécessaire avant ce contrôle. |
| Instagram et Facebook | Lecture automatisée refusée ; profils non vérifiés. | Contrôle manuel des coordonnées et du lien de site. |
| Google Business Profile | Fiche non vérifiée directement. Un annuaire tiers ne valide pas son existence ni ses données. | Contrôler la fiche existante et son accès propriétaire. Avant toute création, vérifier l’éligibilité selon les rencontres réelles avec les clients et les règles Google ; ne pas inventer d’adresse d’accueil. |

Possibilités prioritaires, fondées sur des collaborations ou mentions existantes :

1. **Eusko** : vérifier la fiche et l’éventuel lien associé à la mention existante dans l’annuaire.
2. **DDEC 64** : [mentions légales](https://www.ddec64.net/mentions-legales), crédit identifié dans les résultats de recherche, mais ouverture directe non aboutie ; lien et destination restent à vérifier.
3. **Villa Arnaga** : [mentions légales](https://www.arnaga.com/mentions-legales), liens Studio Kutzu existants dans l’article 2 et le pied de page, vers `www.studiokutzu.com`. Aucun lien à créer ; normalisation éventuelle vers le domaine sans `www` à l’occasion, la redirection conservant l’accès.
4. **IFAS Cambo-les-Bains** : [page contact](https://www.ifas-cambo.fr/contact), lien de pied de page existant vers `www.studiokutzu.com`. Aucun lien à créer ; même possibilité de normalisation lors d’une mise à jour ordinaire.
5. **Musée Basque** : [Projet Scientifique et Culturel](https://www.musee-basque.com/files/pmedia/public/r9825_9_pcs_2024_musee_basque_web.pdf), crédit de conception éditoriale existant ; une présentation du projet sur une page institutionnelle pourrait fournir un contexte pertinent si le musée le souhaite.

Une mention, un lien cliquable et un lien pris en compte par Google sont trois constats différents. Aucune campagne de liens en pied de page, échange systématique de liens ou prise de contact externe n’est engagé. Toute sollicitation nécessite une instruction distincte.

## Références méthodologiques

- [Performance dans Search Console](https://support.google.com/webmasters/answer/7576553?hl=fr) : définitions des métriques et limites des tableaux de requêtes.
- [Créer et envoyer un sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=fr) : URL canoniques et dates de modification exactes.
- [Versions localisées](https://developers.google.com/search/docs/specialty/international/localized-versions?hl=fr) : alternatives linguistiques réciproques.
- [PageSpeed Insights](https://developers.google.com/speed/docs/insights/v5/about) : différence entre données de laboratoire et données terrain.
- [Classement local Google](https://support.google.com/business/answer/7091?hl=fr) : pertinence, distance et notoriété ; aucune garantie de classement.
