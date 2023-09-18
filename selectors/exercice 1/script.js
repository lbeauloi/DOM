// EXERCICE 1
// Add a title attribute to every element that has the important class, stating This is an important item. Tip: adding a title attribute to an element is different from changing the title of a document.

// sélectionne tout les classes "important"
const elementImportant = document.querySelectorAll(".important");
// attribue l'attribut titre "this is an important item" pour chaque element important
elementImportant.forEach(function (element) {
  element.setAttribute("title", "This is an important item");
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

const Paragraphe = document.querySelectorAll("p"); //selectionne tous les p du document
for (let i = 0; i < Paragraphe.length; i++) {
  const contenuParagraphe = Paragraphe[i]; //créeation d'une constant "contenuparagphe" pour stocker le resultat de chaque ittération
  console.log(contenuParagraphe.textContent);
}
// ça nous donne juste la premiere partie de l'exercice (afficher les contenu des p dans la console), or on veut aussi afficher le nom de classe de ceux qui en on


//savoir si un élément a une classe? on utilise monElement.classList.length, si c'est > 0, alors mon élément à au moins une classe
