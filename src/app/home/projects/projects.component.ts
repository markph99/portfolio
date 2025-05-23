import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-projects',
    imports: [CommonModule],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'E-Commerce Website',
      description: 'A full-stack e-commerce application with Angular and Firebase.',
      image: './ecom.png', // Replace with actual image URLs
      link: 'https://github.com/your-github-project-link', // Replace with actual project links
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio showcasing my projects and skills.',
      image: './portfolio.png',
      link: 'https://markph99.github.io/portfolio/', // Replace with actual project links
    },
    {
      title: 'Chat Application',
      description: 'A real-time chat app built with Angular and Firebase.',
      image: './chat.png',
      link: 'https://github.com/your-chat-app-link', // Replace with actual project links
    },
  ];
}
