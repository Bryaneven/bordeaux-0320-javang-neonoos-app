import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RootObject } from 'src/app/shared/models/root-object.model';
import { Hashtag } from 'src/app/shared/models/hashtag';
import { map } from 'rxjs/operators';
import { RootObjectList } from 'src/app/shared/models/root-object-list.model';

@Injectable({
  providedIn: 'root'
})
export class HashtagService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<RootObjectList<Hashtag>> {
    return this.httpClient.get<RootObjectList<Hashtag>>(`${environment.APIURI}hashtags`);
  }

  getById(): Observable<RootObject<Hashtag>>{
    return this.httpClient.get<RootObject<Hashtag>>(`${environment.APIURI}hashtags/` + 3);
  }

  getByName(name: string): Observable<RootObjectList<Hashtag>> {
    return this.httpClient.get<RootObjectList<Hashtag>>(`${environment.APIURI}hashtags?filter=name==*` + name + `*`);
   /*  .pipe(map((hashtags) => hashtags
    .map((hashtag) => this.createInstance(hashtag)))); */
  }

  post(hashtag: RootObject<Hashtag>): Observable<RootObject<Hashtag>> {
    return this.httpClient.post<RootObject<Hashtag>>(`${environment.APIURI}hashtag`, hashtag);
  }

  createInstance(hashtag: RootObject<Hashtag>){
    return new RootObject<Hashtag>(Hashtag, hashtag);
  }
}
