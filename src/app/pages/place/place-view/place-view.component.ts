import { Component, OnInit, ViewChild, ElementRef, Input, EventEmitter, Output } from '@angular/core';
import { PlaceService } from '../services/place/place.service';
import { RootObjectList } from 'src/app/shared/models/root-object-list.model';
import { Place } from 'src/app/shared/models/place.model';


@Component({
  selector: 'neo-place-view',
  templateUrl: './place-view.component.html',
  styleUrls: ['./place-view.component.scss']
})
export class PlaceViewComponent implements OnInit {

  @Input('rating') rating: number;
  @Input('starCount') starCount: number;

  @Output() places: RootObjectList<Place>;
  arrayPlaceFilter = [];

  constructor(private placeService: PlaceService) { }

  ngOnInit(): void { }

  onSearchFilterEventEmitter(arraySearch) {

    console.log(arraySearch);

    this.arrayPlaceFilter = [];

    this.arrayPlaceFilter = arraySearch.concat(this.arrayPlaceFilter);
    this.searchByFilter();
  }

  searchByFilter() {

    if (this.arrayPlaceFilter.length > 0) {

      let searchFilter = '';

      if (this.arrayPlaceFilter.length > 0 ) {
        for (let i = 0; this.arrayPlaceFilter.length > i; i++) {
          if (i === 0) {
            if (typeof this.arrayPlaceFilter[i].value === typeof 10) {
              searchFilter += this.arrayPlaceFilter[i].key + '==' + this.arrayPlaceFilter[i].value;
            } else {
              searchFilter += this.arrayPlaceFilter[i].key + '==*' + this.arrayPlaceFilter[i].value + '*';
            }
          } else {
            if (typeof this.arrayPlaceFilter[i].value === typeof 10) {
              searchFilter += ',' + this.arrayPlaceFilter[i].key + '==' + this.arrayPlaceFilter[i].value;
            } else {
              searchFilter += ';' + this.arrayPlaceFilter[i].key + '==*' + this.arrayPlaceFilter[i].value + '*';
            }
          }
        }
      }

      console.log(searchFilter);

      this.placeService.getByfilters(searchFilter).subscribe((places) => {
        this.places = places;
        // console.log(this.places);
      });
    } else {
      this.places = null;
    }
  }
}
