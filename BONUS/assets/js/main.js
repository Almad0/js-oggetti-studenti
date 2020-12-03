// PARTE BONUS - STAMPARE IN HTML LA LISTA

// CREO L'OGGETTO STUDENT
var student = {
  name: "Alessandro",
  surName: "Internicola",
  age: 33
};
// console.log(student);
// MOSTRO IN CONSOLE LE PROPRIETA DELL'OGGETTO
console.log("Studente: ");
for (var key in student) {
  console.log(student[key]);
};

// -------------------------------------------------------------------
// CON QUESTO LO MOSTRO A SCHERMO NELL'HTML
// for (var key in student) {
//   document.getElementById("Single_student").innerHTML += student[key] + "<br>";
// }
// -------------------------------------------------------------------

// CREO UN ARRAY FATTO DI OGGETTI
var classe = [
  { name: "Alessandro",
    surName: "Internicola",
    age: 33},
  { name: "Carmelo",
    surName: "Prestanome",
    age: 27},
  { name: "Oliver",
    surName: "Hutton",
    age: 30},
  { name: "Michelino",
    surName: "Fortunello",
    age: 29},
  { name: "Pinguino",
    surName: "De Longhi",
    age: 30}
];

// DEFINISCO LE VARIABILI PER I DOM ELEMENT
var nameList = document.getElementById("list");
var btnShow = document.getElementById("show_list");
var btnAdd = document.getElementById("add_student");

// AZIONI PER I BOTTONI
btnShow.addEventListener("click", function () {
  // MOSTRO SOLO NOMI E COGNOMI DELL'ELEMENTO I-ESIMO DELL'ARRAY CLASSE
  nameList.innerHTML = "";
  for (var i = 0; i < classe.length; i++) {
    nameList.innerHTML += "<li>" + (i+1) + ": " + classe[i].name + " " + classe[i].surName + "</li>";
    nameList.classList.remove('hidden');
  }
});

btnAdd.addEventListener("click", function () {
  // INSERISCO LE PROPRIETA IN UN NUOVO OGGETTO E LO PUSHO DENTRO L'ARRAY
  var newName = prompt("Inserisci il nome dello studente");
  var newSurName = prompt("Inserisci il cognome dello studente");
  var newAge = Number(prompt("Inserisci l'età dello studente"));
  var newStudent = {
    name: newName,
    surName: newSurName,
    age: newAge
  };
  classe.push(newStudent);
});



// fine
