import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialuiformComponent } from './materialuiform.component';

describe('MaterialuiformComponent', () => {
  let component: MaterialuiformComponent;
  let fixture: ComponentFixture<MaterialuiformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialuiformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialuiformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
