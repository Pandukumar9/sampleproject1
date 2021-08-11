import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamiccolorComponent } from './dynamiccolor.component';

describe('DynamiccolorComponent', () => {
  let component: DynamiccolorComponent;
  let fixture: ComponentFixture<DynamiccolorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamiccolorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamiccolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
