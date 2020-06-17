import { Component, OnInit } from '@angular/core';
import { GuideService } from '../services/guide/guide.service';

@Component({
  selector: 'neo-guide-edit-view',
  templateUrl: './guide-edit-view.component.html',
  styleUrls: ['./guide-edit-view.component.scss']
})
export class GuideEditViewComponent implements OnInit {

  constructor(private guideService: GuideService) { }

  ngOnInit(): void {
  }

}
