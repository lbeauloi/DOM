// exercice 1
console.log(document.title);

// exercice 2
document.title = "Modifying the DOM";
console.log(document.title);

// exercice 3
document.bgColor = "pink";

// exercice 3 extra

// exercice 4
let body = document.body;
for (let children of body.children) {
  console.log(children.tagName);
}
