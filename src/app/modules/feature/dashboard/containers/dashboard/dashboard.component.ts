import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/reducers';
import { Employee } from 'src/app/models/employeelist.model';
import { EmployeeLoad, EmployeeListSelectedAction } from 'src/app/state/actions/employeelist.actions';
import { constants } from 'src/app/common/constants';
import { Router } from '@angular/router';

export interface employeePagiNation {
  pageNumber: number; 
  pageSize: number;
  sortBy: string;
  sortOrder: string;
  searchCriteria: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  employees: Array<Employee> = [];
  employees$ = this.appState.pipe(select((state: any) => state.employees));
  constructor(private appState: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.loadEmployeeList();
    this.employees$.subscribe((state) => {
      if (state) {
        this.employees = state.employee.employeeList; // Assigning employees state to @input project
      }
    });
  }

  /**
   *
   * @param {Array<Employee>} employee - all employees data
   * @memberof DashboardComponent
   */
  loadEmployeeList(): void {
      var empObj:employeePagiNation = {
        pageNumber : constants.pageNumber,
        pageSize : constants.pageSize,
        sortBy : "firstName",
        sortOrder: "asc",
        searchCriteria: ""
      }
      this.appState.dispatch(new EmployeeLoad(empObj));
  }
  // getSingleEmployee(employee: Employee): void {
  //   if (employee) {
     
  //     this.router.navigate(['employee/view-employee',employee.employeeId])
  //   }
  // }
}
