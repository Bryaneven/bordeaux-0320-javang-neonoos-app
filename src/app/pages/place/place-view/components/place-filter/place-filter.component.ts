import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'neo-place-filter',
  templateUrl: './place-filter.component.html',
  styleUrls: ['./place-filter.component.scss']
})
export class PlaceFilterComponent implements OnInit {

  selectedCountry: String; 
  
  constructor() { }

  ngOnInit(): void {
  }

  onSearchPlaceChange(searchValue: string): void {

     
  }

  onSearchTownChange(searchValue: string): void {

     
  }

}
