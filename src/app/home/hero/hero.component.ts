import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-hero',
    imports: [CommonModule],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.css'
})
export class HeroComponent {
  particles: Array<any> = [];
  dynamicText: string = ''; // Current text being displayed
  private textArray: string[] = ['Network Analyst', 'Web Developer', 'Tech Enthusiast', 'Graphic Designer']; // List of roles or phrases
  private textIndex: number = 0; // Tracks the current index in the array
  private textInterval: any; // Stores the interval reference

  ngOnInit(): void {
    this.startTextRotation();
  }

  ngOnDestroy(): void {
    this.stopTextRotation();
  }

  onMouseMove(event: MouseEvent): void {
    const { clientX, clientY } = event;

    const particle = {
      x: clientX + (Math.random() * 100 - 50),
      y: clientY + (Math.random() * 100 - 50),
      size: Math.random() * 20 + 10,
      opacity: 1,
      color: `rgba(${Math.floor(Math.random() * 255)}, 255, 255, 0.5)`,
      class: 'particle',
    };

    this.particles.push(particle);

    setTimeout(() => {
      this.particles.shift();
    }, 1500);
  }

  private startTextRotation(): void {
    this.dynamicText = this.textArray[this.textIndex];
    this.textInterval = setInterval(() => {
      this.textIndex = (this.textIndex + 1) % this.textArray.length; // Loop through the array
      this.dynamicText = this.textArray[this.textIndex];
    }, 2000); // Change text every 2 seconds
  }

  private stopTextRotation(): void {
    if (this.textInterval) {
      clearInterval(this.textInterval);
    }
  }
}
