import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HashtagService } from '../../../services/hashtag/hashtag.service';
import { Hashtag } from 'src/app/shared/models/hashtag';
import { RootObjectList } from 'src/app/shared/models/root-object-list.model';

@Component({
  selector: 'neo-guide-filter',
  templateUrl: './guide-filter.component.html',
  styleUrls: ['./guide-filter.component.scss']
})

export class GuideFilterComponent implements OnInit {

  @Output() checkboxEvent = new EventEmitter();

  constructor(private hashtagservice: HashtagService) { }

  hashtags: RootObjectList<Hashtag>;
  hashtagsSearch: RootObjectList<Hashtag>;

  arrayHashtags = [];

  ngOnInit(): void {

  }

  onSearchChange(searchValue: string): void {
    this.hashtagservice.getByName(searchValue).subscribe((hashtags) => {
      this.hashtags = hashtags;
    });
  }

  getHashtags() {
    this.hashtagservice.getAll().subscribe((hashtags) => {
      this.hashtags = hashtags;
    });
  }

  checkbox($event: any, tag: Hashtag) {

    if ($event.target.checked === true) {
      this.arrayHashtags.push(tag);
    }

    if ($event.target.checked === false) {
      const index = this.arrayHashtags.indexOf((h) => h.id === tag.id);
      this.arrayHashtags.splice(index, 1);
    }

    // inisialise un nouveau tableau:
    this.arrayHashtags = [...this.arrayHashtags];
    // Send CheckboxEvent
    this.checkboxEvent.emit(this.arrayHashtags);
  }
}
