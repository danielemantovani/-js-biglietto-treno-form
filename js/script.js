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
    let kmValue = parseInt (kmInputElem.value);//number |null
    console.log(kmValue, typeof kmValue);

    // Selezione dell'età
    const ageInputElem = document.getElementById ("user-age"); //object |null
    const ageValue = parseInt (ageInputElem.value)//number |null
    console.log(ageValue, typeof ageValue);
})

// bottone annulla
cancelBtnElem.addEventListener ("click", function (){
    console.log ("Annulla")
})


// 3. CALCOLO PREZZO DEL BIGLIETTO

const kmPirce = 0.21; //number |null

let ticketPrice = kmValue * 0.21
console.log(ticketPrice);



