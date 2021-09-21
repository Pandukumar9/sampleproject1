import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReativeformingComponent } from './reativeforming.component';

describe('ReativeformingComponent', () => {
  let component: ReativeformingComponent;
  let fixture: ComponentFixture<ReativeformingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReativeformingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReativeformingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
