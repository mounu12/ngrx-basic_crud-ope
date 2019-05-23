import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSalaryTableComponent } from './employee-salary-table.component';

describe('EmployeeSalaryTableComponent', () => {
  let component: EmployeeSalaryTableComponent;
  let fixture: ComponentFixture<EmployeeSalaryTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeSalaryTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSalaryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
