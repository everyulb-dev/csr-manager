import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddMilestoneDialogComponent } from '../add-milestone-dialog/add-milestone-dialog.component';

@Component({
  selector: 'app-milestones',
  templateUrl: './milestones.component.html',
  styleUrls: ['./milestones.component.scss']
})
export class MilestonesComponent implements OnInit {

  milestones : Array<milestone> = [];

  constructor(public dialog: MatDialog) { }
  
  ngOnInit() {
  }

  addMilestone(): void {
    console.log('Add milestone');
    const dialogRef = this.dialog.open(AddMilestoneDialogComponent, {
      width: '35.72vw',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog Closed');
      console.log(result);
    })
  }

}

interface milestone {
  name: string,
  description: string,
  completionDate: Date,
  isEndOfProject: boolean
}
