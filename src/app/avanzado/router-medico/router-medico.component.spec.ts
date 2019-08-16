import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterMedicoComponent } from './router-medico.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, empty, Subject } from 'rxjs';


class FakeRouter {
  navigate( params ) {
    console.log (params);
  }
}

class FakeActivatedRoute {
  // params: Observable<any> = empty();

  private  subject = new Subject();

  //esto agrega una propiedad al observable
  push( valor ){
    this.subject.next ( valor );
  }

  //esto devuelve el params
  get params() {
    return this.subject.asObservable ();
  }


}


describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ],
      providers: [
        {
          provide: Router,
          useClass: FakeRouter
        },
        {
          provide: ActivatedRoute,
          useClass: FakeActivatedRoute
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('Debe de redireccionar a medico cuando se guarde', () => {

    const router = TestBed.get( Router );
    console.log (router);
    const spy = spyOn ( router, 'navigate' );

    component.guardarMedico ();

    expect( spy ).toHaveBeenCalledWith ( ['medico','123'] );
  });
  

  it('Debe de colocar el id=nuevo', () => {

    component = fixture.componentInstance;
    const activatedRoute: FakeActivatedRoute = TestBed.get (ActivatedRoute);

    activatedRoute.push ( { id: 'nuevo'});
    expect( component.id ).toBe('nuevo');
  });
  



});
