import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { Observable, from, empty, throwError  } from 'rxjs';



describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService ( null );

    beforeEach( () => {
        componente = new MedicosComponent ( servicio );
        
    });

    it('Init debe de cargar los medicos', () => {
        spyOn ( servicio, 'getMedicos' ).and.callFake ( () => {
            return from ( [ ['medico1', 'medico2', 'medico3']    ] );
        });
        componente.ngOnInit();
        expect( componente.medicos.length ).toBeGreaterThan(0);
    });

    it('Debe agregar un nuevo medico', () => {

        const medico = {
            id: 1,
            nombre:"juan"
        };

        //esto llama al servivio y simula que retorna un medico
        spyOn ( servicio, 'agregarMedico' ).and.returnValue ( from ( [  medico ]) );

        componente.agregarMedico();
        expect( componente.medicos.indexOf (medico) ).toBeGreaterThanOrEqual(0);
    });

    it('Si falla la adicion, errmessage va a tener un mensaje', () => {

        //esto llama al servivio y simula que retorna un medico
        const miError ="no se pudo agregar el medico";

        spyOn ( servicio, 'agregarMedico' ).and.returnValue ( throwError (miError)  );

        componente.agregarMedico();
        expect( componente.mensajeError ).toBe (miError);
    });

    it('Prueba de confirmacion de un usuario', () => {

        spyOn ( window, 'confirm').and.returnValue (true); //esto es para simular el ok en la pantalla de confirmar

        const espia = spyOn ( servicio, 'borrarMedico' ).and
            .returnValue (
                empty()
            )

        componente.borrarMedico('1');
        expect( espia ).toHaveBeenCalledWith('1');
    });

    it('No debe llamar al servidor para borrar', () => {

        spyOn ( window, 'confirm').and.returnValue (false); //esto es para simular el ok en la pantalla de confirmar

        const espia = spyOn ( servicio, 'borrarMedico' ).and
            .returnValue (
                empty()
            )

        componente.borrarMedico('1');
        expect( espia ).not.toHaveBeenCalledWith('1');
    });








});
