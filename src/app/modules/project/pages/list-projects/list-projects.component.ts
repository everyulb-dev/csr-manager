import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListProjectsComponent implements OnInit {

  projects: Project[] = [
    {
      name: 'Project Name',
      focusArea: 'focus area',
      verticle: 'verticle',
      region: 'Region',    
      stage: 'execution',        
    },
    {
      name: 'Project Name',
      focusArea: 'focus area',
      verticle: 'verticle',
      region: 'Region',    
      stage: 'impact analysis',        
    },
    {
      name: 'Project Name',
      focusArea: 'focus area',
      verticle: 'verticle',
      region: 'Region',    
      stage: 'planning',        
    },
    {
      name: 'Project Name',
      focusArea: 'focus area',
      verticle: 'verticle',
      region: 'Region',    
      stage: 'execution',        
    },
    {
      name: 'Project Name',
      focusArea: 'focus area',
      verticle: 'verticle',
      region: 'Region',    
      stage: 'impact analysis',        
    },
    {
      name: 'Project Name',
      focusArea: 'focus area',
      verticle: 'verticle',
      region: 'Region',    
      stage: 'planning',        
    },
  ];

  tableColumns: string[] = [
    'name',
    'focusArea',
    'verticle',
    'region',
    'stage'
  ]

  constructor() { }

  ngOnInit() {
  }

}

interface Project {
  name: string,
  stage: string,
  focusArea: string,
  verticle: string,
  region: string
}