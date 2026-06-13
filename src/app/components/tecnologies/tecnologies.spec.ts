import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tecnologies } from './tecnologies';

describe('Tecnologies', () => {
  let component: Tecnologies;
  let fixture: ComponentFixture<Tecnologies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tecnologies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tecnologies);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
