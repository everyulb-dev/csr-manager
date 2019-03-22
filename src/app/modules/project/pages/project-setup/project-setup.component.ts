import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-setup',
  templateUrl: './project-setup.component.html',
  styleUrls: ['./project-setup.component.scss']
})
export class ProjectSetupComponent implements OnInit {

  detailsTab: boolean = true;
  milestonesTab: boolean = false;
  teamsTab: boolean = false;
  summaryTab: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  goToDetails(): void {
    this.router.navigate(['./details'], { relativeTo: this.route });
    
    this.milestonesTab = false;
    this.teamsTab = false;
    this.summaryTab = false;
    this.detailsTab = true;
  }

  goToMilestones(): void {
    this.router.navigate(['./milestones'], { relativeTo: this.route });

    this.milestonesTab = true;
    this.teamsTab = false;
    this.summaryTab = false;
    this.detailsTab = false;
  }

  goToTeams(): void {
    this.router.navigate(['./teams'], { relativeTo: this.route });
    
    this.milestonesTab = false;
    this.teamsTab = true;
    this.summaryTab = false;
    this.detailsTab = false;
  }

  goToSummary(): void {
    this.router.navigate(['./summary'], { relativeTo: this.route });

    this.milestonesTab = false;
    this.teamsTab = false;
    this.summaryTab = true;
    this.detailsTab = false;
  }
}
