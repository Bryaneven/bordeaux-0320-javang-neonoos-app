import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Place } from '../../../shared/models/place'
import { RootObject } from 'src/app/shared/models/root-object.model';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<RootObject<Place>[]> {
    return this.http.get<RootObject<Place>[]>(`${environment.APIURI}Places`).pipe(
        map((Places) => Places.map(
                            (Place) => this.createInstance(Place)
                                  )
            )
    );
  }

  getById(id: number): Observable<RootObject<Place>>{
    return this.http.get<RootObject<Place>>(`${environment.APIURI}Places/` + id).pipe(map((Place) => this.createInstance(Place)));
  }

  post(Place: RootObject<Place>): Observable<RootObject<Place>>{
    return this.http.post<RootObject<Place>>(`${environment.APIURI}Places`, Place).pipe(map((Placefrmsrv) => this.createInstance(Placefrmsrv)));
  }

  patch(Place: RootObject<Place>, id: number): Observable<RootObject<Place>>{
    return this.http.patch<RootObject<Place>>(`${environment.APIURI}Places/` + id, Place).pipe(map((Placefrmsrv) => this.createInstance(Placefrmsrv)));
  }

  delete(id: number): Observable<void>{
    return this.http.delete<void>(`${environment.APIURI}Places/` + id);
  }

  createInstance(place: RootObject<Place>){
    return new RootObject<Place>(Place, place);
  }
}
