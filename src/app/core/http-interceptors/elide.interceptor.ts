import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ElideInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const modified = req.clone({
      headers: new HttpHeaders({
        'Content-Type': 'application/vnd.api+json',
        // 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU5NDczMDkwMn0.le_DqzsoK1QgmRTSPEls9cyRpg7XNSbTURHbdNtazDnIich6G-zwq1darmF8va38mlNvQAPuDZUmdW9dXrmSUQ'
      })
    });
    return next.handle(modified);

  }

}
