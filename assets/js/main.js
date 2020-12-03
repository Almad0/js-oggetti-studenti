//
// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
//
// Stampare a schermo attraverso il for in tutte le proprietà.
//
// Creare un array di oggetti di studenti.
//
// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
//
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.



var student = {
  name: "Alessandro",
  surName: "Internicola",
  age: 33
}
// console.log(student);
console.log("Studente: ");
for (var key in student) {
  console.log(student[key]);
}

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
]
// console.log(classe[2]);  -------  mi da l'oggetto "Michelino"

console.log("\nLista degli studenti:");
for (var i = 0; i < classe.length; i++) {
    console.log("Studente " + (i+1) + ": " + classe[i].name + " " + classe[i].surName);
}


















// $(function(){
//
//
//
// });























// fine
