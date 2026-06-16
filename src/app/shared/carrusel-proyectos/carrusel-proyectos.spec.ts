import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselProyectos } from './carrusel-proyectos';

describe('CarruselProyectos', () => {
  let component: CarruselProyectos;
  let fixture: ComponentFixture<CarruselProyectos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarruselProyectos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarruselProyectos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
