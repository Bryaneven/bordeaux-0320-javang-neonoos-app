import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RootObject } from 'src/app/shared/models/root-object.model';
import { Place } from 'src/app/shared/models/place.model';
import { RootObjectList } from 'src/app/shared/models/root-object-list.model';
import { Country } from 'src/app/shared/models/country';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'neo-place-edit',
  templateUrl: './place-edit.component.html',
  styleUrls: ['./place-edit.component.scss']
})
export class PlaceEditComponent implements OnInit {

  @Input() place?: RootObject<Place>;
  @Input() placeId: number;
  @Input() countries: RootObjectList<Country>;
  @Input() country: RootObjectList<Country>;

  countryToPatch: RootObject<Country>;

  @Output() patchPlace = new EventEmitter();
  @Output() patchCountryInPlace = new EventEmitter();

  show = true;
  constructor() { }

  ngOnInit(): void {

  }

  compareObjects(country1: any, country2: any) {
    return country1.id === country2.id;
  }

  save() {
    this.patchPlace.emit({ place: this.place, countryId: this.country.data[0].id});
  }

}
