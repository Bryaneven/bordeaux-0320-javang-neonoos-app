import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RootObjectList } from 'src/app/shared/models/root-object-list.model';
import { Trip } from 'src/app/shared/models/trip';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private httpClient: HttpClient) { }

  getTrips(): Observable<RootObjectList<Trip>> {
    return this.httpClient.get<RootObjectList<Trip>>(`${environment.APIURI}trips`);
  }

  getTripsByCountryId(countryId: number) {
    return this.httpClient.get<RootObjectList<Trip>>(`${environment.APIURI}countries/${countryId}/trips`);
  }

  getTripsByGuideId(guideId: number) {
    return this.httpClient.get<RootObjectList<Trip>>(`${environment.APIURI}guides/${guideId}/trips`);
  }
}
