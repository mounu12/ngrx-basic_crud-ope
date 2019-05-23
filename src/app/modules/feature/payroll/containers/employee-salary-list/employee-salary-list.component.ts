import { Component, OnInit } from '@angular/core';
import { salaryModel } from 'src/app/models/salary.model';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/reducers';
import { SalaryListLoad } from 'src/app/state/actions/salarylist.action';

@Component({
  selector: 'app-employee-salary-list',
  templateUrl: './employee-salary-list.component.html',
  styleUrls: ['./employee-salary-list.component.scss']
})
export class EmployeeSalaryListComponent implements OnInit {
   salaryList: Array<salaryModel> = [];
   salaries$ = this.appState.pipe(select((state: any) => state.salary));
  constructor(private appState: Store<AppState>) { }

  ngOnInit() : void{
    this.loadSalaryList();
    this.salaries$.subscribe((state) => {
      if (state) {
        this.salaryList = state.salary; // Assigning salaries state to @input project
      }
    });
    console.log(this.salaryList);
  }
  loadSalaryList(): void {
    this.appState.dispatch(new SalaryListLoad());
  }
}
