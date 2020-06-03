import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/shared/services/activity.service';

@Component({
  selector: 'neo-guide-results',
  templateUrl: './guide-results.component.html',
  styleUrls: ['./guide-results.component.scss']
})
export class GuideResultsComponent implements OnInit {

  activities: any[] = [];

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.activities = this.activityService.getImgActivites();
  }

}
