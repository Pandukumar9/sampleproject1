import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CassixtemplateComponent } from './cassixtemplate.component';

describe('CassixtemplateComponent', () => {
  let component: CassixtemplateComponent;
  let fixture: ComponentFixture<CassixtemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CassixtemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CassixtemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
