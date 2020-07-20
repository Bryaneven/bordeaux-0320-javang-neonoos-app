import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  loginUser(formData){
    const header = new HttpHeaders();
    header.set('Content-Type', 'multipart/form-data');
    return this.httpClient.post<any>('https://api2.neonoos.com/api/login',
      formData).pipe(tap(
        response => {
          const token = 'Bearer ' + response.access_token;
          localStorage.setItem('token', token);
        }
      ));
  }

tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date()).getTime() / 1000)) >= expiry;
  }
}
