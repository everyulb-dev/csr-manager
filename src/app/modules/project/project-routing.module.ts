import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProjectsComponent } from './pages/list-projects/list-projects.component';
import { ProjectSetupComponent } from './pages/project-setup/project-setup.component';

const routes: Routes = [
  {
    path: 'project',
    component: ListProjectsComponent
  },
  {
    path: 'project-setup',
    component: ProjectSetupComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class ProjectRoutingModule { }
