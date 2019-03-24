import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-add-project-dialog',
  templateUrl: './add-project-dialog.component.html',
  styleUrls: ['./add-project-dialog.component.scss']
})
export class AddProjectDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddProjectDialogComponent>, 
     private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data
  ) { 
    this.projectData = this.fb.group({
      name: [],
      focusArea: [],
      verticle: [],
      region: [],
      stage: ['draft'],
      id: ['7'],
      isCompleted:[false] 
    })
  }
  projectData: FormGroup;

  ngOnInit() {
    console.log(this.projectData);
  }
  onSubmit(projectData) {
    this.dialogRef.close(projectData.value);
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
