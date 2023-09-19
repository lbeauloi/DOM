// EXERCICE 1 + 2 + Find a way so that everytime you load the page the order of the elements changes!

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
  
  // FONCTION POUR VERIFIER LA LUMINOSITE DE LA COULEUR
  // ----------------------------------------------------------------------------------------------------------------------
  function darkColor(color) {
    //convertir la couleur en RGB
    var r = parseInt(color.slice(1, 3), 16); //parseInt() analyse une chaîne de caractères (string) et la converti en un nombre entier (integer)
    var g = parseInt(color.slice(3, 5), 16);
    var b = parseInt(color.slice(5, 7), 16);
    //calculer la luminosité(via formule YIQ)
    let lum = (r * 299 + g * 587 + b * 114) / 1000; //formule de YIQ, on divise par 1000 pour que la valeur de lum soit dans une plage de 0 à 255 (pour etre facilement comparé aux valeurs RGB)
    //si luminosité faible (couleur foncée), renvoyer vrai, sinon faux
    return lum < 128;
  }
  //-------------------------------------------------------------------------------------------------------------------------
  
  // FONCTION POUR MELANGER UN ARRAY ALEATOIREMENT
  //----------------------------------------------------------------------------------------------------------------------------
  function shuffle(array) {
    //fonction shuffle recoit en argument un tableau(array) à mélanger
    //commence par parcourir le tableau par le dernier élément (array.lenght-1) jusqu'au premier (0) (ici on décrémente (--))
    for (let i = array.length - 1; i > 0; i--) {
      //pour chaque élement en cours de traitement [i], elle génère un indice aléatoire pour [j] entre 0 et i.
      let j = Math.floor(Math.random() * (i + 1));
      //ensuite, elle effectue un échange entre l'élément en cours (à l'indice i) et l'élément selectionné aléatoirement (à l'indice j)
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  shuffle(arrLearner); //appelle de la fonction shuffle avec notre array Learner en argument
  //----------------------------------------------------------------------------------------------------------------------------
  
  // ---------------------------------------------------------------------------------------------------------------------------
  //BOUCLE POUR CREER 26 SECTIONS AVEC PARAGRAPHES, DES BG DE COLEURS ALEATOIRES ET UN TEXTE CONTRASTE
  for (let i = 0; i < 26; i++) {
    let section = document.createElement("section"); //crée une nouvelle section
    let p = document.createElement("p"); //crée un p
    p.textContent = arrLearner[i]; //utilise le contenu du tableau (le noms des Learners)
  
    let backgroundColor = getRandomColor(); //génére une couleur aléatoire et l'applique comme bg color
    section.style.backgroundColor = backgroundColor;
  
    if (darkColor(backgroundColor)) {
      //vérifier si la couleur est foncée en faisant appelle à la fonction darkColor def plus haut
      p.style.color = "white";
    } else {
      p.style.color = "black";
    }
  
    section.appendChild(p); //ajouter le <p> à la <section>
  
    article.appendChild(section); //ajouter la <section> à l'<article>
  }
  // --------------------------------------------------------------------------------------------------------