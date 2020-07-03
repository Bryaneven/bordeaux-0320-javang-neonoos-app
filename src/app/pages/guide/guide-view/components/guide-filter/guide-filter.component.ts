import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HashtagService } from '../../../services/hashtag/hashtag.service';
import { Hashtag } from 'src/app/shared/models/hashtag';
import { RootObjectList } from 'src/app/shared/models/root-object-list.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';


@Component({
  selector: 'neo-guide-filter',
  templateUrl: './guide-filter.component.html',
  styleUrls: ['./guide-filter.component.scss']
})

export class GuideFilterComponent implements OnInit {

  @Output() checkboxEvent = new EventEmitter();

  constructor(private hashtagservice: HashtagService, public matDialog: MatDialog) { }

  hashtags: RootObjectList<Hashtag>;
  hashtagsSearch: RootObjectList<Hashtag>;

  arrayHashtags = [];

  ngOnInit(): void { }

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
      for (let i = 0; i < this.arrayHashtags.length; i++) {
        if (this.arrayHashtags[i].id === tag.id) {
          this.arrayHashtags.splice(i, 1);
        }
      }
    }

    // inisialise un nouveau tableau depuis tableau exitant :
    this.arrayHashtags = [...this.arrayHashtags];
    // Send CheckboxEvent
    this.checkboxEvent.emit(this.arrayHashtags);
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.matDialog.open(DialogBodyComponent, dialogConfig);
  }
}
