import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-salary',
  templateUrl: './employee-salary.component.html',
  styleUrls: ['./employee-salary.component.scss']
})
export class EmployeeSalaryComponent implements OnInit {
@Input() getSalaryList;
  constructor() { }

  ngOnInit() {
  }

}
