import { FormularioRegister } from "./formulario";
import { FormBuilder } from "@angular/forms";

describe('Formularios', () => {

    let componente:FormularioRegister;

    beforeEach ( ()=> {

        componente = new FormularioRegister( new FormBuilder() );
    });

    it('Debe crear un formulario con dos campos', () => {

        expect( componente.form.contains('email')  ).toBeTruthy();
        expect( componente.form.contains('password')  ).toBeTruthy();
    });

    it('Email obligatorio', () => {

        const control = componente.form.get ('email');

        control.setValue ('');

        expect( control.valid  ).toBeFalsy();

    });
    it('Email valido', () => {

        const control = componente.form.get ('email');

        control.setValue ('pepe@gmail.com');

        expect( control.valid  ).toBeTruthy();

    });



});
