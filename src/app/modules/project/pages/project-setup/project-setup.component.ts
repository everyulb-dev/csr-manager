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
    console.log(this.route.snapshot);
  }

  goToDetails(): void {
    this.router.navigate(['./details'], { relativeTo: this.route });
  }

  goToMilestones(): void {
    this.router.navigate(['./milestones'], { relativeTo: this.route });
  }

  goToTeams(): void {
    this.router.navigate(['./teams'], { relativeTo: this.route });
  }

  goToSummary(): void {
    this.router.navigate(['./summary'], { relativeTo: this.route });
  }
}
