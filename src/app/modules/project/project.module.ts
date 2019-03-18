import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProjectsComponent } from './pages/list-projects/list-projects.component';
import { ProjectRoutingModule } from './project-routing.module';

import { MatTableModule } from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import { AddProjectDialogComponent } from './components/add-project-dialog/add-project-dialog.component';
// import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [ListProjectsComponent, AddProjectDialogComponent],
  entryComponents: [AddProjectDialogComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MatTableModule,
    MatTabsModule,
    MatDialogModule
  ]
})
export class ProjectModule { }
