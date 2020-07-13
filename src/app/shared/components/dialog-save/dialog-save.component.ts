import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogToSave } from '../../models/dialog-to-save.model';

@Component({
  selector: 'neo-dialog-save',
  templateUrl: './dialog-save.component.html',
  styleUrls: ['./dialog-save.component.scss']
})
export class DialogSaveComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogSaveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogToSave
  ) { }

  ngOnInit(): void {
  }


}
