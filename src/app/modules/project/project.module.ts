import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProjectsComponent } from './pages/list-projects/list-projects.component';
import { ProjectRoutingModule } from './project-routing.module';

import { MatTableModule } from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [ListProjectsComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MatTableModule,
    MatTabsModule
  ]
})
export class ProjectModule { }
