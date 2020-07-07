import { Component, OnInit, Input } from '@angular/core';
import { Hashtag } from '../../../models/hashtag';
import { HashtagService } from '../../../services/hashtag/hashtag.service';
import { RootObject } from 'src/app/shared/models/root-object.model';

@Component({
  selector: 'neo-guide-results',
  templateUrl: './guide-results.component.html',
  styleUrls: ['./guide-results.component.scss']
})
export class GuideResultsComponent implements OnInit {

hashtag?: RootObject<Hashtag> = new RootObject<Hashtag>(Hashtag, 'hashtags');
_hashtags: Hashtag[] = [];
show = true;
titleHashtag = 'Edite';
hashtagId: number;

  @Input()
  set hashtags(hashtags: Hashtag[]) {
    this._hashtags = hashtags;
  }

  constructor(private hashtagService: HashtagService) { }

  ngOnInit(): void { }

  updateHashtagName(id: number, name: string) {

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
  }
}
