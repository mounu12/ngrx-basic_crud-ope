import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Employee } from 'src/app/models/employeelist.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {

  constructor(private http: HttpClient) { }

  loadEmployeeList(payload): Observable<Employee[]> {
   
    return this.http.post<any>(environment.api+`employee/criteria`, payload.payload )
    .pipe(map(data => {
      return data;
    }));
  }

  getSelectedEmployee(payload): Observable<Employee>  {
    return this.http.get<any>(environment.api+'employee/'+ payload.payload)
    .pipe(map(data => {
      return data;
    }));
  }

  addEmployee(employee): Observable<Employee> {
    return this.http.post<any>(environment.api + 'employee', employee.payload)
    .pipe(map(data => {
      return data;
    }));
    
  }
}
