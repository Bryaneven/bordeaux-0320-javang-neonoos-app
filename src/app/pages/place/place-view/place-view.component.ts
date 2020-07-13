import { RootObjectList } from 'src/app/shared/models/root-object-list.model';
import { Component, OnInit, ViewChild, ElementRef, Input, EventEmitter, Output } from '@angular/core';
import { Map } from 'mapbox-gl/dist/mapbox-gl';
import { RootObject } from 'src/app/shared/models/root-object.model';

import { Place } from 'src/app/shared/models/place.model';

@Component({
  selector: 'neo-place-view',
  templateUrl: './place-view.component.html',
  styleUrls: ['./place-view.component.scss']
})
export class PlaceViewComponent implements OnInit {
  @Input('rating') rating: number;  
  @Input('starCount') starCount: number; 
  constructor() { }

  ngOnInit(): void {
     
  }

}
