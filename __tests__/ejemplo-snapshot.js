// 6. Introducción a Snapshots

const cliente = {
    // Si tienes el snapshot de este objeto. Luego lo modificas por 
    // ej: nombre: 'Humberto 2' esto dará un error

    // ¿Cómo solucionar este problema? Se actualiza el snapshot con los
    // nuevos datos. En la Terminal escribir npm t -- -u
    // Otras formas no recomendadas: eliminar el archivo o modificar
    nombre: 'Humberto Valenzuela Actualizado',
    balance: 900000,
    tipo: 'Premium'
}

describe('Testing al Cliente', () => {
    test('Es Humberto', () => {
        expect(cliente).toMatchSnapshot();
        // Esto creará una carpeta __snapshot__
        // Los archivos dentro de __snapshot__ son manejados por JEST
    });
});