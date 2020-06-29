import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { Guide } from 'src/app/pages/guide/models/guide';
import { GuideService } from 'src/app/pages/guide/services/guide/guide.service';
import { SectionTagService } from 'src/app/shared/services/section-tag.service';
import { Hashtag } from 'src/app/shared/models/hashtag';
import { FormControl } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { startWith, map } from 'rxjs/operators';
import { RootObject } from 'src/app/shared/models/root-object.model';

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


  //Mat-chips
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  hashtagCtrl = new FormControl();
  allHashtags: any[] = [];
  filteredHashtags: Observable<any[]>;

  @ViewChild('hashtagInput') hashtagInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(
    private route: ActivatedRoute,
    private guideService: GuideService,
    private sectionTagService: SectionTagService
  ) { }

  ngOnInit(): void {
    this.getRouteParam();

    // this.getHashtags();


  }

  getRouteParam() {
    const routerSubscription = this.route.paramMap.subscribe(params => {
      if (params && params.get('id')) {
        const routeGuideId = Number(params.get('id'));
        this.guideId = routeGuideId;
        this.getOneGuide(this.guideId);
      } else {
        // this.guide = this.newGuide;
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



  // getHashtags() {
  //   const getHashtagsSubscription = this.sectionTagService.getAll().subscribe((hashtags: Hashtag[]) => {
  //     if (hashtags) this.allHashtags = hashtags;
  //     this.hashtagCtrl.setValue(null);

  //     if (!this.filteredHashtags) {
  //       this.listenChanges();
  //     }
  //   });
  //   this.subscription.add(getHashtagsSubscription);
  // }

  // // Mat-chips method
  // selected(event: MatAutocompleteSelectedEvent): void {
  //   this.guide.hashtags.push({
  //     id: event.option.value.id,
  //     name: event.option.value.name
  //   });
  //   this.hashtagInput.nativeElement.value = '';
  //   this.hashtagCtrl.setValue(null);
  //   console.log(this.guide);

  // }

  // remove(hashtag: Hashtag) : void {
  //   let deletedHashtagIntoGuide: Guide;
  //   for (let i=0; i<this.guide.hashtags.length; i++) {
  //     if (this.guide.hashtags[i].id === hashtag.id) {
  //       deletedHashtagIntoGuide.hashtags = this.guide.hashtags.splice(i,1);
  //       break;
  //     }
  //   }
  // }

  // listenChanges() {

  //   this.filteredHashtags = this.hashtagCtrl.valueChanges.pipe(
  //     startWith(null),
  //     map(hashtag => {
  //       if (hashtag && typeof hashtag === 'string') {
  //         return this._filter(hashtag);
  //       }
  //       if (this.allHashtags && this.allHashtags.length > 0) {
  //         return this.allHashtags.slice();
  //       }
  //     })
  //   );
  // }

  // _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();
  //   return this.allHashtags.filter(hashtag => hashtag.name.toLowerCase().indexOf(filterValue) === 0);
  // }

  //Persistence
  save() {
    if (this.guideId) {
      this.guideService.patch(this.guide, this.guideId).subscribe();
    } else {
      this.guideService.post(this.guide).subscribe();
    }
  }


}
