//Crée une variable, nommée question1.
//Cette variable doit contenir la chaine de caractères suivante : Quelle mer borde la ville de Sébastopol ?.
//Crée ensuite une variable solution1. Cette variable doit contenir la solution à la "question 1"... 😉
let question1 = "Quelle mer borde la ville de Sebastopol?";
let solution1 = "La mer noire";
let question2 = "Quel est l'âge du capitaine ?";
let solution2 = "63";
function question() {
  let reponse1 = prompt(question1);
  console.log(reponse1);
  if (solution1 === reponse1) {
    alert("Gagné");
  } else {
    alert("Perdu");
  }
  let reponse2 = prompt(question2);
  console.log(reponse2);
  if (solution2 === reponse2) {
    alert("Bravo");
  } else {
    alert("T'es nul !");
  }
  // if (solution1 === reponse1 && solution2 === reponse2) {
  //   alert("Tu as deux bonnes réponses");
  // } else if (solution1 === reponse1 || solution2 === reponse2) {
  //   alert("Tu as une bonne réponse");
  // } else {
  //   alert("Tu as 0 bonne réponse");
  // }
  let answer = 0;
  if (solution1 === reponse1) {
    answer++;
  }
  if (solution2 === reponse2) {
    answer++;
  }
  alert("Tu as " + answer + " " + "bonne(s) réponses");
}

question();
// Utilise une fonction  pour afficher le contenu de la variable question1 à l'utilisateur . Il faut récupérer la réponse et la mettre dans une variable reponse1.
// Après que l'utilisateur ait répondu, il faut mettre en place un test. Si la réponse est égale à la solution, affiche une alerte avec le message Gagné !, sinon affiche Perdu....
//Recommence le procédé des 2 premiers exercices pour poser une autre question :
//Nouvelle variable question2, dont le contenu est Quel est l'âge du capitaine ?.
//Nouvelle variable solution2, dont le contenu est 63.
//Demander la réponse de l'utilisateur...
//Tester...
// Trouve un moyen pour compter le nombre de bonnes réponses de l'utilisateur. Une fois toutes les questions posées, affiche un message du type "Vous avez X bonnes réponses".
