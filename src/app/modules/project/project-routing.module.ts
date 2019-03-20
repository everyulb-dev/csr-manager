import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProjectsComponent } from './pages/list-projects/list-projects.component';
import { ProjectSetupComponent } from './pages/project-setup/project-setup.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { MilestonesComponent } from './components/milestones/milestones.component';
import { TeamsComponent } from './components/teams/teams.component';
import { SummaryComponent } from './components/summary/summary.component';

const routes: Routes = [
  {
    path: 'project',
    component: ListProjectsComponent
  },
  {
    path: 'project-setup',
    component: ProjectSetupComponent,
    children: [
      { path: '', redirectTo: 'details', pathMatch: 'full' },
      { path: 'details', component: ProjectDetailsComponent },
      { path: 'milestones', component: MilestonesComponent },
      { path: 'teams', component: TeamsComponent },
      { path: 'summary', component: SummaryComponent },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class ProjectRoutingModule { }
