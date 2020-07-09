import { RootObjectList } from 'src/app/shared/models/root-object-list.model';
import { Component, OnInit, ViewChild, ElementRef, Input, EventEmitter, Output } from '@angular/core';
import { Map } from 'mapbox-gl/dist/mapbox-gl';
import { RootObject } from 'src/app/shared/models/root-object.model';
import { Guide } from '../../../models/guide';
import { Place } from 'src/app/shared/models/place.model';

@Component({
  selector: 'neo-guide-poi',
  templateUrl: './guide-poi.component.html',
  styleUrls: ['./guide-poi.component.scss']
})
export class GuidePoiComponent implements OnInit {
  @Input() guide: RootObject<Guide>;
  @Input() places: RootObjectList<Place>;
  @Output() deletePlacesGuide = new EventEmitter();
  constructor() { }
  ngOnInit() {

  }

 DeletePlacesGuide(place){
   console.log(place);
   this.deletePlacesGuide.emit(place);
 }

}
