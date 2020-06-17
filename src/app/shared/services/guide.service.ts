import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Guide } from '../models/guide';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GuideService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Guide[]> {
    return this.http.get<Guide[]>(`${environment.APIURI}guides`).pipe(map((guides) => guides.map((guide) => this.createInstance(guide))));
  }
  getById(id: number): Observable<Guide>{
    return this.http.get<Guide>(`${environment.APIURI}api/v1/guides/` + id).pipe(map((guide) => this.createInstance(guide)));
  }

  post(guide: Guide): Observable<Guide>{
    return this.http.post<Guide>(`${environment.APIURI}/api/v1/guides`, guide).pipe(map((guidefrmsrv) => this.createInstance(guidefrmsrv)));
  }
  patch(guide: Guide, id: number): Observable<Guide>{
    return this.http.patch<Guide>(`${environment.APIURI}api/v1/guides/` + id, guide).pipe(map((guidefrmsrv) => this.createInstance(guidefrmsrv)));
  }

  delete(id: number): Observable<Guide>{
    return this.http.delete<Guide>(`${environment.APIURI}guides/` + id);
  }

  createInstance(guide: Guide){
    return new Guide(guide);
  }
}
