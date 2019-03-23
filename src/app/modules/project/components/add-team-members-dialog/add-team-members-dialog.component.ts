import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-team-members-dialog',
  templateUrl: './add-team-members-dialog.component.html',
  styleUrls: ['./add-team-members-dialog.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class AddTeamMembersDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddTeamMembersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  members = [
    {
      name: 'Jon Doe',
      email: 'jon@gmail.com',
      isSelected: false,
      ongoingProjects: 5,
      image: 'https://png.pngtree.com/svg/20170602/b7c3ca6e9e.png'
    },
    {
      name: 'Jon Doe',
      email: 'jon@gmail.com',
      isSelected: false,
      ongoingProjects: 5,
      image: 'https://png.pngtree.com/svg/20170602/b7c3ca6e9e.png'
    },
    {
      name: 'Jon Doe',
      email: 'jon@gmail.com',
      isSelected: false,
      ongoingProjects: 5,
      image: 'https://png.pngtree.com/svg/20170602/b7c3ca6e9e.png'
    },
    {
      name: 'Jon Doe',
      email: 'jon@gmail.com',
      isSelected: false,
      ongoingProjects: 5,
      image: 'https://png.pngtree.com/svg/20170602/b7c3ca6e9e.png'
    },
    {
      name: 'Jon Doe',
      email: 'jon@gmail.com',
      isSelected: false,
      ongoingProjects: 5,
      image: 'https://png.pngtree.com/svg/20170602/b7c3ca6e9e.png'
    },
    {
      name: 'Jon Doe',
      email: 'jon@gmail.com',
      isSelected: false,
      ongoingProjects: 5,
      image: 'https://png.pngtree.com/svg/20170602/b7c3ca6e9e.png'
    },
    {
      name: 'Jon Doe',
      email: 'jon@gmail.com',
      isSelected: false,
      ongoingProjects: 5,
      image: 'https://png.pngtree.com/svg/20170602/b7c3ca6e9e.png'
    },
  ]
  
  ngOnInit() {
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
