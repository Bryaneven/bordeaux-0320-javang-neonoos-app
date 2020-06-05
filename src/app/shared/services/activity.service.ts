import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private httpClient: HttpClient) { }

  DB_URL = 'https://bordeaux-java-0320-pj3-neonoos-api.javarover.wilders.dev/'; // + guides

  getImgActivites() {
    return this.httpClient.get<any>('http://localhost:8080/activities');
  }
}
