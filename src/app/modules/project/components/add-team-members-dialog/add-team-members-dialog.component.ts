import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-team-members-dialog',
  templateUrl: './add-team-members-dialog.component.html',
  styleUrls: ['./add-team-members-dialog.component.scss']
})
export class AddTeamMembersDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddTeamMembersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
