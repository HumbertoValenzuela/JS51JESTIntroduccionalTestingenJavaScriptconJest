// 7. Agregar Babel para realizar pruebas de funciones en otros archivos

//En archivo funciones.js tiene al final una función suma
// Cuando aparece Test suite failed to run. unexpected token. SyntaxError: Cannot use import statement outside a module Es por un archivo
// Esto pasa porque import no existe en node, por tanto jest no lo conoce
import { suma } from '../js/funciones.js';

// Como solución es Babel: Podrás ocupar sintaxis nueva de JS
// Y Babel realizará una versión transpilada (una versión anterior)
// Crear un archivo .babelrc
// En la terminal npm i --save-dev @babel/preset-env
// En el archivo de babel se indica que soporte import
// con esto quedaría solucionado
describe('Suma de 2 numeros', () =>{
    test('Sumar 10 y 20 = 30', () => {
        expect(suma(10,20)).toBe(30)
    })
});