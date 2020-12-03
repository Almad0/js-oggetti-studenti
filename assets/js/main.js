// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// CREO L'OGGETTO STUDENT
var student = {
  name: "Alessandro",
  surName: "Internicola",
  age: 33
}
// console.log(student);
// MOSTRO IN CONSOLE LE PROPRIETA DELL'OGGETTO
console.log("Studente: ");
for (var key in student) {
  console.log(student[key]);
}

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
]
// console.log(classe[2]);  -------  mi da l'oggetto "Michelino"

// MOSTRO SOLO NOMI E COGNOMI DELL'ELEMENTO I-ESIMO DELL'ARRAY CLASSE
console.log("\nLista degli studenti:");
for (var i = 0; i < classe.length; i++) {
    console.log("Studente " + (i+1) + ": " + classe[i].name + " " + classe[i].surName);
}

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

// MOSTRO A VIDEO LA LISTA DEI NOMI E COGNOMI AGGIORNATA
console.log("\nLista degli studenti aggiornata:");
for (var i = 0; i < classe.length; i++) {
    console.log("Studente " + (i+1) + ": " + classe[i].name + " " + classe[i].surName);
}



// fine
