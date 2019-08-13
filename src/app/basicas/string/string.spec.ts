import { message } from "./string";

//las pruebas tienen dos partes
//describe() agrupa pruebas
//it()  es una prueba en particular

describe ('Pruebas de strings', ()=> {

    it ( 'debe regresar un string', ()=>{
        const response = message ('mariano');
        expect( typeof response ).toBe ('string');
    } );

    it ( 'debe de retornar un saludo con el nombre enviado', ()=>{
        const nombre = 'mariano'
        const response = message (nombre);


        expect( response ).toContain ( nombre );
    } );




})