
// Fonction Affichage dynamique ACCUEIL / CV / PROJETS
// Récupération de tout les boutons de navigation dans le tableau btns + toutes les pages dans le talbeau pages
const btns = document.querySelectorAll(".dyna");
const pages = document.querySelectorAll(".page");
btns.forEach(data =>{                             // Boucle pour chaque bouton
    const name=data.getAttribute('data-target');  //donner la valeur de data-target a une constant name
    data.addEventListener('click', () =>{         //Ajout d'une fonction lors d'un click
        pages.forEach(page =>{                    //comparaison pour chaque page si la target correspond a une page
            if (name == page.id) {
                page.style.display = 'block';     // Afficher la page si elle correspond
            } else {
                page.style.display='none';        // Cacher les pages non correspondante
            }
        });
    });
});