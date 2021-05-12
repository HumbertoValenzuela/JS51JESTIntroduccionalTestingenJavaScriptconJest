// 2. Probando Strings
const password = '123456';

describe('Pass no vacio y max 6 caracteres', () => {
    test('Pass 6 caracteres', () =>{
        expect( password).toHaveLength(6);
    });

    test('Pass no vacio', () => {
        // Se espera que password, No tiene una extensión de cero
        expect(password).not.toHaveLength(0);
    })
});

