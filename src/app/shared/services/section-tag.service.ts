import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SectionTagService {

  // tslint:disable-next-line: ban-types
  tmpDataSectionsTag: Object = {
    1: 'Water Sking',
    2: 'Wakeboarding-Canoeing'

  };




  constructor(private httpClient: HttpClient) { }

  getSectionTag() {
    return this.tmpDataSectionsTag;
  }
}
