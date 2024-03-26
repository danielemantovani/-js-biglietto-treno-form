// TEST
// alert ('ciao')

// 1. RICERCA BOTTONI NELLA PAGINA

// Individuo il bottone genera nella pagina
const processBtnElem = document.getElementById ("process-btn"); //object |null
console.log (processBtnElem);

// Individuo il bottone annulla nella pagina
const cancelBtnElem = document.getElementById ("cancel-btn"); //object |null
console.log (cancelBtnElem);

// 2. AGGIUNGO GLI EVENTI AI BOTTONI

// - Bottone genera
processBtnElem.addEventListener ("click", function (){
    // console.log ("Genera")

    // - Raccolata dati

    // Inserimento nome
    const nameInputElem = document.getElementById ("user-name"); //object |null
    // console.log(nameInputElem, typeof nameInputElem);
    const nameValue = nameInputElem.value; //string |null
    console.log(nameValue);

    // Inserimento km da percorrere
    let kmInputElem = document.getElementById ("user-km"); //object |null
    let kmValue = parseInt (kmInputElem.value);//string |null
    console.log(kmValue, typeof kmValue);

    // Selezione dell'età
    const ageInputElem = document.getElementById ("user-age");
})

// bottone annulla
cancelBtnElem.addEventListener ("click", function (){
    console.log ("Annulla")
})


// const ticket = 0.21; //number |null

// 2. ESECUZIONE LOGICA

// calcolo del prezzo al netto degli sconti
// const ticketPirce = userKm * ticket
// console.log(ticketPirce);

// calcolo del prezzo se l'utente ha diritto allo sconto
// prezzo scontato - (prezzo base * sconto /100)

// let finalPrice = ticketPirce;

// let message = ""

// if (userAge < 19) {
//     finalPrice = ticketPirce * 0.8;
//     message = "Hai diritto ad uno sconto under 18 del 20%, il prezzo del tuo biglietto è di €";
// } else if (userAge > 64) {
//     finalPrice = ticketPirce * 0.6;
//     message = "Hai diritto ad uno sconto over 65 del 40%, il prezzo del tuo biglietto è di €";
// } else {
//     message = "Il prezzo del tuo biglietto è di €"
// }

// console.log(finalPrice);


// 3. OUTPUT

// document.getElementById ("finalPrice").innerHTML =message + finalPrice.toFixed(2);