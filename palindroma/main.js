// - dichiarare una variabile con un input dove si chiede all'utente di inserire una parola
const userInput = prompt("Inserisci una parola, io ti dirò se è palindroma!");

// - dichiarare una funzione dove:
function isPalindrome (wordInput) {
    //     - prende la variabile di input e la rovescia, salva in risultato in una variabile
    reversedInput = wordInput.split('').reverse().join('');
    //     - confronta se la parola in input è uguale alla parola rovesciata
    //     - restituisce un valore booleano
    return userInput === reversedInput
};

// - printare se la parola in input è palindroma oppure no
if (isPalindrome(userInput)) console.log("La parola è palindroma!");
else console.log("La parola non è palindroma!");