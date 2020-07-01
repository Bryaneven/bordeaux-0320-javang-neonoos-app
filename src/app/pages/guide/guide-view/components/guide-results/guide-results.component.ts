import { Component, OnInit, Input } from '@angular/core';
import { ActivityService } from 'src/app/shared/services/activity.service';
import { Hashtag } from 'src/app/shared/models/hashtag';

@Component({
  selector: 'neo-guide-results',
  templateUrl: './guide-results.component.html',
  styleUrls: ['./guide-results.component.scss']
})
export class GuideResultsComponent implements OnInit {

  private _hashtags: Hashtag[] = [];

  @Input()
  set hashtags(hashtags: Hashtag[]) {
    console.log(hashtags);
    this._hashtags = hashtags;
  }

  activities: any[] = [
    ('https://via.placeholder.com/150'),
    ('https://via.placeholder.com/150'),
    ('https://via.placeholder.com/150'),
  ];

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void { }
}
