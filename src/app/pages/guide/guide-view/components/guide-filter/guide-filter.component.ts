import { Component, OnInit, Input } from '@angular/core';
import { HashtagService } from '../../../services/hashtag/hashtag.service';
import { Hashtag } from 'src/app/shared/models/hashtag';
import { RootObject } from 'src/app/shared/models/root-object.model';
import { RootObjectList } from 'src/app/shared/models/root-object-list.model';

@Component({
  selector: 'neo-guide-filter',
  templateUrl: './guide-filter.component.html',
  styleUrls: ['./guide-filter.component.scss']
})
export class GuideFilterComponent implements OnInit {

  @Input() hashtag?: RootObject<Hashtag> = new RootObject<Hashtag>(Hashtag);
  hashtags: RootObjectList<Hashtag>;
  hashtagsSearch: RootObjectList<Hashtag>;


  constructor(private hashtagservice: HashtagService) { }

  ngOnInit(): void {

  }

  onSearchChange(searchValue: string): void {
    this.hashtagservice.getByName(searchValue).subscribe( (hashtags) => {
      this.hashtags = hashtags;
     });
  }

  getHashtags() {
    this.hashtagservice.getAll().subscribe( (hashtags) => {
      this.hashtags = hashtags;
    });
  }

  getOneHashtag() {
    this.hashtagservice.getById().subscribe((hashtag: RootObject<Hashtag>) => {
      this.hashtag = hashtag;
    });
  }
}
