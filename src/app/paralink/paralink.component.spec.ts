import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParalinkComponent } from './paralink.component';

describe('ParalinkComponent', () => {
  let component: ParalinkComponent;
  let fixture: ComponentFixture<ParalinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParalinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParalinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
