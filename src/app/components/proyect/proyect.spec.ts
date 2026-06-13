import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyect } from './proyect';

describe('Proyect', () => {
  let component: Proyect;
  let fixture: ComponentFixture<Proyect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Proyect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Proyect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
