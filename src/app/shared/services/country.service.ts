import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { RootObjectList } from '../models/root-object-list.model';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient: HttpClient) { }

  getCountries(): Observable<RootObjectList<Country>> {
    return this.httpClient.get<RootObjectList<Country>>(`${environment.APIURI}countries`);
  }
}
