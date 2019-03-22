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
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { MilestonesComponent } from './components/milestones/milestones.component';
import { TeamsComponent } from './components/teams/teams.component';
import { SummaryComponent } from './components/summary/summary.component';
import { MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule } from '@angular/material';
import { AddMilestoneDialogComponent } from './components/add-milestone-dialog/add-milestone-dialog.component';

@NgModule({
  declarations: [ListProjectsComponent, AddProjectDialogComponent, ProjectSetupComponent, ProjectDetailsComponent, MilestonesComponent, TeamsComponent, SummaryComponent, AddMilestoneDialogComponent],
  entryComponents: [AddProjectDialogComponent, AddMilestoneDialogComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MatTableModule,
    MatTabsModule,
    MatDialogModule,
    SharedModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    MatDatepickerModule
  ]
})
export class ProjectModule { }
