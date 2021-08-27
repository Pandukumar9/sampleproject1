import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactieformComponent } from './reactieform.component';

describe('ReactieformComponent', () => {
  let component: ReactieformComponent;
  let fixture: ComponentFixture<ReactieformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactieformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactieformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
