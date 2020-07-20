import { Component, OnInit, ViewChild, ElementRef, Input, EventEmitter, Output } from '@angular/core';
import { PlaceService } from '../services/place/place.service';
import { RootObjectList } from 'src/app/shared/models/root-object-list.model';
import { Place } from 'src/app/shared/models/place.model';
import { X } from '@angular/cdk/keycodes';


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
      let searchStarsFilter = '';

      if (this.arrayPlaceFilter.length > 0 ) {
        for (let i = 0; this.arrayPlaceFilter.length > i; i++) {
          if (i === 0) {
            if (typeof this.arrayPlaceFilter[i].value === typeof 10) {
              searchStarsFilter += this.arrayPlaceFilter[i].value;
            } else {
              searchFilter += this.arrayPlaceFilter[i].key + '==*' + this.arrayPlaceFilter[i].value + '*';
            }
          } else {
            if (typeof this.arrayPlaceFilter[i].value === typeof 10) {
              if (searchStarsFilter.length > 0) {
                searchStarsFilter += ',' + this.arrayPlaceFilter[i].value;
              } else {
                searchStarsFilter += this.arrayPlaceFilter[i].value;
              }
            } else {
              searchFilter += ';' + this.arrayPlaceFilter[i].key + '==*' + this.arrayPlaceFilter[i].value + '*';
            }
          }
        }
      }

      if (searchStarsFilter && searchFilter) {
        searchFilter += ';genius_stars=in=(' + searchStarsFilter + ')';
      } else if (searchStarsFilter) {
        searchFilter += 'genius_stars=in=(' + searchStarsFilter + ')';
      }

      // console.log(searchFilter);
      this.placeService.getByfilters(searchFilter).subscribe((places) => {
        this.places = places;

        for (let x = 0; this.places.data.length > x; x++) {
          console.log(this.places.data[x].relationships.countries.data);
          for (let y = 0; this.places.data[x].relationships.countries.data.length > y; y++) {
              console.log(this.places.data[x].relationships.countries.data[y].id);
          }
        }





        // console.log(this.places);
      });
    } else {
      this.places = null;
    }
  }
}
