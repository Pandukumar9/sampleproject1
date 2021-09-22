import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventsubmitComponent } from './preventsubmit.component';

describe('PreventsubmitComponent', () => {
  let component: PreventsubmitComponent;
  let fixture: ComponentFixture<PreventsubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreventsubmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventsubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
