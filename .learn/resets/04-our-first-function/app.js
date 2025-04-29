// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(dollar) {
    let yen = (dollar * oneEuroIs[1]) * oneEuroIs[0];
    return yen;
}

function fromEuroToDollar(euro) {
    console.log(oneEuroIs[1]);
    let dollar = oneEuroIs[1] * euro;
    console.log(dollar);
    return dollar;
}

function fromYenToPound(yen) {
    let pound = (oneEuroIs[1] * yen) * oneEuroIs[0];
    return pound;
}

console.log(fromEuroToDollar(3.5));

// Exporta la función
module.exports = {
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};