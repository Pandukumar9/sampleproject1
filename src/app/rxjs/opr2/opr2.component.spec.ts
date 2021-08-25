import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Opr2Component } from './opr2.component';

describe('Opr2Component', () => {
  let component: Opr2Component;
  let fixture: ComponentFixture<Opr2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Opr2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Opr2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
