import { MedicoComponent } from "./medico.component";

import { TestBed, ComponentFixture } from "@angular/core/testing"; //esto es para que se pueda crear el componente y testearlo
import { MedicoService } from './medico.service';
import { HttpClientModule } from '@angular/common/http';

describe('Medico component', () => {

    let componente: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach( () => {

        TestBed.configureTestingModule ( {
            declarations: [
                MedicoComponent
            ],
            providers:[
                MedicoService
            ],
            imports:[
                HttpClientModule
            ]
        });

        //esto para tener acceso al html, dom, etc
        fixture = TestBed.createComponent( MedicoComponent ); //esto crea el componente para trabajarlo y devuelve un fixture
        componente = fixture.componentInstance;

    });


    it('Debe crearse el componente', () => {
        expect ( componente ).toBeTruthy();
    });

    it('Debe retornar el nombre', () => {
        expect ( componente.saludarMedico('Mariano') ).toContain ('Mariano');
    });



});
