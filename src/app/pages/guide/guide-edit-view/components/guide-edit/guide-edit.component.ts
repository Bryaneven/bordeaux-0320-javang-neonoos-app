import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'neo-guide-edit',
  templateUrl: './guide-edit.component.html',
  styleUrls: ['./guide-edit.component.scss']
})
export class GuideEditComponent implements OnInit {

  subscription = new Subscription();
  guideId: number;
  // guide: Guide;

  constructor(
    private route: ActivatedRoute,
    //service
  ) { }

  ngOnInit(): void {
    this.getRouteParam();
  }

  getRouteParam() {
    const routerSubscription = this.route.paramMap.subscribe(params => {
      if (params && params.get('id')) {
        const routeGuideId = Number(params.get('id'));
        this.guideId = routeGuideId;
        this.getOneGuide(this.guideId);
      }
    });
    this.subscription.add(routerSubscription);
  }

  getOneGuide(id: number) {
    console.log(id);
  }


}
