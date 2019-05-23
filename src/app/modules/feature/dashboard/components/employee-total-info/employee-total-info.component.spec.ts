import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTotalInfoComponent } from './employee-total-info.component';

describe('EmployeeTotalInfoComponent', () => {
  let component: EmployeeTotalInfoComponent;
  let fixture: ComponentFixture<EmployeeTotalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeTotalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTotalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
