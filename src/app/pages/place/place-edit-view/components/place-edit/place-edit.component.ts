import { Component, OnInit, Input } from '@angular/core';
import { RootObject } from 'src/app/shared/models/root-object.model';
import { Place } from 'src/app/shared/models/place.model';
import { RootObjectList } from 'src/app/shared/models/root-object-list.model';
import { Country } from 'src/app/shared/models/country';

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

  show = true;
  constructor() { }

  ngOnInit(): void {

  }

  test() {
    console.log(this.country.data);

  }

  compareObjects(country1: any, country2: any) {
    return country1.id === country2.id;
  }
}
