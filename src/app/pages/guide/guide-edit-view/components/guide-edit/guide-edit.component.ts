import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

@Component({
  selector: 'neo-guide-edit',
  templateUrl: './guide-edit.component.html',
  styleUrls: ['./guide-edit.component.scss']
})
export class GuideEditComponent implements OnInit {

  subscription = new Subscription();
  show = true;
  guideId: number;
  @Input() guide?: RootObject<Guide> = new RootObject<Guide>(Guide);

  // Mat-chips
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  hashtagCtrl = new FormControl();
  allHashtags: RootObjectList<Hashtag> = new RootObjectList<Hashtag>(Hashtag);
  filteredHashtags: Observable<any[]>;

  @ViewChild('hashtagInput') hashtagInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(
    private route: ActivatedRoute,
    private guideService: GuideService,
    private hashtagService: HashtagService
    ) { }

  ngOnInit(): void {
    this.getRouteParam();
    this.getHashtags();
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
       console.log(this.guide);

      }
    });
    this.subscription.add(getOneGuideSubscription);
  }


  getHashtags() {
    const getHashtagsSubscription = this.hashtagService.getAll().subscribe((hashtags: RootObjectList<Hashtag>) => {
      if (hashtags) {
        this.allHashtags = hashtags;
        console.log(this.allHashtags);

      }
      this.hashtagCtrl.setValue(null);

      if (!this.filteredHashtags) {
        this.listenChanges();
      }
    });
    this.subscription.add(getHashtagsSubscription);
  }

  // Mat-chips method
  selected(event: MatAutocompleteSelectedEvent): void {
    this.guide.data.relationships.hashtags.push({
      id: event.option.value.id,
      name: event.option.value.name
    });
    this.hashtagInput.nativeElement.value = '';
    this.hashtagCtrl.setValue(null);
    console.log(this.guide);

  }

  // remove(hashtag: Hashtag) : void {
  //   let deletedHashtagIntoGuide: Guide;
  //   for (let i=0; i<this.guide.hashtags.length; i++) {
  //     if (this.guide.hashtags[i].id === hashtag.id) {
  //       deletedHashtagIntoGuide.hashtags = this.guide.hashtags.splice(i,1);
  //       break;
  //     }
  //   }
  // }

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

  //Persistence
  save() {
    if (this.guideId) {
      this.guideService.patch(this.guide, this.guideId).subscribe();
    } else {
      this.guideService.post(this.guide).subscribe();
    }
  }


}
