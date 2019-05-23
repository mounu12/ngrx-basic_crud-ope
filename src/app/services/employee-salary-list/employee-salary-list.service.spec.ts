import { TestBed } from '@angular/core/testing';

import { EmployeeSalaryListService } from './employee-salary-list.service';

describe('EmployeeSalaryListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeSalaryListService = TestBed.get(EmployeeSalaryListService);
    expect(service).toBeTruthy();
  });
});
