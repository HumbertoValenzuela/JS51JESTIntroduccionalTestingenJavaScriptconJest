// 8. Testing al Proyecto de Citas - Agregar Cita
import Citas from '../js/classes/Citas';

describe('Probar la clase nueva de Citas', () => {

    // Utilizar la clase de Citas
    const citas = new Citas();
    // Para utilizar las fechas y sean iguales para agregar update delete. notar que cuando se agreguen
    // más casos se deberá actualizar npm test -- -u debido a id cambiará
    const id = Date.now();
    test('Agregar una nueva cita', () => {

        const citaObj = {
            id,
            mascota: 'java',
            propietario: 'Humberto',
            telefono: '1111',
            fecha: '03-12-2021',
            hora:'12:48',
            sintomas: 'Solo Duerme' 
        };

        //  citaObj.id = id; funciona

        // metodo que vamos a probar
        citas.agregarCita(citaObj);

        // Prueba
        expect(citas).toMatchSnapshot();

    });

    // 9. Testing al Proyecto de Citas - Actualizar y Eliminar
    test('Actualizar cita', () => {
        const citaActualizada = {
            id,
            mascota: 'java Nuevo Nombre',
            propietario: 'Humberto',
            telefono: '1111',
            fecha: '03-12-2021',
            hora:'12:48',
            sintomas: 'Solo Duerme' 
        };
        // Método que se utiliza para actualizar
        citas.editarCita(citaActualizada);
        expect(citas).toMatchSnapshot();
    });

    test('Eliminar Cita', () => {
        citas.eliminarCita(id);
        expect(citas).toMatchSnapshot();
    })
});