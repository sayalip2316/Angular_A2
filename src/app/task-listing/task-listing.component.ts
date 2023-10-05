import { Component } from '@angular/core';

@Component({
  selector: 'app-task-listing',
  templateUrl: './task-listing.component.html',
  styleUrls: ['./task-listing.component.css']
})
export class TaskListingComponent {
// task-listing.component.ts
tasks = [
  {
    id: 1,
    title: 'Implement User Authentication',
    description: 'Implement user registration and role-based access control.',
    dueDate: '2023-02-28',
    priority: 'High',
    status: 'In Progress',
    assignedTeamMembers: ['Alice', 'Bob']
  },
  {
    id: 2,
    title: 'Create Project Management Features',
    description: 'Allow users to create and manage projects with project managers.',
    dueDate: '2023-03-15',
    priority: 'Medium',
    status: 'To Do',
    assignedTeamMembers: ['Charlie', 'David']
  },
  {
    id: 3,
    title: 'Implement Task Management',
    description: 'Build task creation, editing, and deletion functionality within projects.',
    dueDate: '2023-04-10',
    priority: 'High',
    status: 'To Do',
    assignedTeamMembers: ['Eve', 'Frank']
  },
  {
    id: 4,
    title: 'Develop Team Management Features',
    description: 'Enable users to create, manage, and assign teams to projects.',
    dueDate: '2023-05-01',
    priority: 'Medium',
    status: 'In Progress',
    assignedTeamMembers: ['Grace', 'Harry']
  },
  {
    id: 5,
    title: 'Create Dashboard',
    description: 'Design and implement a user dashboard to display task and project summaries.',
    dueDate: '2023-05-15',
    priority: 'Medium',
    status: 'To Do',
    assignedTeamMembers: ['Ivy', 'Jack']
  },
  {
    id: 6,
    title: 'Implement Notifications',
    description: 'Set up real-time notifications for task assignments and project updates.',
    dueDate: '2023-06-01',
    priority: 'High',
    status: 'In Progress',
    assignedTeamMembers: ['Kevin', 'Laura']
  },
  {
    id: 7,
    title: 'Add Project and Task Analytics',
    description: 'Integrate charts and reports to visualize project and task data.',
    dueDate: '2023-07-01',
    priority: 'Medium',
    status: 'To Do',
    assignedTeamMembers: ['Mike', 'Nina']
  },
  // Add more tasks here...
];

// Method to delete a project
deleteTask(task: any) {
  // Implement the logic to delete the project here.
  // You can remove the project from the 'projects' array.
  const taskIndex = this.tasks.findIndex(t => t.id === task.id);
  if (taskIndex !== -1) {
    this.tasks.splice(taskIndex, 1);
  }
}
}
