import { Component, OnInit } from '@angular/core';
import { AddTeamMembersDialogComponent } from '../add-team-members-dialog/add-team-members-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  addTeamMembers(): void {
    console.log('Add milestone');
    const dialogRef = this.dialog.open(AddTeamMembersDialogComponent, {
      width: '35.72vw',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog Closed');
      console.log(result);
    })
  }

}
