import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { env } from 'process';
import { RootObject } from '../models/root-object.model';
import { Picture } from '../models/picture.model';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private httpClient: HttpClient) { }

  getPicturesByPlace(id: number) {
    return this.httpClient.get<any>(`${environment.APIURI}places/${id}/relationships/pictures`);
  }

  getPictureById(id: number) {
    return this.httpClient.get(`${environment.APIURI}pictures/${id}`);
  }

  postPictures(picture: RootObject<Picture>) {
    return this.httpClient.post(`${environment.APIURI}pictures/upload`, picture);
  }
}
