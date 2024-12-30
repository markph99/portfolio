import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills = [
    'Junior',
    'HTML',
    'CSS',
    'JavaScript',
    'Angular',
    'TypeScript',
    'Responsive Design',
    'Web Optimization',
    'Network Management',
  ];
  displayedSkills: string[] = [];
  completedSkills: string[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.typeSkills();
  }

  typeSkills(): void {
    let i = 0;
    const interval = setInterval(() => {
      if (i < this.skills.length) {
        this.displayedSkills.push(this.skills[i]);

        setTimeout(() => {
          this.completedSkills.push(this.skills[i]);
          this.cdr.detectChanges(); // Ensure UI updates
        }, 500);

        i++;
      } else {
        // Reset the process to create a loop
        setTimeout(() => {
          i = 0;
          this.displayedSkills = [];
          this.completedSkills = [];
          this.cdr.detectChanges(); // Refresh the display
        }, 2000); // Delay before restarting
      }
    }, 1000); // Interval for typing effect
  }
}
