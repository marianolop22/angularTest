import { MedicoComponent } from "./medico.component";

import { TestBed, ComponentFixture } from "@angular/core/testing"; //esto es para que se pueda crear el component y testearlo
import { MedicoService } from './medico.service';
import { HttpClientModule } from '@angular/common/http';

describe('Medico component', () => {

    let component: MedicoComponent;
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
        fixture = TestBed.createComponent( MedicoComponent ); //esto crea el component para trabajarlo y devuelve un fixture
        component = fixture.componentInstance;

    });


    it('Debe crearse el component', () => {
        expect ( component ).toBeTruthy();
    });

    it('Debe retornar el nombre', () => {
        expect ( component.saludarMedico('Mariano') ).toContain ('Mariano');
    });



});
