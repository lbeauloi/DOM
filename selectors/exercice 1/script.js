// EXERCICE 1
// Add a title attribute to every element that has the important class, stating This is an important item. Tip: adding a title attribute to an element is different from changing the title of a document.

// sélectionne tout les classes "important" via queryselectorAll
const elementImportant = document.querySelectorAll(".important");
// attribue l'attribut titre "this is an important item" pour chaque element important via forEach ("pour chaque elementImportant fonction un tel")
elementImportant.forEach(function (titleImportant) {
  titleImportant.setAttribute("title", "This is an important item");
});

// EXERCICE 2
// Select all the img tags and loop through them. If they have no important class, turn their display property to none.

// selectionne toutes les images qui n'ont pas la classe "important"
const imagesNonImportant = document.querySelectorAll("img:not(.important)");

// parcoure les images et définis leur style display sur "none"
imagesNonImportant.forEach(function (image) {
  image.style.display = "none";
});

// EXERCICE 3
// Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname as well

// const Paragraphe = document.querySelectorAll("p"); //selectionne tous les p du document
// Paragraphe.forEach(function(contenuParagraphe){ //"pour chaque Paragraphe, s'applique la fonction suivante"
//   console.log(contenuParagraphe.textContent);
// });
// ça nous donne juste la premiere partie de l'exercice (afficher les contenu des p dans la console), or on veut aussi afficher le nom de classe de ceux qui en on

//savoir si un élément a une classe? on utilise monElement.classList.length, si c'est > 0, alors mon élément à au moins une classe

const Paragraphe = document.querySelectorAll("p"); //selectionne tous les p du document
Paragraphe.forEach(function (contenuParagraphe) {
  //"pour chaque Paragraphe, s'applique la fonction suivante"
  if (contenuParagraphe.classList.length > 0) {
    //si la longueur de la liste de classe est > 0 cela veut dire que le p à une classe (logique)
    console.log(
      "nom de classe = " + contenuParagraphe.className,
      "contenu paragraphe = " + contenuParagraphe.textContent
    ); //affiche le nom de classe ainsi que le contenu
  } else {
    console.log("contenu paragraphe = " + contenuParagraphe.textContent);
    let RandomColorParagraphe = RandomColor(); //EXERCICE 4
    contenuParagraphe.style.color = RandomColorParagraphe;
  }
});

//EXERCICE 4
// Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.

function RandomColor() {
  let letters = "0123456789ABCDEF"; // on va utiliser le format de couleur hexadecimal (ex: #ff6347). (Le système hexadécimal utilise 6 caractères : les chiffres 0 à 9 et les lettres de A à F). On va donc jouer sur l'aléatoire des chiffres et des lettres, sans oublier que le format est #XXXXXX, donc maximum 6 caractères (lettres ou chiffres).

  let color = "#"; //creation de la varibale color pour y stocker le resultat de notre aléatoire de 6 caractère, précédé du # pour entrer un format hexadecimal valide

  for (let i = 0; i < 6; i++) {
    //i<6 car le format hexadecimal comprend 6 caractère
    color = color + letters[Math.floor(Math.random() * 16)]; //math.random nous donne un random entre 0-1, puis x16 pour obtenir un nombre entre 0 et 15 (index de letters = 0123456789ABCDEF), math floor arrondi pour au final donné un index aléatoire dans la varibale letters
  }
  return color;
}
