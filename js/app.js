// 51. JEST - Introducción al Testing en JavaScript con Jest
// Crear un archivo package.json
// Jest funciona bajo nodejs, requiere del archivo package.json
// En el se pueden agregar algunos Script y dependencias

// Comienza
// click derecho agregar terminal 
// npm init - enter y llenar algúnos datos
// Crea un archivo llamado package.json

// Instalar JEST con dependencia. Existen dos tipos de dependencia
// Una de desarrollo y otro del Proyecto
// JEST se hará en desarrollo
// En la Terminal escribir npm install --save-dev jest
// Creará un archivo package-lock.json, guarda la referencia de las dependencias que estas instalando
// package.json se agrega JEST
// node_modules - bin tiene una serie de archivo de binarios que se
//  pueden ejecutar, tambien esta jest.
// Ir a package.json y en "test": "echo \"Error: no test specified\" && exit 1"
// cambiar por jest, esto hace que se ejecute el binario de jest
// Llamar el Script de jest. Ir a la terminal, escribir:
// npm run test, npm test, npm t los 3 hacen lo mismo

//Crear una carpeta con el nombre __tests__ Es un nombre que JEST puede
// comprender. Buscará los archivos de testing ahí.
// Otra forma: no crear la carpeta pero el archivo es archivo.test.js
// Crear un archivo dentro de la carpeta holaMundo.js
// Cada prueba comienza con test.  Ir al archivo holaMundo.js
import App from './classes/App.js';

const app = new App();