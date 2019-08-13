import { usuarioIngresado } from "./bools";

//las pruebas tienen dos partes
//describe() agrupa pruebas
//it()  es una prueba en particular

describe ('Pruebas de booleanos', ()=> {

    it ( 'devuelve si está logueado', ()=>{

        expect( usuarioIngresado() ).toBeTruthy();
    } );

})