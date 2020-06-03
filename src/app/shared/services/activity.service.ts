import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  tempDataActivitiesImg: string[] = [
    ('https://via.placeholder.com/150'),
    ('https://via.placeholder.com/150'),
    ('https://via.placeholder.com/150'),
    ('https://via.placeholder.com/150'),
    ('https://via.placeholder.com/150'),
    ('https://via.placeholder.com/150'),
    ('https://via.placeholder.com/150'),
    ('https://via.placeholder.com/150'),
    ('https://via.placeholder.com/150'),
    ('https://via.placeholder.com/150'),
    ('https://via.placeholder.com/150'),
    ('https://via.placeholder.com/150'),
    ('https://via.placeholder.com/150'),
    ('https://via.placeholder.com/150'),
    ('https://via.placeholder.com/150'),
    ('https://via.placeholder.com/150'),
    ('https://via.placeholder.com/150'),
  ]

  constructor(private httpClient: HttpClient) { }

  getImgActivites() {
    return this.tempDataActivitiesImg;
  }
}
