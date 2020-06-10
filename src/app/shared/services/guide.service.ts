import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Guide } from '../models/guide';

@Injectable({
  providedIn: 'root'
})
export class GuideService {
 guideUrl = 'https://bordeaux-java-0320-pj3-neonoos-api.javarover.wilders.dev/guides/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Guide[]> {
    return this.http.get<Guide[]>(this.guideUrl).pipe(map((guides) => guides.map((guide) => this.createInstance(guide))));
  }
  getById(id: number): Observable<Guide>{
    return this.http.get<Guide>(this.guideUrl + id).pipe(map((guide) => this.createInstance(guide)));
  }

  post(guide): Observable<Guide>{
    return this.http.post<Guide>(this.guideUrl, guide).pipe(map((guidefrmsrv) => this.createInstance(guidefrmsrv)));
  }
  patch(guide, id: number): Observable<Guide>{
    return this.http.patch<Guide>(this.guideUrl + id, guide).pipe(map((guidefrmsrv) => this.createInstance(guidefrmsrv)));
  }

  delete(id: number): Observable<Guide>{
    return this.http.delete<Guide>(this.guideUrl + id);
  }
  createInstance(guide: Guide){
    return new Guide(guide);
  }
}
