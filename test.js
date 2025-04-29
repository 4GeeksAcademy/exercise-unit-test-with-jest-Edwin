// Importar la función sum del archivo app.js
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One dollar to yen", function() {
    expect(fromDollarToYen(3.5)).toBe((3.5 / 1.07) * 156.5);
})

test("One euro to dollars", function() {
     expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("One dollar to pound", function() {
    expect(fromYenToPound(3.5)).toBe((3.5 / 156.5) * 0.87);
})