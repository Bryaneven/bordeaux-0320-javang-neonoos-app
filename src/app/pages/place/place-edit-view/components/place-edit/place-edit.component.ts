import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RootObject } from 'src/app/shared/models/root-object.model';
import { Place } from 'src/app/shared/models/place.model';
import { RootObjectList } from 'src/app/shared/models/root-object-list.model';
import { Country } from 'src/app/shared/models/country';
import { MatSelectChange } from '@angular/material/select';
import { PlaceData } from 'src/app/shared/models/place-data.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogSaveComponent } from 'src/app/shared/components/dialog-save/dialog-save.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'neo-place-edit',
  templateUrl: './place-edit.component.html',
  styleUrls: ['./place-edit.component.scss']
})
export class PlaceEditComponent implements OnInit {

  @Input() place: RootObject<Place>;
  @Input() placeId: number;
  @Input() countries: RootObjectList<Country>;
  @Input() country: RootObject<Country>;
  @Input() placeData: RootObject<PlaceData>;

  countryToPatch: RootObject<Country>;
  dialogTitle: string;

  @Output() patchPlace = new EventEmitter();
  @Output() patchCountryInPlace = new EventEmitter();


  show = true;

  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {

  }

  compareObjects(country1: any, country2: any) {
    return country1.id === country2.id;
  }

  openDialog() {
    if (this.placeId) {
      this.dialogTitle = 'Voulez-vous modifier cette place ?';
    } else {
      this.dialogTitle = 'Voulez-vous ajouter cette place ?';
    }
    const dialogRef = this.dialog.open(DialogSaveComponent, {
      data: {dialogTitle: this.dialogTitle}
    });

    dialogRef.afterClosed().subscribe( result => {
      this.save(result);
    });
  }

  save(result: boolean) {
    if (result && this.placeId) {
      this.patchPlace.emit({ place: this.place, countryId: this.country.data.id});
      this.snackBar.open(`"${this.place.data.attributes.name}" a bien été modifié`, '👍', {
        duration: 2000
      });
    }
  }

}
