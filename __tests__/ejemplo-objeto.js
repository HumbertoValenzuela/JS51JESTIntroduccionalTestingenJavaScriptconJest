//4. Probando Objetos
const cliente = {
    nombre: 'Humberto',
    balance: 1000
};

describe('Testing al Cliente', () => {
    test('El Cliente es premium', () => {
        // espero que balance es Mayor a 400 
        expect(cliente.balance).toBeGreaterThan(400)
    });
    test('Es Humberto', () => {
        // es pero que nombre sea Humberto
        expect(cliente.nombre).toBe('Humberto');
    });
    // Una para comprobar un valor y otra que no sea un valor
// Se usa para evitar falsos positivos
    test('No es otro cliente', () => {
        // Se espera que nombre no sea Humberto
        expect(cliente.nombre).not.toBe('Humb');
    });
    test('No tiene 500', () => {
        expect(cliente.balance).not.toBe(500);
    });
});