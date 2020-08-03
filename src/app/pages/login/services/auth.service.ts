import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { RootObject } from 'src/app/shared/models/root-object.model';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  loginUser(email: string, password: string): Observable<HttpResponse<RootObject<User>>> {
    return this.httpClient.post<RootObject<User>>(`${environment.APIURI}`,
      { email, password },
      { observe: 'response' }
    ).pipe(tap(
      response => {
        response.headers.get('Authorization');
        const token = response.headers.get('Authorization');
        localStorage.setItem('token', token);
      }
    ));
  }

  tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date()).getTime() / 1000)) >= expiry;
  }
}
