# Navigation 
## Analyse 
Il faut naviguer entre des apges dynamique (ancre) et des pages indépendante (externe)
- récuperer dans une variable, le parametre a partir du # du lien si il n'y a rien, mettre #home dans la variable
- récuperer les blocks des pages dynamiques
- effectuer la fonction cacher les pages 
- utiliser un switch sur le # récuperé
- Afficher avec un innerHTML la page correspondante 
- ajouter un écouteur sur la page pour attendre que le DOM ait chargé pour effectuer la fonction
- ajouter un écouteur sur la page pour effectuer la fonction lors qu'un changement du lien survient
## Pseudo-code
```js
FONCTION navFunction() {
    VARIABLE urlSettings ← window.location.hash || '#home';
    VARIABLE resume ← document.getElementById('resume');
    VARIABLE projects ← document.getElementById('projects');
    VARIABLE home ← document.getElementById('home');
    FONCTION hidePages();
    switch (urlSettings) {
        case '#home':
           "AFFICHER LE CODE HTML DE LA PAGE HOME"
            break;
        case '#projects':
            " AFFICHER LE CODE HTML DE LA PAGE PROJECTS"
            break;
        default:                                                                
            " AFFICHER LE CODE HTML DE LA PAGE HOME"
            break;
    }
    window.addEventListener('DOMContentLoaded',navFunction);
    window.addEventListener('hashchange', navFunction);

FIN FONCTION
}

DEBUT
    navFunction();
FIN
```
## Analyse fonction pour cacher les pages
- Récuperer toutes les pages dans un tableau
- Pour chaque pages
- Les cacher avec un display none
## Pseudo-code 
```js
FONCTION hidePages(){
    VARIABLE pages = document.querySelectorAll('.page');
    POUR CHAQUE pages(page =>{
        CACHER PAGE
    })
}
 ```

 # Barre de recherche projets
 ## Analyse
 - récuperer la saisie user en minuscule
 - récuperer toutes les cartes des projets dans un tableau
 - pour chaque carte du tableau, créer une constante titre et y mettre la valeur de data-titre en minuscule
 - dans une condition, vérifier que la saisie correspond a data-titre, si oui afficher sinon cacher
## Pseudo-code 
```js
FONCTION filterbar(){
    CONSTANTE Filtre ← document.getElementById("filter").value.toLowerCase();
    CONSTANTE Tab ← document.querySelectorAll('.card-pro');
    POUR CHAQUE Tab(data =>{
        CONSTANTE titre ← data.getAttribute("data-titre").toLowerCase();
        SI (titre.includes(Filtre)){
            "AFFICHER"
        } SINON{
            "CACHER CARTE"
        }
        FIN SI
    })
}
```