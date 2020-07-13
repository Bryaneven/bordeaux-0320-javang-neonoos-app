import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'neo-starsbox',
  templateUrl: './starsbox.component.html',
  styleUrls: ['./starsbox.component.scss']
})
export class StarsboxComponent implements OnInit {

@Input() typeCheckbox: string;

  constructor() { }

  ngOnInit(): void {
  }

  checkstars($event) {
    const event = $event;
    console.log(event);
  }

}
