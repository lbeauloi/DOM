// Create a new <section> with a random background-color for each learner in your group. This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>

//---------------------------------------------------------THEORIE-------------------------------------------------------------------
// créer un élément : const newSection = document.createElement("section");

// ajouter du contenu dans le nouvel élément : const newContenu = document.createTextNode("je suis le nouveau contenu de la div")

// ajouter le texte à notre nouvelle section : newSection.appendChild(newContenu);

// nos données : un array avec tout les learners de Keller 6
//-------------------------------------------------------------------------------------------------------------------------------------
let arrLearner = [
  "Alexandre",
  "Antoine",
  "Bastien",
  "Carole",
  "Dorian",
  "Elisabteh",
  "Elodie",
  "Justin",
  "JustineF",
  "JustineL",
  "Kimi",
  "Layla",
  "Lidwine",
  "Lucas",
  "Marie",
  "Mathias",
  "Okly",
  "Pierre",
  "Robin",
  "Rosalie",
  "Stephane",
  "Tim",
  "Toms",
  "Valentin",
  "Vens",
  "Virginie",
];

//selectionner l'élément article existant dans l'html via le queryslector
let article = document.querySelector("article");


// FONCTION DE L'EXO PRECEDENT POUR GENERER UNE COULEUR RANDOM
//--------------------------------------------------------------------
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
//---------------------------------------------------------------------



// ---------------------------------------------------------------------------------------------------------------------------
//BOUCLE POUR CREER 26 SECTIONS AVEC PARAGRAPHES, DES BG DE COLEURS ALEATOIRES ET UN TEXTE CONTRASTE
for (let i = 0; i < 26; i++) {  
  
  let section = document.createElement("section"); //crée une nouvelle section
  let p = document.createElement("p"); //crée un p
  p.textContent = arrLearner[i];  //utilise le contenu du tableau (le noms des Learners)

  
  let backgroundColor = getRandomColor(); //génere une couleur aléatoire et l'applique comme bg color
  section.style.backgroundColor = backgroundColor;

  section.appendChild(p);  //ajoute p à la section
 
  article.appendChild(section);  //ajoute la section à l'article
}
// --------------------------------------------------------------------------------------------------------