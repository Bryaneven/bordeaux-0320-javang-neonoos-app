import { Component, OnInit } from '@angular/core';
import { Hashtag } from 'src/app/shared/models/hashtag';
import { GuideService } from '../services/guide/guide.service';
import { Guide } from '../models/guide';
import { RootObjectList } from 'src/app/shared/models/root-object-list.model';

@Component({
  selector: 'neo-guide-view',
  templateUrl: './guide-view.component.html',
  styleUrls: ['./guide-view.component.scss']
})

export class GuideViewComponent implements OnInit {

  hashtags: Hashtag[] = [];
  allGuides?: RootObjectList<Guide>;

  constructor(private guideService: GuideService) { }

  ngOnInit(): void { }

  getAllGuides(showAllGuides) {

    if (showAllGuides === true) {
      this.guideService.getAllGuides().subscribe((guides) => {
      this.allGuides = guides;
      });
    } else {
      this.allGuides = null;
    }
  }
}
