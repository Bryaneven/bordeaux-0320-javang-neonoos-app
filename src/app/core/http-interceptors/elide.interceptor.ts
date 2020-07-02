import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Elide } from 'src/app/shared/models/elide'

@Injectable()
export class ElideInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const modified = req.clone({
      headers: new HttpHeaders({
        'Content-Type': 'application/vnd.api+json',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU5NDQ3OTY2NX0.g-McTRdIlGwa1TTLO8XAWUoBEZ6Z3f0Iz6BBimCNpp0Fb0bYpSxFfZ1lK3m-3OFUgXdVar6qcpHlKCSUhBeVfQ'
      })
    });
    return next.handle(modified);

  }

}
