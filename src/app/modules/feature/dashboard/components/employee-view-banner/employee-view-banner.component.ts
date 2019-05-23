import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-view-banner',
  templateUrl: './employee-view-banner.component.html',
  styleUrls: ['./employee-view-banner.component.scss']
})
export class EmployeeViewBannerComponent implements OnInit {
@Input() employeeName;
@Input() editEmployee;
  constructor() { }

  ngOnInit() {
  }

}
