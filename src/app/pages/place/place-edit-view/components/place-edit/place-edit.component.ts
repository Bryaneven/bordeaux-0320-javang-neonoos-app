import { Component, OnInit, Input } from '@angular/core';
import { RootObject } from 'src/app/shared/models/root-object.model';
import { Place } from 'src/app/shared/models/place.model';

@Component({
  selector: 'neo-place-edit',
  templateUrl: './place-edit.component.html',
  styleUrls: ['./place-edit.component.scss']
})
export class PlaceEditComponent implements OnInit {

  @Input() place?: RootObject<Place>;
  @Input() placeId: number;

  show = true;
  constructor() { }

  ngOnInit(): void {
  }

}
