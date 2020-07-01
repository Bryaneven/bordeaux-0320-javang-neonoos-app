import { Component, OnInit } from '@angular/core';
import { Hashtag } from 'src/app/shared/models/hashtag';

@Component({
  selector: 'neo-guide-view',
  templateUrl: './guide-view.component.html',
  styleUrls: ['./guide-view.component.scss']
})

export class GuideViewComponent implements OnInit {

  hashtags: Hashtag[] = [];

  constructor() { }

  ngOnInit(): void {}

}
