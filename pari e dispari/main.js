// - dichiarare 2 variabili dove in 1 chiediamo di scegliere se pari o dispari e nell'altra di inserire un numero da 1 a 5
const inputOddOrEven = prompt("Scegli tra pari o dispari");
const userNum = parseFloat(prompt("Scegli un numero tra 1 e 5"));

if (userNum >= 1 && userNum <= 5) {
    // - dichiariamo una variabile dove chiamiamo la funzione appena creata per salvare un numero del computer
    const cpuNum = random1to5();
    // - dichiariamo una variabile dove c'è la somma di entrambi i numeri
    const sumNum = userNum + cpuNum;
    // - dichiariamo una variabile dove verrà richiamata la funzione
    const sumNumOddOrEven = isNumOddOrEven(sumNum);
    // - printiamo il risultato
    if ((sumNumOddOrEven && inputOddOrEven === "pari") || (sumNumOddOrEven === false && inputOddOrEven === "dispari")) console.log("Hai indovinato!");
    else console.log("Non hai indovinato!");
};


// - creiamo una funzione dove generiamo un numero random da 1 a 5
function random1to5() {
    return Math.floor(Math.random() * 5) + 1
};

// - creiamo una funzione dove restituisce un valore booleano a seconda se il risultato della variabile di prima è pari o dispari
function isNumOddOrEven(num) {
    return num % 2 === 0
};