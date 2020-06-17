import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Elide } from 'src/app/shared/models/elide'

@Injectable()
export class ElideInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const modified = req.clone({setHeaders: { "Content-Type": "application/vnd.api+json" }});

    return next.handle(modified)
    // .pipe(
    //   map((event: HttpEvent<any>) => {
    //     if (event instanceof HttpResponse) {
    //       return event.clone({
    //         body: this.elideFormat(event.body)
    //       });
    //     }
    //     return event
    //   })
    // );
  }

  // private elideFormat(body: Elide) {
  //   const newBody = body.data.attributes;
  //   return newBody;
  // }
}
