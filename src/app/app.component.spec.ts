import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from "@angular/router/testing";
import { By } from '@angular/platform-browser';
import { RouterOutlet, RouterLink, RouterLinkWithHref } from '@angular/router';
import { NavbarComponent } from './avanzado/navbar/navbar.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      schemas: [
        NO_ERRORS_SCHEMA //esto es para que no tenga en cuenta aquellos componentes que no conoce
      ]
    }).compileComponents();
  }));

  

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Debe tener un router-outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const debugElement = fixture.debugElement.query ( By.directive (RouterOutlet) );
    expect( debugElement ).not.toBeNull();
  });
  
  
  xit('Debe de tener un link a medicos', () => {

    const fixture = TestBed.createComponent(AppComponent);
    const debugElements = fixture.debugElement.queryAll ( By.directive (RouterLinkWithHref) );

    let existe = false;

    for ( const elem of debugElements ) {
      if ( elem.attributes['routerLink'] === '/medicos') {
        existe = true;
        break
      }
    }
    expect( existe ).toBeTruthy();
  });
  




});
