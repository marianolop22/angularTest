import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe de mostrar la leyenda y progreso en el h3', () => {
        component.leyenda = 'Progreso de carga';
        fixture.detectChanges();
        const elem: HTMLElement = fixture.debugElement.query (By.css('h3') ).nativeElement;//by sirve para buscar css, directivas, id, etc
        expect ( elem.innerHTML ).toContain ( 'Progreso de carga' );
    });

    it('Debe mostrar en el input el valor del progreso', () => {

        component.cambiarValor (5);
        fixture.detectChanges();

        fixture.whenStable().then ( ()=> {
            const input:HTMLInputElement = fixture.debugElement.query (By.css('input') ).nativeElement;//by sirve para buscar css, directivas, id, etc
            expect( input.value ).toBe( '55' );
        });
    });
    
    it('Debe inrementar / decrementar en 5', () => {

        const botones = fixture.debugElement.queryAll (By.css('.btn-primary'));//by sirve para buscar css, directivas, id, etc

        botones[0].triggerEventHandler ('click', null);
        expect ( component.progreso ).toBe (45);

        botones[1].triggerEventHandler ('click', null);
        expect ( component.progreso ).toBe (50);

    });

    it('Debe bajar el progreso al apretar boton', () => {

        const botones = fixture.debugElement.queryAll (By.css('.btn-primary'));//by sirve para buscar css, directivas, id, etc

        botones[0].triggerEventHandler ('click', null);

        fixture.detectChanges();
        const elem: HTMLElement = fixture.debugElement.query (By.css('h3') ).nativeElement;//by sirve para buscar css, directivas, id, etc

        console.log (elem);
        expect ( elem.innerHTML ).toContain ( '45' );

    });


});
