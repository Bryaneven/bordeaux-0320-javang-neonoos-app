import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private httpClient: HttpClient) { }

  getPicturesByPlace(id: number) {
    return this.httpClient.get<any>(`${environment.APIURI}places/${id}/pictures`);
  }
}
