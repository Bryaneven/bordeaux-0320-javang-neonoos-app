import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/shared/services/activity.service';

@Component({
  selector: 'neo-guide-results',
  templateUrl: './guide-results.component.html',
  styleUrls: ['./guide-results.component.scss']
})
export class GuideResultsComponent implements OnInit {

  activities: any[] = [
    ('https://via.placeholder.com/150'),
    ('https://via.placeholder.com/150'),
    ('https://via.placeholder.com/150'),
    ('https://via.placeholder.com/150'),
    ('https://via.placeholder.com/150'),
    ('https://via.placeholder.com/150'),
    ('https://via.placeholder.com/150'),
    ('https://via.placeholder.com/150'),
    ('https://via.placeholder.com/150'),
    ('https://via.placeholder.com/150'),
    ('https://via.placeholder.com/150'),
    ('https://via.placeholder.com/150'),
    ('https://via.placeholder.com/150'),
    ('https://via.placeholder.com/150'),
    ('https://via.placeholder.com/150'),
    ('https://via.placeholder.com/150'),
    ('https://via.placeholder.com/150'),
  ];

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
  }

}
