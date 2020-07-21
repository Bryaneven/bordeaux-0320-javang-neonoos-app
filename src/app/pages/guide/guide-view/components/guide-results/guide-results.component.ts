import { Component, OnInit, Input } from '@angular/core';
import { HashtagService } from '../../../services/hashtag/hashtag.service';
import { RootObject } from 'src/app/shared/models/root-object.model';
import { Guide } from '../../../models/guide';
import { RootObjectList } from 'src/app/shared/models/root-object-list.model';
import { forkJoin, Observable } from 'rxjs';
import { Hashtag } from 'src/app/shared/models/hashtag';
import { Data } from 'src/app/shared/models/data.model';
import { GuideService } from '../../../services/guide/guide.service';

@Component({
  selector: 'neo-guide-results',
  templateUrl: './guide-results.component.html',
  styleUrls: ['./guide-results.component.scss']
})
export class GuideResultsComponent implements OnInit {

/* hashtag?: RootObject<Hashtag> = new RootObject<Hashtag>(Hashtag, 'hashtags');
guides: RootObjectList<Guide>;
guideSections: RootObjectList<Guide>[] = []; */

/* guideSections$: Observable<RootObjectList<Guide>[]>;
_hashtags: Data<Hashtag>[] = [];
show = true;
titleHashtag = 'Edite';
hashtagId: number; */

_hashtags: Data<Hashtag>[] = [];
guides: RootObjectList<Guide>;
hashtagsSection = [];
guideSections: RootObjectList<Guide>[] = [];


   @Input()
  set hashtags(hashtags: []) {

    if (hashtags.length > 0) {

      this.forkGuide(hashtags).subscribe((results: RootObjectList<Guide>[]) => {
        this.guideSections = results;
        this._hashtags = hashtags;
        console.log(this._hashtags);
      });


/*       for (let i = 0; hashtags.length > i; i++) {
        this.guideService.getGuidesByHashtag(hashtags[i]).subscribe((guides) => {
          this.guides = guides;
          console.log(this.guides);
        });
      } */
    }

/*     if (hashtags.length > 0) {


      this.forkGuide(hashtags).subscribe((results: RootObjectList<Guide>[]) => {
        this.guideSections = results;
        this._hashtags = hashtags;
        console.log(this._hashtags);
      });
    } */
  }

  //@Input() hashtags = [];
  @Input() allGuides: RootObjectList<Guide>;

  constructor(private guideService: GuideService) { }

  ngOnInit(): void { }



  forkGuide(hashtags: []){

    // const getGuides$ = hashtags.map((h) => this.hashtagService.getGuidesByHashtag(h['id']));

    for (let i = 0; hashtags.length > i; i++) {
      const getGuides$ = hashtags.map((h) => this.guideService.getGuidesByHashtag(hashtags[i]));
      return forkJoin(getGuides$);
    }
  }

  /* updateHashtagName(id: number, name: string) {

    if (this.show === true ) {
      this.show = false;
      this.hashtagId = id;
    } else {

      if (this.hashtagId === id) {
        this.hashtagService.getById(id).subscribe((hashtag) => {
          this.hashtag = hashtag;
          if ( this.hashtag.data.id === this.hashtagId) {
            this.hashtag.data.attributes.name = name;
            this.hashtagService.patch(hashtag, id).subscribe();
            this.show = true;
            this.hashtagId = null;
          }
        });
      } else {
        this.hashtagId = id;
      }
    }
  }*/
}

