import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Hashtag } from 'src/app/shared/models/hashtag';
import { HashtagService } from '../../../services/hashtag/hashtag.service';
import { RootObject } from 'src/app/shared/models/root-object.model';

@Component({
  selector: 'neo-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.scss']
})
export class DialogBodyComponent implements OnInit {

  @Input() hashtag?: RootObject<Hashtag> = new RootObject<Hashtag>(Hashtag);

  constructor( public dialogRef: MatDialogRef<DialogBodyComponent>, private hashtagService: HashtagService ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.hashtagService.post(this.hashtag).subscribe();
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
