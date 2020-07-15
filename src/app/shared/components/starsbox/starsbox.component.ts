import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'neo-starsbox',
  templateUrl: './starsbox.component.html',
  styleUrls: ['./starsbox.component.scss']
})
export class StarsboxComponent implements OnInit {

@Input() typeCheckbox: string;
@Output() starsboxEventEmitter = new EventEmitter<any>();
arrayChecks = [];

  constructor() { }

  ngOnInit(): void { }

  checkstars($event) {

    const valueElement = $event.target.value;
    const checked = $event.target.checked;

    if (checked === true) {
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

    console.log(this.arrayChecks);

    this.starsboxEventEmitter.emit(this.arrayChecks);
  }
}
