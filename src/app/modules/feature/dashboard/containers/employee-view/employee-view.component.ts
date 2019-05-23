import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employeelist.model';
import { AppState } from 'src/app/state/reducers';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { EmployeeListSelectedAction } from 'src/app/state/actions/employeelist.actions';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.scss']
})
export class EmployeeViewComponent implements OnInit {
  employeeId: any = {};
  employeesInfo: Employee;
  employees$ = this.appState.pipe(select((state: any) => state.employees));
  constructor(private appState: Store<AppState>, private route: ActivatedRoute) {
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
        this.employeesInfo = state.selectedEmployee;  // Assigning employees state to @input project
      }
    });
  }

}
