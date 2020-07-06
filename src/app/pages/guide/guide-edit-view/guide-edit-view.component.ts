import { Component, OnInit } from '@angular/core';
import { GuideService } from '../services/guide/guide.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HashtagService } from '../services/hashtag/hashtag.service';
import { RootObject } from 'src/app/shared/models/root-object.model';
import { Subscription, Observable } from 'rxjs';
import { Guide } from '../models/guide';
import { Hashtag } from 'src/app/shared/models/hashtag';
import { RootObjectList } from 'src/app/shared/models/root-object-list.model';

@Component({
  selector: 'neo-guide-edit-view',
  templateUrl: './guide-edit-view.component.html',
  styleUrls: ['./guide-edit-view.component.scss']
})
export class GuideEditViewComponent implements OnInit {

  subscription = new Subscription();
  guideId: number;
  guide?: RootObject<Guide> = new RootObject<Guide>(Guide, 'guides');
  // allHashtags: RootObjectList<Hashtag> = new RootObjectList<Hashtag>(Hashtag, 'hashtags');
  guideHashtags: RootObjectList<Hashtag> = new RootObjectList<Hashtag>(Hashtag, 'hastags');
  filteredHashtags: Observable<any[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private guideService: GuideService,
    private hashtagService: HashtagService
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
    const getOneGuideSubscription = this.guideService.getById(id).subscribe((guide: RootObject<Guide>) => {
      if (guide) {
       this.guide = guide;
      }
    });
    this.subscription.add(getOneGuideSubscription);
  }

  // getHashtags() {
  //   const getHashtagsSubscription = this.hashtagService.getAll().subscribe((hashtags: RootObjectList<Hashtag>) => {
  //     if (hashtags) {
  //       this.allHashtags = hashtags;
  //     }
  //     this.hashtagCtrl.setValue(null);

  //     if (!this.filteredHashtags) {
  //       this.listenChanges();
  //     }
  //   });
  //   this.subscription.add(getHashtagsSubscription);
  // }

  getGuideHastags() {
    const getGuideHastagsSubscription = this.guideService.getHashtagsByGuide(this.guideId).subscribe((data: RootObjectList<Hashtag>) => {
      if (data) {
        this.guideHashtags = data;
        console.log(this.guideHashtags);

      }
    });
    this.subscription.add(getGuideHastagsSubscription);
  }

}
