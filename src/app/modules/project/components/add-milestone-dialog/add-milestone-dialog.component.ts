import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-milestone-dialog',
  templateUrl: './add-milestone-dialog.component.html',
  styleUrls: ['./add-milestone-dialog.component.scss']
})
export class AddMilestoneDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddMilestoneDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
