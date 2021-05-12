// 3. Probando Arrays
// JEST se pueden ocupar los mismos métodos para array objeto string

const carrito = ['1', '2', '3'];

describe('Testing Carrito', () => {
    test('Tiene 3 elementos', () => {
        expect(carrito).toHaveLength(3);
    });
    test('Carrito no esta vacio ', () =>{
        //Verificar que no este vacio
        expect(carrito).not.toHaveLength(0);
    });
})