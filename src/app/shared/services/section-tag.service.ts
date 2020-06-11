import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hashtag } from '../models/hashtag';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SectionTagService {

  // tslint:disable-next-line: ban-types
  tmpDataSectionsTag = {
    1: 'Water Sking',
    2: 'Wakeboarding-Canoeing'

  };




  constructor(private httpClient: HttpClient) { }

  getSectionTag() {
    return this.tmpDataSectionsTag;
  }

  getAll(): Observable<Hashtag[]> {
    return this.httpClient.get<Hashtag[]>(`${environment.APIURI}hashtags`);
  }
}
