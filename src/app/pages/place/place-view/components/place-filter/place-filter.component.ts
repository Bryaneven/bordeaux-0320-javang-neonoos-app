import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Hashtag } from 'src/app/shared/models/hashtag';
import { RootObjectList } from 'src/app/shared/models/root-object-list.model';
import { HashtagService } from 'src/app/pages/guide/services/hashtag/hashtag.service';
import { PlaceService } from '../../../services/place/place.service';
import { RootObject } from 'src/app/shared/models/root-object.model';
import { Place } from 'src/app/shared/models/place.model';


@Component({
  selector: 'neo-place-filter',
  templateUrl: './place-filter.component.html',
  styleUrls: ['./place-filter.component.scss']
})
export class PlaceFilterComponent implements OnInit {

  @Output() searchFilterEventEmitter = new EventEmitter<any>();

  country: String;
  place: string;
  town: string;
  starsCheck = [false, false, false, false];
  arrayCheck = [];
  arrayCheckStars = [];
  arrayInputPlaceFilter = [];
  arrayPlaceFilter = [];

  placeById: RootObject<Place>;
  placeFilter: string;
  _inputPlaceFilter: string;

  radiusMin: number;
  radiusMax: number;
  radiusStep: number;
  radius: number;

  categories = ['Categorie 1', 'Categorie 2', 'Categorie 3', 'Categorie 4'];
  category: string;
  selected = new FormControl(0);

  hashtags: RootObjectList<Hashtag>;
  hashtagsSearch: RootObjectList<Hashtag>;
  arrayHashtags = [];

  message: string;

  constructor(private hashtagservice: HashtagService, private placeService: PlaceService) { }

  ngOnInit(): void { }

  onCountryChange(value: string): void {

  }


  onPlaceChange(value: string): void {
    this.showHashtags;
  }

  onTownChange(value: string): void {
    this.showHashtags;
  }

  onStarsChange(index: number){
    this.starsCheck[index] = !this.starsCheck[index];
    this.showHashtags;
  }

  onRadiusChange(value: string): void {
    this.clearHashtags;
  }

  onCategoryChange(value: number): void{
    console.log(value);
    if (value % 2 === 0){
      this.showHashtags();
    }else{
      this.clearHashtags();
    }
  }

  showHashtags() {
    this.hashtagservice.getAll().subscribe((hashtags) => {
    this.hashtags = hashtags;
    });
  }

  clearHashtags() {
    this.hashtags = null;
    this.arrayHashtags.length = 0;
  }

  checkbox($event: any, tag: Hashtag) {
    if ($event.target.checked === true) {
      this.arrayHashtags.push(tag);
    }
    if ($event.target.checked === false) {
      for (let i = 0; i < this.arrayHashtags.length; i++) {
        if (this.arrayHashtags[i].id === tag.id) {
          this.arrayHashtags.splice(i, 1);
        }
      }
    }
    // inisialise un nouveau tableau depuis tableau exitant :
    this.arrayHashtags = [...this.arrayHashtags];
    // Send CheckboxEvent

  }

  // Array of Star from Starbox component (Output on <neo-starsbox>).
  onStarsboxEvent(arrayChecks) {
    this.arrayCheckStars = arrayChecks;
    // console.log(this.arrayCheckStars);
  }

  onInputPlaceFilter(placeFilter: string): void {
    this.arrayInputPlaceFilter = [];
    this._inputPlaceFilter = placeFilter.replace(/[&\/\\#, +()$~%.'":;!*?<>{}]/gi, '_');
    const objPlaceFilter = new Object();
    objPlaceFilter['key'] = 'name';
    objPlaceFilter['value'] = this._inputPlaceFilter;
    this.arrayInputPlaceFilter.push(objPlaceFilter);
    // this.arrayInputPlaceFilter.unshift(objPlaceFilter);
    // console.log(this.arrayInputPlaceFilter);
  }

  clickSearchFilter() {
    this.arrayPlaceFilter = [];
    this.arrayPlaceFilter = [...this.arrayCheckStars, ...this.arrayInputPlaceFilter];
    // console.log(this.arrayPlaceFilter);
    this.searchFilterEventEmitter.emit(this.arrayPlaceFilter);
  }
}

