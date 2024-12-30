import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  activeLink: string = '';
  isMenuOpen: boolean = false;  // Variable to track the menu state

  // Toggle the mobile menu
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const sections = document.querySelectorAll('app-hero, app-about, app-projects, app-contact');
    let currentSectionId = '';

    sections.forEach((section: any) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
        currentSectionId = section.id;
      }
    });

    this.activeLink = currentSectionId;
  }
}
