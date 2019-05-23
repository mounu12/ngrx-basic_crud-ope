import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { Employee } from 'src/app/models/employeelist.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee-form',
  templateUrl: './create-employee-form.component.html',
  styleUrls: ['./create-employee-form.component.scss']
})
export class CreateEmployeeFormComponent implements OnInit {
  employee: Employee;
  Prefix = ['Mr.','Ms','Mrs'];
  employeeListType: any[] = ['Permanent','Intern','Contract'];
  managersList = ['Reddy Raja','Pratap','Pedda Rajulu'];
  minDate = new Date(new Date().getFullYear()-60,new Date().getMonth(),1)
  maxDate = new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate());
    @Output() postEmployeeDetails = new EventEmitter(); // emit employee data
    @Input() editEmployee;
    // CreateEmployeeForm: FormGroup;
    CreateEmployeeForm = this.fb.group({
      prefix: ['', Validators.required],
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      employeeType: ['', Validators.required],
      dateOfJoining: ['', Validators.required],
      dateOfRelieving: [''],
      employeeRole: ['', Validators.required],
      department:  ['', Validators.required],
      reportingManager:  ['', Validators.required],
      email:  ['', Validators.required],
      addressLine:  ['', Validators.required],
      street:  ['', Validators.required],
      pincode:  ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      city:  ['', Validators.required],
      state:  ['', Validators.required],
      mobileNumber:  ['', Validators.compose([Validators.required, Validators.minLength(10)])],
      bankName:  [''],
      accountNumber: [''],
      branch: [''],
      ifsccode: [''],
      panNumber: ['',Validators.pattern],
      aadharNumber: ['',Validators.pattern],
      uanNumber: [''],
      
    });

  constructor(private fb: FormBuilder, private router: Router) {
    // this.createEmployee();
  }
  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(this.editEmployee);
    if (changes.editEmployee.firstChange == false) {
      this.setFormData();
    }
    
  }
  cancelEmployee() {
    this.router.navigateByUrl('/employee');
  }
  createEmployee() {
    let dateofjoining = this.CreateEmployeeForm.value.dateOfJoining.getMonth()+1 + '/' + this.CreateEmployeeForm.value.dateOfJoining.getDate() + '/' + this.CreateEmployeeForm.value.dateOfJoining.getFullYear(); 
    this.CreateEmployeeForm.value.dateOfJoining = dateofjoining;
  
    let dateofbirth =this.CreateEmployeeForm.value.dateOfBirth.getMonth()+1 + '/' + this.CreateEmployeeForm.value.dateOfBirth.getDate() + '/' + this.CreateEmployeeForm.value.dateOfBirth.getFullYear(); 
    this.CreateEmployeeForm.value.dateOfBirth = dateofbirth;
    if ( this.editEmployee) {
      const obj = this.CreateEmployeeForm.value;
      obj.employeeId =  this.editEmployee.employeeId
      this.postEmployeeDetails.emit(obj);
    } else {
      this.postEmployeeDetails.emit(this.CreateEmployeeForm.value);
    }
    
  }


  setFormData() {
    const dateOfBirthObj= new Date(this.editEmployee.dateOfBirth);
    this.editEmployee.dateOfBirth = dateOfBirthObj;
    const dateObj= new Date(this.editEmployee.dateOfJoining);
    this.editEmployee.dateOfJoining = dateObj;
     this.CreateEmployeeForm.setValue({
     prefix: this.editEmployee.prefix,
     firstName: this.editEmployee.firstName,
      middleName: this.editEmployee.middleName,
      lastName: this.editEmployee.lastName,
      dateOfBirth: this.editEmployee.dateOfBirth,
      employeeType: this.editEmployee.employeeType,
      dateOfJoining: this.editEmployee.dateOfJoining,
      dateOfRelieving: this.editEmployee.dateOfRelieving,
      employeeRole: this.editEmployee.employeeRole,
      department: this.editEmployee.department,
      reportingManager:  this.editEmployee.reportingManager,
      email:  this.editEmployee.email,
      addressLine: this.editEmployee.addressLine,
      street: this.editEmployee.street,
      pincode:  this.editEmployee.pincode,
      city: this.editEmployee.city,
      state: this.editEmployee.state,
      mobileNumber: this.editEmployee.mobileNumber,
      bankName:  this.editEmployee.bankName,
      accountNumber: this.editEmployee.accountNumber,
      branch: this.editEmployee.branch,
      ifsccode: this.editEmployee.ifsccode,
      panNumber: this.editEmployee.panNumber,
      aadharNumber: this.editEmployee.aadharNumber,
      uanNumber: this.editEmployee.uanNumber,
     
   })
  }

  get f() { return this.CreateEmployeeForm.controls; }
 
  // createEmployee(employee: Employee) {
  //   this.postEmployeeDetails.emit(employee);
  // }
}
