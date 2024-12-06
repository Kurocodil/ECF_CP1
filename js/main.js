
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