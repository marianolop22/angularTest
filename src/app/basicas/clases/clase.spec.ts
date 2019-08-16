import { Jugador } from "./clase";

//las pruebas tienen dos partes
//describe() agrupa pruebas
//it()  es una prueba en particular

describe ('Pruebas de clases', ()=> {

    let player = new Jugador();

    beforeAll( ()=> { 
        // console.log ('beforeAll');
    });
    beforeEach( ()=> { 
        player = new Jugador();
    });
    afterEach( ()=> { 
        // console.log ('afterEach');
    });
    afterAll( ()=> { 
        // console.log ('afterAll');
    });



    it ( '1. debe retornar menos hp si recibe daño', ()=>{
        // const player = new Jugador();
        expect( player.recibeDanio(20) ).toBe(80);
    } );
    

    it ( '2. debe retornar 50', ()=>{
        // const player = new Jugador();
        expect( player.recibeDanio(50) ).toBe(50);
    } );
    


    it ( '3. debe retornar 0 si tiene mucho daño', ()=>{

        // const player = new Jugador();
        expect( player.recibeDanio(200) ).toBe(0);
    } );



})