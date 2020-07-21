import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ElideInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let headers;
    const token = localStorage.getItem('token');
    if (req.url !== 'https://api2.neonoos.com/api/login') {
      if (token) {
      headers = new HttpHeaders({
        'Content-Type': 'application/vnd.api+json',
        Authorization: localStorage.getItem('token')
      });

    } else {
      headers = new HttpHeaders({
        'Content-Type': 'application/vnd.api+json'
      });
    }
    const modified = req.clone({
      headers
    });

    return next.handle(modified);
  }
    return next.handle(req);
}

}
