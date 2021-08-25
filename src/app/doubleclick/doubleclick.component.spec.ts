import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleclickComponent } from './doubleclick.component';

describe('DoubleclickComponent', () => {
  let component: DoubleclickComponent;
  let fixture: ComponentFixture<DoubleclickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleclickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
