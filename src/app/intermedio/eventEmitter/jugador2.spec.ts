import { Jugador2 } from "./jugador2";


describe ('Jugador 2 emit', () => {

    let jugador: Jugador2;

    beforeEach ( ()=> {
        jugador = new Jugador2 ();

    })

    it('Debe emitir un evendo cuando recibe daño', () => {


        let nuevoHp = 0;

        jugador.hpCambia.subscribe ( hp => {

            nuevoHp = hp;



        } );

        jugador.recibeDanio(1000);

        expect ( nuevoHp ).toBe(0);
        
    });
    

    it('Debe emitir un evendo cuando recibe daño y sobrevivir', () => {


        let nuevoHp = 50;

        jugador.hpCambia.subscribe ( hp => {

            nuevoHp = hp;



        } );

        jugador.recibeDanio(50);

        expect ( nuevoHp ).toBe(50);
        
    });
    





})