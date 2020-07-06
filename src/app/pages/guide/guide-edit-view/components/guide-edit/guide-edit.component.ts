import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { Guide } from 'src/app/pages/guide/models/guide';
import { GuideService } from 'src/app/pages/guide/services/guide/guide.service';
import { Hashtag } from 'src/app/shared/models/hashtag';
import { FormControl } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { startWith, map } from 'rxjs/operators';
import { RootObject } from 'src/app/shared/models/root-object.model';
import { HashtagService } from '../../../services/hashtag/hashtag.service';
import { RootObjectList } from 'src/app/shared/models/root-object-list.model';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import { Data } from 'src/app/shared/models/data.model';

@Component({
  selector: 'neo-guide-edit',
  templateUrl: './guide-edit.component.html',
  styleUrls: ['./guide-edit.component.scss']
})
export class GuideEditComponent implements OnInit {

  subscription = new Subscription();
  show = true;
  guideId: number;
  updated = false;
  @Input() guide?: RootObject<Guide> = new RootObject<Guide>(Guide, 'guides');

  // Mat-chips
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  hashtagCtrl = new FormControl();
  allHashtags: RootObjectList<Hashtag> = new RootObjectList<Hashtag>(Hashtag);
  guideHashtags: RootObjectList<Hashtag> = new RootObjectList<Hashtag>(Hashtag);
  filteredHashtags: Observable<any[]>;

  @ViewChild('hashtagInput') hashtagInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private guideService: GuideService,
    private hashtagService: HashtagService
    ) { }

  ngOnInit(): void {
    this.getRouteParam();
    this.getHashtags();
    this.getGuideHastags();
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


  getHashtags() {
    const getHashtagsSubscription = this.hashtagService.getAll().subscribe((hashtags: RootObjectList<Hashtag>) => {
      if (hashtags) {
        this.allHashtags = hashtags;
      }
      this.hashtagCtrl.setValue(null);

      if (!this.filteredHashtags) {
        this.listenChanges();
      }
    });
    this.subscription.add(getHashtagsSubscription);
  }

  getGuideHastags() {
    const getGuideHastagsSubscription = this.guideService.getHashtagsByGuide(this.guideId).subscribe((data: RootObjectList<Hashtag>) => {
      if (data) {
        this.guideHashtags = data;
        console.log(this.guideHashtags);

      }
    });
    this.subscription.add(getGuideHastagsSubscription);
  }

  // Mat-chips method
  selected(event: MatAutocompleteSelectedEvent): void {
    this.guideHashtags.data.push(event.option.value);
    this.hashtagInput.nativeElement.value = '';
    this.hashtagCtrl.setValue(null);
    this.updated = true;
  }

  remove(hashtag: Hashtag): void {
    for (let i = 0; i < this.guideHashtags.data.length; i++) {
      if (this.guideHashtags.data[i].id === hashtag.id) {
        this.guideHashtags.data.splice(i , 1);
        break;
      }
    }
    this.updated = true;


  }

  listenChanges() {
    this.filteredHashtags = this.hashtagCtrl.valueChanges.pipe(
      // tslint:disable-next-line: deprecation
      startWith(null),
      map(hashtag => {
        if (hashtag && typeof hashtag === 'string') {
          return this._filter(hashtag);
        }
        if (this.allHashtags && this.allHashtags.data.length > 0) {
          return this.allHashtags.data.slice();
        }
      })
    );
  }

  _filter(value: string): any {
    const filterValue = value.toLowerCase();
    return this.allHashtags.data.filter(hashtag => hashtag.attributes.name.toLowerCase().indexOf(filterValue) === 0);
  }

  // Persistence
  save() {
    if (this.guideId) {
      this.guideService.patch(this.guide, this.guideId).subscribe();
      console.log(this.guide);
    } else {
      this.guideService.post(this.guide).subscribe();
    }

    if (this.updated) {
      this.guideService.patchHashtagsByGuide(this.guideId, this.guideHashtags).subscribe();
      console.log(this.guideHashtags);
    }

    this.router.navigate(['/guide/view']);
  }


}
