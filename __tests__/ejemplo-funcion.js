// 5. Probando Funciones
function suma(a, b) {
    return a + b;
}

function restar(a,b) {
    return a - b;
}

describe('Testing a las funciones de suma y resta', () => {
    test('Suma de 20 y 30', () => {
        // Se espera que suma 20 + 30 sea 50
        expect(suma(20, 30)).toBe(50);
    });
    test('Resta de 10 - 5', () => {
        expect(restar(10, 5)).toBe(5);
    });
    // No tiene ese valor
    test('Que la suma de 10 y 10, no sea 10', () => {
        expect(suma(10,10)).not.toBe(10);
    });
});