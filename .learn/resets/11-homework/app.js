// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(dollar) {
    let yen = (dollar * oneEuroIs["USD"]) * oneEuroIs["JPY"];
    return yen;
}

function fromEuroToDollar(euro) {
    let dollar = oneEuroIs["USD"] * euro;
    return dollar;
}

function fromYenToPound(yen) {
    let pound = (oneEuroIs["USD"] * yen) * oneEuroIs["GBP"];
    return pound;
}


// Exporta la función
module.exports = {
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};