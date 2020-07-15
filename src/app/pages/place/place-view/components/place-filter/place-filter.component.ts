import { Component, OnInit } from '@angular/core';
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

  country: String;
  place: string;
  town: string;
  starsCheck = [false, false, false, false];
  arrayCheck = [];
<<<<<<< HEAD
  arrayCheckStars = [];

  placeById: RootObject<Place>;
=======
  isNonGenius: boolean;
>>>>>>> place-filter ad

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

  ngOnInit(): void {

    /*
    // Testing with getById to starbox (Insput on <neo-starsbox> )
    this.placeService.getById(1).subscribe((place) => {
      this.placeById = place;
    });
     */

  }

  onCountryChange(value: string): void {
  }


  onPlaceChange(value: string): void {
    this.showHashtags;
  }

  onTownChange(value: string): void {
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

  onIsNonGeniusChange(value:boolean): void{
    console.log(this.isNonGenius)
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
  }
}
