import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Place } from 'src/app/shared/models/place.model';
import { environment } from 'src/environments/environment';
import { RootObjectList } from 'src/app/shared/models/root-object-list.model';
import { Observable } from 'rxjs';
import { RootObject } from 'src/app/shared/models/root-object.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<RootObjectList<Place>> {
    return this.http.get<RootObjectList<Place>>(`${environment.APIURI}places`);
  }

  getById(id: number): Observable<RootObject<Place>>{
    return this.http.get<RootObject<Place>>(`${environment.APIURI}places/` + id);
  }

  getPlacesOfCountry(id: number): Observable<RootObjectList<Place>> {
    return this.http.get<RootObjectList<Place>>(`${environment.APIURI}countries/${id}/places`);
  }

  post(place: RootObject<Place>): Observable<RootObject<Place>> {
    return this.http.post<RootObject<Place>>(`${environment.APIURI}places`, place);
  }

  patch(place: RootObject<Place>, id: number): Observable<RootObject<Place>>{
    return this.http.patch<RootObject<Place>>(`${environment.APIURI}places/` + id, place)
    .pipe(map((placefrmsrv) => this.createInstance(placefrmsrv)));
  }

  createInstance(place: RootObject<Place>){
    return new RootObject<Place>(Place, 'places', place);
  }
}
