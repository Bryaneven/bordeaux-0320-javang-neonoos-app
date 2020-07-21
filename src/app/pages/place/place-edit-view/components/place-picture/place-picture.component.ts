import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPictureDialogComponent } from '../add-picture-dialog/add-picture-dialog.component';
import { RootObjectList } from 'src/app/shared/models/root-object-list.model';
import { Picture } from 'src/app/shared/models/picture.model';
import { RootObject } from 'src/app/shared/models/root-object.model';
import { ActivityService } from 'src/app/shared/services/activity.service';
import { Data } from 'src/app/shared/models/data.model';

@Component({
  selector: 'neo-place-picture',
  templateUrl: './place-picture.component.html',
  styleUrls: ['./place-picture.component.scss']
})
export class PlacePictureComponent implements OnInit {

  @Input() placeId: number;

  placePictures: RootObjectList<Picture> = new RootObjectList<Picture>(Picture, 'pictures');
  addedPictures: RootObjectList<Picture> = new RootObjectList<Picture>(Picture, 'pictures');

  constructor(public dialog: MatDialog, private picturesService: ActivityService) { }

  ngOnInit(): void {
    this.addedPictures.data = [];
    this.placePictures.data = [];

    // PICTURES BEGIN
    this.picturesService.getPicturesByPlace(this.placeId).subscribe((placePictures: RootObjectList<Picture>) => {
        for (const index of placePictures.data) {
          this.picturesService.getPictureById(index.id).subscribe(
            (picture: Data<Picture>) => this.placePictures.data.push(picture)
          );
        }
      }
    );
    // PICTURES END

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddPictureDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      const currentAddedPicture: RootObject<Picture> = new RootObject<Picture>(Picture);

      currentAddedPicture.data.attributes.name = result;
      currentAddedPicture.data.attributes.filename = result;
      currentAddedPicture.data.attributes.created = new Date();
      currentAddedPicture.data.id = this.addedPictures.data.length;

    });
  }

  // Do delete
  deletePicture(id: number) {
  }

  isExt(picture: Picture) {
    picture.isExt = !picture.isExt;
  }

}
