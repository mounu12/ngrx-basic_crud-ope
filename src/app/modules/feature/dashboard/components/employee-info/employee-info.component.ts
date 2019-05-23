import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.scss']
})
export class EmployeeInfoComponent implements OnInit {
  @Input() employeeInfo;
  img= "https://www.scribblereview.com/upload/profile_image/default_boy.png"
  constructor() { }

  ngOnInit() {
  }

}
