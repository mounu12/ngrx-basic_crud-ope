import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { employees } from 'src/app/state/selectors/employeelist.selector';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employeelist.model';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent implements OnInit {

  @Input() employee;
  // @Output() getSelectedEmployee = new EventEmitter(); // emit selected employee
  img= "https://www.scribblereview.com/upload/profile_image/default_boy.png"
  constructor(private router: Router) { }

  ngOnInit() {
  }
  /**
   *
   *
   * @param {*} employeeid
   * @memberof EmployeeCardComponent
   */
  emitEmployeeView(employee: Employee) {
    // this.getSelectedEmployee.emit(employee);
    this.router.navigate(['employee/view-employee',employee])
  }
  employeeEdit(employee: Employee) {
    this.router.navigate(['employee/edit-employee', employee]);
  }
}
