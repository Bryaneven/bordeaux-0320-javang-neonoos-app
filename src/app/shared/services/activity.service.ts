import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private httpClient: HttpClient) { }

  getImgActivites() {
    return this.httpClient.get<any>('http://localhost:8080/activities');
  }
}
