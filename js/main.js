
// Fonction Affichage dynamique ACCUEIL / CV / PROJETS
// Récupération de tout les boutons de navigation dans le tableau btns + toutes les pages dans le talbeau pages
// const btns = document.querySelectorAll(".dyna");
// const pages = document.querySelectorAll(".page");
// btns.forEach(data =>{                             // Boucle pour chaque bouton
//     const name=data.getAttribute('data-target');  //donner la valeur de data-target a une constant name
//     data.addEventListener('click', () =>{         //Ajout d'une fonction lors d'un click
//         pages.forEach(page =>{                    //comparaison pour chaque page si la target correspond a une page
//             if (name == page.id) {
//                 page.style.display = 'block';     // Afficher la page si elle correspond
//             } else {
//                 page.style.display='none';        // Cacher les pages non correspondante
//             }
//         });
//     });
// });


// Fonction pour afficher une section par son ID
function displayScreen(data) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        if (page.id === data) {
            page.style.display = 'block'; // Affiche la section
        } else {
            page.style.display='none';  // Masque les autres
        }
    });
}


// Récupérer le paramètre "page" de l'URL avec Regex

// match = ce qu'il y apres ? .match(qui correspond a la regex)
const match = window.location.search.match(/[?&]page=([^&]+)/);
// correspondance trouvé → match = [ page, accueil] 
// si pas correspondance → match = null;

const pageFromUrl = match ? match[1] : null; //(accueil ou null)
// → fonction qui renvoir match[1] si correspondance   → match[1] = accueil
// match(null) si pas correspodance

// Utiliser un switch pour gérer la navigation dynamique
switch (pageFromUrl) {
    case 'home':
        displayScreen('home');
        break;
    case 'resume':
        displayScreen('resume');
        break;
    case 'projects':
        displayScreen('projects');
        break;
    default:
        displayScreen('home'); // Page par défaut si aucune correspondance
        break;
}











// Filtre projets
function filterbar(){
    const Filtre = document.getElementById("filter").value.toLowerCase();
    const Tab = document.querySelectorAll('.card-pro');

    Tab.forEach(data =>{
        const titre = data.getAttribute("data-titre").toLowerCase();

        if (titre.includes(Filtre)){
            data.style.display='block';
        } else{
            data.style.display='none';
        }
    })
}
