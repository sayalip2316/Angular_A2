import { Component } from '@angular/core';

@Component({
  selector: 'app-project-listing',
  templateUrl: './project-listing.component.html',
  styleUrls: ['./project-listing.component.css']
})
export class ProjectListingComponent {
  // Define the projects array here
  projects = [
    {
      id: 1,
      name: 'ProjectHub - Detailed Project Explanation - Angular',
      description: 'Create a comprehensive project management application for efficient team collaboration, task tracking, and resource management.',
      startDate: '2023-10-04',
      endDate: '2023-12-31',
      projectManager: 'Mohsin', // Name of the project manager
    },
    {
      id: 2,
      name: 'ProjectHub2 - Detailed Project Explanation - Angular',
      description: 'Create a comprehensive project management application for efficient team collaboration, task tracking, and resource management.',
      startDate: '2023-10-04',
      endDate: '2023-12-31',
      projectManager: 'Mohsin', // Name of the project manager
    }
    // Add more projects here...
  ];

  // Method to delete a project
  deleteProject(project: any) {
    // Implement the logic to delete the project here.
    // You can remove the project from the 'projects' array.
    const projectIndex = this.projects.findIndex(p => p.id === project.id);
    if (projectIndex !== -1) {
      this.projects.splice(projectIndex, 1);
    }
  }

  // You can add methods and other properties here as needed.
}
