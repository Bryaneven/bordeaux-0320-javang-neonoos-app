import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Place } from '../../models/place.model';
import { RootObject } from '../../models/root-object.model';

@Component({
  selector: 'neo-starsbox',
  templateUrl: './starsbox.component.html',
  styleUrls: ['./starsbox.component.scss']
})
export class StarsboxComponent implements OnInit {

@Input() typeCheckbox: string;
@Input() place?: RootObject<Place>;

@Output() starsboxEventEmitter = new EventEmitter<any>();

arrayChecks = [];
valueCheckPlace = [
  { id: 0, value: false },
  { id: 1, value: false },
  { id: 2, value: false },
  { id: 3, value: false },
];

  constructor() { }

  ngOnInit(): void { this.checkedValue();  }

  checkedValue() {

    if (this.place) {

       const valueStar = this.place.data.attributes.genius_stars;

       for (let i = 0; this.valueCheckPlace.length > i; i++ ) {
        if (valueStar === this.valueCheckPlace[i].id) {
          this.valueCheckPlace[i].value = true;
          this.arrayChecks.push(this.valueCheckPlace[i].id);
        }
      }
    }
  }

  checkstars($event) {

    const valueElement = parseInt($event.target.value);
    const checkedStar = $event.target.checked;

    if (checkedStar === true) {
      if (this.typeCheckbox === 'radio') {
          this.arrayChecks = [];
      }
      this.arrayChecks.push(valueElement);
    } else {
      for (let i = 0; i < this.arrayChecks.length; i++) {
        if (this.arrayChecks[i] === valueElement) {
          this.arrayChecks.splice(i, 1);
        }
      }
    }

    this.starsboxEventEmitter.emit(this.arrayChecks);
  }
}

// Insert starsbox component:

// parent.component.html

// if wiew Edit:
// - change typeCheckbox="checkbox" par typeCheckbox="radio"

// if not view Edit:
// - Remove ngIf and input [place]=placeById
//   (Attention: "placeById" attribute parent, return of the methode getplaceByID)

/*
  <neo-starsbox *ngIf="placeById"
    typeCheckbox="checkbox"
    (starsboxEventEmitter)="onStarsboxEvent($event)"
    [place]="placeById">
  </neo-starsbox>
*/

// parent.component.ts
// Array[Init] of Star from Starbox component (Output on <neo-starsbox>).


/*
  onStarsboxEvent(arrayChecks) {
    this.arrayCheckStars = arrayChecks;
  }
*/
