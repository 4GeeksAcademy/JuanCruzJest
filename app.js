
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}


const fromDollarToYen = function(valueInDollar){
    //convertimos el valor a yenes
    let valueInYenes = valueInDollar * 156.5
    //retornamos el valor en yenes
    return valueInYenes;
}

const fromYenToPound = function(valueInYenes){
    //convertimos el valor a pounds
    let valueInPounds = valueInYenes * 0.0072;
    //retornamos el valor in pounds
    return valueInPounds;
}




// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }
