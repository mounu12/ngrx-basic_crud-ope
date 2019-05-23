import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSalaryBannerComponent } from './employee-salary-banner.component';

describe('EmployeeSalaryBannerComponent', () => {
  let component: EmployeeSalaryBannerComponent;
  let fixture: ComponentFixture<EmployeeSalaryBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeSalaryBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSalaryBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
