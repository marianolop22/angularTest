import { incremental } from "./numeros";

//las pruebas tienen dos partes
//describe() agrupa pruebas
//it()  es una prueba en particular

describe ('Pruebas de numeros', ()=> {

    it ( 'retornar 100 y envio > 100', ()=>{
        const response = incremental (300);
        expect(response).toBe(100);
    } );

    it ( 'retornar numero mas 1', ()=>{
        
        const response = incremental (50);
        expect(response).toBe(51);
    } );





})