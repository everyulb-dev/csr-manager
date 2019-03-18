import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProjectsComponent } from './pages/list-projects/list-projects.component';

const routes: Routes = [
  {
    path: 'project',
    component: ListProjectsComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class ProjectRoutingModule { }
