import { Injectable, Injector } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpHeaders,
    HttpResponse,
    HttpErrorResponse
  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class  AuthorizationInterceptor implements HttpInterceptor {
  constructor() {
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const loginData: any = localStorage.getItem('token');
    if (loginData) {
      const authdata: any = localStorage.getItem('token');
      request = request.clone({ headers: request.headers.set('Authorization','Bearer ' + authdata) });
    }
   // Clone the request to add the new header

   return next.handle(request);

  }
}
