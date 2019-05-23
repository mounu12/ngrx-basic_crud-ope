import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from 'src/app/models/employeelist.model';

@Component({
  selector: 'app-employee-card-list',
  templateUrl: './employee-card-list.component.html',
  styleUrls: ['./employee-card-list.component.scss']
})
export class EmployeeCardListComponent implements OnInit {
  @Input() employeeList;
  // @Output() SelectedEmployeedata = new EventEmitter();
  constructor() { }

  ngOnInit() {
    // console.log(this.employeeList)
  }
  // selectedEmployee(employee) {
  // this.SelectedEmployeedata.emit(employee);
  // }
}
