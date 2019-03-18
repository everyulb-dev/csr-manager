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
      id: 1,
      isCompleted: false,
      name: 'Project Name',
      focusArea: 'focus area',
      verticle: 'verticle',
      region: 'region',    
      stage: 'execution',        
    },
    {
      id: 2,
      isCompleted: false,
      name: 'Project Name',
      focusArea: 'focus area',
      verticle: 'verticle',
      region: 'region',    
      stage: 'impact analysis',        
    },
    {
      id: 3,
      isCompleted: false,
      name: 'Project Name',
      focusArea: 'focus area',
      verticle: 'verticle',
      region: 'region',    
      stage: 'planning',        
    },
    {
      id: 4,
      isCompleted: false,
      name: 'Project Name',
      focusArea: 'focus area',
      verticle: 'verticle',
      region: 'region',    
      stage: 'execution',        
    },
    {
      id: 5,
      isCompleted: false,
      name: 'Project Name',
      focusArea: 'focus area',
      verticle: 'verticle',
      region: 'region',    
      stage: 'impact analysis',        
    },
    {
      id: 6,
      isCompleted: false,
      name: 'Project Name',
      focusArea: 'focus area',
      verticle: 'verticle',
      region: 'region',    
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

  handleCheckbox(el): void {
    el.isCompleted = !el.isCompleted;
    console.log(el);
  }

}

interface Project {
  id: number,
  isCompleted: boolean,
  name: string,
  stage: string,
  focusArea: string,
  verticle: string,
  region: string
}