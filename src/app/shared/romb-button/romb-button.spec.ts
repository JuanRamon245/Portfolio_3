import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RombButton } from './romb-button';

describe('RombButton', () => {
  let component: RombButton;
  let fixture: ComponentFixture<RombButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RombButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RombButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
