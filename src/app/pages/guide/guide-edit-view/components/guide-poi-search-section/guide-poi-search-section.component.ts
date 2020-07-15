import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'neo-guide-poi-search-section',
  templateUrl: './guide-poi-search-section.component.html',
  styleUrls: ['./guide-poi-search-section.component.scss']
})
export class GuidePoiSearchSectionComponent implements OnInit {
country: any;
rayon: any;
  constructor() { }

  ngOnInit(): void {
  }
  onStarsboxEvent(event){}
}
