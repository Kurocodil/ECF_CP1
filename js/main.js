function hidePages(){
    let pages = document.querySelectorAll('.page');
    pages.forEach(page =>{
        page.style.display='none';
    })
}

function navFunction() {
    let urlSettings = window.location.hash || '#home';      // Lien actuel, sinon mettre #home
    let resume = document.getElementById('resume');         // Récupération div CV
    let projects = document.getElementById('projects');     // Récupération div Projet
    let home = document.getElementById('home');             // Récupération div accueil
    hidePages();                                            // Cacher directement les pages a chaque fois
    switch (urlSettings) { // vérifie les correspondance du lien pour afficher dynamiquement l'html
        case '#home':
            home.innerHTML=`<div class="home page"  id="home">
                <div class="row">
                    <h1 class="col-lg ">MATHEO SIRON</h1>
                </div>
                <div id="devImg">
                    <img src="assets/imgs/bande_dev.png" alt="Bandeau Développeur Web">
                </div>
                <p>
                    Passionné depuis plusieurs années par le développement web, 
                    je me suis orienté vers une formation de DWWM et suis ainsi devenu apprenti développeur en Full-stack. J’ai à l’heure actuelle, bien 
                    plus d’appétence pour la partie Front-end de la création de site, mais n’en reste pas moins curieux, 
                    et motivé par le côté Back-end de la programmation. En terme de design j'aime ce qui est coloré, tout en restant sobre.
                </p>
                <div class="row cardsHome">
                    <div class="card-home col-lg-6">
                        <button >
                            <a href="#resume">
                                <div>
                                    <h2>CV</h2>
                                </div>
                                <img src="assets/imgs/fondCV.jpg" alt="CV"/>    
                            </a>
                        </button>
                    </div>
                    <div class="card-home col-lg-6">
                        <button class="dyna" data-target="projects">
                            <a href="#projects">
                                <div>
                                    <h2>PROJETS</h2>
                                </div>
                                <img src="assets/imgs/fondProjet.jpg" alt="Projet"/>
                            </a>
                        </button>
                    </div>
                </div>
            </div>`
            break;  
        case '#resume':
            resume.innerHTML=`<div class="resume page" id="resume">
            <h1>CV</h1>
            <div class="row">
                <div class="col-lg">
                    <div class="cv">
                        <img src="assets/imgs/cv_img.PNG" alt="CV">
                    </div>
                </div>
                <div class="col-lg">
                    <h4><u>A propos de moi</u></h4>
                    <p>
                        Bonjour ! <br> 
                        &emsp; &emsp;Je suis un passionné de musique, particulièrement de basse. La musique occupe une place 
                        importante dans ma vie. <br>
                        En dehors de la musique, j'aime également passer du temps à cuisiner. Un bon plat 
                        préparé avec soin, c’est un vrai plaisir pour moi ! J’adore aussi voyager pour m’immerger 
                        dans de nouvelles cultures ou encore partir en randonnée dans la nature. J'aime aussi les jeux vidéos, de tout genre.
                    </p>
                    <p>
                        &emsp; &emsp;Pour ce qui est de mes points forts, je dirai que je suis quelqu'un de curieux, toujours prêt à explorer 
                        de nouveaux domaines 
                        et à apprendre. L'autonomie est une de mes forces : je n’ai pas peur de me lancer dans de nouveaux 
                        projets et d’apprendre par moi-même. Je suis aussi très passionné par tout ce que je fais, ce qui 
                        me pousse à toujours m'investir à fond dans mes activités. De plus, j’aime être entouré de 
                        personnes, que ce soit pour échanger des idées ou collaborer. La persévérance sont des valeurs que je porte, 
                        car je crois que chaque effort mène à un résultat.
                    </p>
                    <p>Vous pouvez télécharger le CV en cliquant <a href="assets/imgs/CV_matheo_siron_dwwm.pdf" target="_blank">ici</a>.</p>
                </div>
            </div>
        </div>`
            break;
        case '#projects':
            projects.innerHTML=`<div class="projects page" id="projects">
            <section>
                <header>
                    <h1>Projets</h1>
                </header>
                <article>
                    <div id="filterbar">
                        <input type="text" id="filter" placeholder="Nom du projet" onkeyup="filterbar()">
                    </div>

                    <!-- Cartes Projets -->
                    <div class="row">
                        <!-- Carte 1 -->
                         <div class="col-xl-4 col-lg-6 col-md-4">
                             <section class="card-pro" data-titre="AC/DC">
                                 <header>
                                     <h4>AC/DC</h4>
                                 </header>
                                 <article>
                                     <img src="assets/imgs/acdc.PNG" alt="AC/DC">
                                 </article>
                                 <footer>
                                    <p>
                                        Site vitrine créé dans le cadre d'un exercice sur le framework <strong>Bootstrap</strong>
                                        présentant le groupe d'AC/DC, les membres du groupe, les albums ainsi que les dates de concert.
                                    </p>
                                     <u>technologies utilisées :</u>
                                     <p>
                                         HTML / SCSS / CSS / BootStrap / FontAwesome
                                     </p>
                                 </footer>
                             </section>
                         </div>

                        <!-- Carte 2 -->
                         <div class="col-xl-4 col-lg-6 col-md-4">
                             <section class="card-pro" data-titre="L'antre du livre">
                                 <header>
                                     <h4>L'antre du livre</h4>
                                 </header>
                                 <article>
                                     <img src="assets/imgs/antre_du_livre.PNG" alt="L'antre">
                                 </article>
                                 <footer>
                                    <p>
                                        Site vitrine créé dans le cadre d'une préparation d'ECF CP1. 
                                        C'est un site répertoriant des livres en ajoutant dans la pages de la liste,
                                         une fonction <strong>JavaScript</strong> permettant de chercher un livre via des informations données.
                                    </p>
                                     <u>technologies utilisées :</u>
                                     <p>
                                         HTML / SCSS / CSS / BootStrap / JavaScript / FontAwesome
                                     </p>
                                 </footer>
                             </section>
                         </div>

                        <!-- Carte 3 -->
                         <div class="col-xl-4 col-lg-6 col-md-4">
                             <section class="card-pro" data-titre="Artistes Peintres">
                                 <header>
                                     <h4>Artistes Peintres</h4>
                                 </header>
                                 <article>
                                     <img src="assets/imgs/artistes_peintres.PNG" alt="Artistes Peintres">
                                 </article>
                                 <footer>
                                    <p>
                                        Site vitrine créé dans le cadre d'un exercice sur le chargement dynamique. 
                                        C'est un site présentant des tableaux de différents peintres connu.
                                        Une fonction <strong>JavaScript</strong> de charger dynamiquement des pages.
                                    </p>
                                     <u>technologies utilisées :</u>
                                     <p>
                                         HTML / SCSS / CSS / BootStrap / JavaScript / FontAwesome
                                     </p>
                                 </footer>
                             </section>
                         </div>
                         <!-- Carte 4 -->
                          <div class="col-xl-4 col-lg-6 col-md-4">
                              <section class="card-pro" data-titre="Choco Boom">
                                  <header>
                                      <h4>Choco Boom</h4>
                                  </header>
                                  <article>
                                      <img src="assets/imgs/chocoboom.PNG" alt="Choco Boom">
                                  </article>
                                  <footer>
                                     <p>
                                         Site de présentation d'une marque de chocolat créer dans le but de voir le responsive.
                                     </p>
                                      <u>technologies utilisées :</u>
                                      <p>
                                          HTML / CSS
                                      </p>
                                  </footer>
                              </section>
                          </div>
 
                         <!-- Carte 5 -->
                          <div class="col-xl-4 col-lg-6 col-md-4">          
                              <section class="card-pro" data-titre="Galerie d'animaux">
                                  <header>
                                      <h4>Galerie d'animaux</h4>
                                  </header>
                                  <article>
                                      <img src="assets/imgs/galerie_animaux.PNG" alt="Galerie">
                                  </article>
                                  <footer>
                                     <p>
                                         Site galerie avec une petite carte de différents animaux créer dans le but de voir quelques petites animationd d'
                                         <strong>hover</strong> et de rangement de tableau.
                                     </p>
                                      <u>technologies utilisées :</u>
                                      <p>
                                          HTML / CSS
                                      </p>
                                  </footer>
                              </section>
                          </div>
 
                         <!-- Carte 6 -->
                          <div class="col-xl-4 col-lg-6 col-md-4">
                              <section class="card-pro" data-titre="History Game">
                                  <header>
                                      <h4>History Game</h4>
                                  </header>
                                  <article>
                                      <img src="assets/imgs/history_game.PNG" alt="History Game">
                                  </article>
                                  <footer>
                                     <p>
                                         Site vitrine sur l'histoire du jeux vidéo. 
                                         C'est un site expliquant et répertoriant des jeux retro créer dans le but d'exercer <strong>BootStrap</strong>.
                                     </p>
                                      <u>technologies utilisées :</u>
                                      <p>
                                          HTML / CSS / BootStrap
                                      </p>
                                  </footer>
                              </section>
                          </div>
                          <!-- Carte 7 -->
                           <div class="col-xl-4 col-lg-6 col-md-4">
                               <section class="card-pro" data-titre="Shoesplash">
                                   <header>
                                       <h4>Shoesplash</h4>
                                   </header>
                                   <article>
                                       <img src="assets/imgs/shoes_plash.PNG" alt="Shoesplash">
                                   </article>
                                   <footer>
                                      <p>
                                          Site de vente de chaussure créer dans le but de découvrir les différents positionnement <strong>CSS</strong>.
                                      </p>
                                       <u>technologies utilisées :</u>
                                       <p>
                                           HTML / CSS / FontAwesome
                                       </p>
                                   </footer>
                               </section>
                           </div>
                           <!-- Carte 8 -->
                           <div class="col-xl-4 col-lg-6 col-md-4">
                              <section class="card-pro" data-titre="Portfolio">
                                  <header>
                                      <h4>Portfolio</h4>
                                  </header>
                                  <article>
                                      <img src="assets/imgs/portfolio.png" alt="Portfolio">
                                  </article>
                                  <footer>
                                     <p>
                                      Site vitrine créé dans le cadre de l'ECF CP1. 
                                      C'est un site / CV contenant : une présentation, un cv téléchargeable, mes projets, des mentions légales et un formulaire de contact.
                                      Entièrement documenté sur Github et dans les fichiers source.
                                     </p>
                                      <u>technologies utilisées :</u>
                                      <p>
                                          HTML / CSS / SCSS / FontAwesome / BootStrap / Jquery / JavaScript / Github
                                      </p>
                                  </footer>
                              </section>
                    </div>
                </article>
            </section>
        </div>`
            break;
        default:
            home.innerHTML=`<div class="home page"  id="home">
                <div class="row">
                    <h1 class="col-lg ">MATHEO SIRON</h1>
                </div>
                <div id="devImg">
                    <img src="assets/imgs/bande_dev.png" alt="Bandeau Développeur Web">
                </div>
                <p>
                    Passionné depuis plusieurs années par le développement web, 
                    je me suis orienté vers une formation de DWWM et suis ainsi devenu apprenti développeur en Full-stack. J’ai à l’heure actuelle, bien 
                    plus d’appétence pour la partie Front-end de la création de site, mais n’en reste pas moins curieux, 
                    et motivé par le côté Back-end de la programmation. En terme de design j'aime ce qui est coloré, tout en restant sobre.
                </p>
                <div class="row cardsHome">
                    <div class="card-home col-lg">
                        <button >
                            <a href="index.html?page=resume">
                                <div>
                                    <h2>CV</h2>
                                </div>
                                <img src="assets/imgs/fondCV.jpg" alt="CV"/>    
                            </a>
                        </button>
                    </div>
                    <div class="card-home col-lg">
                        <button class="dyna" data-target="projects">
                            <a href="index.html?page=projects">
                                <div>
                                    <h2>PROJETS</h2>
                                </div>
                                <img src="assets/imgs/fondProjet.jpg" alt="Projet"/>
                            </a>
                        </button>
                    </div>
                </div>
            </div>`
            break;
    }
    window.addEventListener('DOMContentLoaded',navFunction);
    window.addEventListener('hashchange', navFunction);
}
navFunction();




























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
