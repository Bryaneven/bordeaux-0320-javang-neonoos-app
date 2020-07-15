import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Hashtag } from 'src/app/shared/models/hashtag';
import { RootObjectList } from 'src/app/shared/models/root-object-list.model';
import { HashtagService } from 'src/app/pages/guide/services/hashtag/hashtag.service';
import { logging } from 'protractor';

@Component({
  selector: 'neo-place-filter',
  templateUrl: './place-filter.component.html',
  styleUrls: ['./place-filter.component.scss']
})
export class PlaceFilterComponent implements OnInit {

  country: String;
  place: string;
  town: string
  starsCheck = [false, false, false, false];
  arrayCheck = [];

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

  constructor(private hashtagservice: HashtagService) { }

  ngOnInit(): void {
    console.log(this.arrayCheck);
  }

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
    console.log(value)
    if (value%2===0){
      this.showHashtags();
    }else{
      this.clearHashtags();
    }
  }

  showHashtags() {
    this.hashtagservice.getAll().subscribe((hashtags) => {
    this.hashtags = hashtags;
    console.log('showwww')
    })
  }

  clearHashtags() {
    this.hashtags = null;
    this.arrayHashtags.length = 0;
    console.log('clearrrrrrrr')
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

  onStarsboxEvent(arrayChecks) {
    console.log(arrayChecks);
  }
}
