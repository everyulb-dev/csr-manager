import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-setup',
  templateUrl: './project-setup.component.html',
  styleUrls: ['./project-setup.component.scss']
})
export class ProjectSetupComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  // goToProjectDetails(): void {
  //   // this.router.navigate(['details'], {relativeTo: this.route});
  //   this.router.navigate(['../details'], { relativeTo: this.route });
  //   // this.router.navigateByUrl('project-setup/details')
  // }

  // goToMilestones(): void {
  //   console.log('m');
  //   // this.router.navigate(['milestones'], {relativeTo: this.route});
  //   // this.router.navigateByUrl('project-setup/milestones')
  //   this.router.navigate(['../milestones'], { relativeTo: this.route });
  // }

}
