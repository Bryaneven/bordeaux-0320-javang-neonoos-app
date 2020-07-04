import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { RootObject } from 'src/app/shared/models/root-object.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  loginUser(email: string, password: string): Observable<RootObject<User>> {
    return this.httpClient.post<RootObject<User>>('http://localhost:8080/login', {email, password});
  }
}
