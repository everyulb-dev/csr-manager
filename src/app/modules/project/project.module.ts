import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProjectsComponent } from './pages/list-projects/list-projects.component';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectSetupComponent } from './pages/project-setup/project-setup.component'
import { MatTableModule } from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AddProjectDialogComponent } from './components/add-project-dialog/add-project-dialog.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ListProjectsComponent, AddProjectDialogComponent, ProjectSetupComponent],
  entryComponents: [AddProjectDialogComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MatTableModule,
    MatTabsModule,
    MatDialogModule,
    SharedModule,
    MatToolbarModule
  ]
})
export class ProjectModule { }
