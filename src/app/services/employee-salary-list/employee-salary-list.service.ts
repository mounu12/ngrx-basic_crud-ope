import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { salaryModel } from 'src/app/models/salary.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeSalaryListService {

  constructor(private http: HttpClient) { }

  loadSalaryList(): Observable<salaryModel[]> {
    return this.http.get<any>(environment.api+`ctc`)
    .pipe(map(data => {
      return data;
    }));
  }
}
