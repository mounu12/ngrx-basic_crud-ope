import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employeelist.model';
import { AppState } from 'src/app/state/reducers';
import { Store, select } from '@ngrx/store';
import { AddEmployee, EmployeeListSelectedAction } from 'src/app/state/actions/employeelist.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  // employees: Employee;
  employeeId: any = {};
  employeesInfo: Employee;
  employees$ = this.appState.pipe(select((state: any) => state.employees));
  postEmployeeDetails: Employee
  constructor(private appState: Store<AppState>, private route: ActivatedRoute) 
  {
    this.route.params.subscribe( params => {
      if (params) {
        this.employeeId = params.id;
      }
    });
   }

 

  ngOnInit() {
    if(this.employeeId) {
      this.appState.dispatch(new EmployeeListSelectedAction(this.employeeId));
    }
    this.employees$.subscribe((state) => {
      if (state) {
        this.employeesInfo = state.selectedEmployee; // Assigning employees state to @input project
      }
    });
  }
  employeeObject(postEmployeeDetails: Employee): void{
    if(postEmployeeDetails){
      this.appState.dispatch(new AddEmployee(postEmployeeDetails));
    }
  }
}
