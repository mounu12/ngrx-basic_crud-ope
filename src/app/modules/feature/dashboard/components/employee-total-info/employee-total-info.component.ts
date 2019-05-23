import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-total-info',
  templateUrl: './employee-total-info.component.html',
  styleUrls: ['./employee-total-info.component.scss']
})
export class EmployeeTotalInfoComponent implements OnInit {
  @Input() employeeName;
  constructor() { }

  ngOnInit() {
  }

}
