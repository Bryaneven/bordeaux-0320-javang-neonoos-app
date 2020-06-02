import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'neo-guide-results',
  templateUrl: './guide-results.component.html',
  styleUrls: ['./guide-results.component.scss']
})
export class GuideResultsComponent implements OnInit {

  activities: any[] = [];

  constructor(/* private service: Service */) { }

  ngOnInit(): void {
    /*
    requete.findAll().subscribe(
      data => this.activities = data;
    )
    */
  }

}
