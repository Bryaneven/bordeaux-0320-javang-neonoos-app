import { Component, OnInit } from '@angular/core';
import { GuideService } from 'src/app/shared/services/guide.service';

@Component({
  selector: 'neo-guide-view',
  templateUrl: './guide-view.component.html',
  styleUrls: ['./guide-view.component.scss']
})
export class GuideViewComponent implements OnInit {

  constructor(private guideService: GuideService) { }

ngOnInit(): void {}

}
