import { obtenerRobots } from "./arreglos";

//las pruebas tienen dos partes
//describe() agrupa pruebas
//it()  es una prueba en particular

describe ('Pruebas de arreglos', ()=> {

    it ( 'debe retornar al menos 3 robots', ()=>{
        expect( obtenerRobots().length ).toBeGreaterThanOrEqual(3);
    } );

    it ( 'si estan megaman y ultron', ()=>{
        
        
        expect( obtenerRobots() ).toContain ('MegaMan');
        expect( obtenerRobots() ).toContain ('Ultron');

    } );


})