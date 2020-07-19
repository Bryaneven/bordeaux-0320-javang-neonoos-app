import { Component, OnInit, Input } from '@angular/core';
import { RootObjectList } from 'src/app/shared/models/root-object-list.model';
import { Place } from 'src/app/shared/models/place.model';

@Component({
  selector: 'neo-place-results',
  templateUrl: './place-results.component.html',
  styleUrls: ['./place-results.component.scss']
})
export class PlaceResultsComponent implements OnInit {

  @Input() places: RootObjectList<Place>;

  constructor() { }

  ngOnInit(): void {
  }

}
