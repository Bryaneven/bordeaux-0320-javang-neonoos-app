import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RootObject } from 'src/app/shared/models/root-object.model';
import { Hashtag } from 'src/app/shared/models/hashtag';
import { RootObjectList } from 'src/app/shared/models/root-object-list.model';
import { Guide } from '../../models/guide';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HashtagService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<RootObjectList<Hashtag>> {
    return this.httpClient.get<RootObjectList<Hashtag>>(`${environment.APIURI}hashtags`);
  }

  getById(id: number): Observable<RootObject<Hashtag>>{
    return this.httpClient.get<RootObject<Hashtag>>(`${environment.APIURI}hashtags/` + id);
  }

  getByName(name: string): Observable<RootObjectList<Hashtag>> {
    return this.httpClient.get<RootObjectList<Hashtag>>(`${environment.APIURI}hashtags?filter=name==*${name}*`);
  }

  getGuidesByHashtag(id: number): Observable<RootObjectList<Guide>> {
    return this.httpClient.get<RootObjectList<Guide>>(`${environment.APIURI}hashtags/${id}/guides`);
  }

  post(hashtag: RootObject<Hashtag>): Observable<RootObject<Hashtag>> {
    return this.httpClient.post<RootObject<Hashtag>>(`${environment.APIURI}hashtags`, hashtag);
  }

  patch(hashtag: RootObject<Hashtag>, id: number): Observable<RootObject<Hashtag>>{
    return this.httpClient.patch<RootObject<Hashtag>>(`${environment.APIURI}hashtags/` + id, hashtag)
    .pipe(map((hashtagfrmsrv) => this.createInstance(hashtagfrmsrv)));
  }

  createInstance(hashtag: RootObject<Hashtag>){
    return new RootObject<Hashtag>(Hashtag, 'hashtags', hashtag);
  }
}
