# Site : Portfolio DWWM
## Présentation du projet
Ce dépôt contient le code source du projet Portfolio de l'examen ECF CP1 de la formation DWWM Afpa (ALBI) 2024-2025

## Technologies Utilisées
- **HTML5** - Structure du contenu web.
- **SCSS** - Mise en forme et design du site.
- **JavaScript** - Interactivité, recherche, filtre et tri.
- **Frameworks/Bibliothèques** Bootstrap pour le responsive design.  

<u>Framework utilisé</u>

* CSS BootStrap : Responsive Design

## Description
1. **Page d'Accueil** - Présentation du portfolio + chargement dynamique des pages Réalisation et CV.
2. **Page Réalisation** - Affiche une liste des projets fais durant l'année accompagné chacun d'une image et d'une description.
3. **Page CV** - Affiche les détails de mon parcours académique et professionnel, avec lien externe (github/LinkedIn etc...).
4. **Page de Contact** - Permet aux visiteurs de contacter la bibliothèque via un formulaire de contact.
5. **Page Mentions Légales** - Mention légales obligatoires (RGPD, copyright, etc.).


## Contraintes techniques :
1. Bootstrap : Utiliser uniquement pour la gestion des row et col (grille responsive).
2. Menu : Le menu devra fonctionner en JavaScript sans rechargement de page. Le contenu doit se mettre
à jour instantanément (utiliser une logique de navigation dynamique en JavaScript).
Les pages contact et mentions légales doivent être des pages indépendantes et ne doivent pas
être chargées dynamiquement via JavaScript. Ces pages doivent être accessibles directement via
des liens traditionnels. Le contenu de ces pages ne doit pas être mis
à jour dynamiquement, contrairement aux autres pages du site qui peuvent utiliser JavaScript
pour un chargement dynamique du contenu.
3. Animations : Doivent être faites en SCSS (utilisation des mixins, transitions, etc.).
4. React ou Vue.js : Optionnel. Vous êtes libre de choisir l'un de ces frameworks, mais ce n'est pas
obligatoire.
5. GitHub : Mettre en place un dépôt GitHub pour la gestion du projet et des versions.
Utiliser des branches pour les features et les updates.
Respecter une procédure Git pour commit, pull request, et mise à jour régulière.
6. Documentation :
Stocker le pseudo-code et les algorithmes dans le dossier docs/.
La documentation générale du projet doit être en Markdown et être stockée dans docs/.
Les wireframes et prototypes doivent également être dans le dossier docs/.
7. Responsiveness : Le site doit être responsive et s'adapter à différentes tailles d'écran.
8. Anglophone : le nom des fonctions, attributs html (id, name, classes, etc.) doivent être en anglais.

## Fonctionnalités


A venir

## Structure du projet
/assets  
→ /img  
→ /movies  
→ /sounds  

/css  
→ /frameworks  
→ /normalize.css  
→ /normalize.css.map  
→ /style.css  
→ /style.css.map  
→ /zoning.css  
→ /zoning.css.map  

/docs  


/fonts  


/includes  
→ /contact.html  
→ /mentions.html  

/js  
→ /frameworks  
→ /main.js  

/scss  
→ /_colors.scss  
→ /_extends.scss  
→ /_mixins.scss  
→ /_typo.scss  
→ /_variable.scss  
→ /_normalize.scss  
→ /_style.scss  
→ /_zoning.scss  

/index.html  
/README.md  