import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-personal-info',
  templateUrl: './employee-personal-info.component.html',
  styleUrls: ['./employee-personal-info.component.scss']
})
export class EmployeePersonalInfoComponent implements OnInit {
  @Input() employeeInfo;
  constructor() { }

  ngOnInit() {
  }

}
