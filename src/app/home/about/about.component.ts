import { AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements AfterViewInit {
  isVisible = false;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const element = document.getElementById("who-i-am");
    const phrases = [
      "I'm a full-stack developer with experience in Angular, Firebase, and modern front-end technologies.",
      "I specialize in creating responsive, user-friendly web applications.",
      "I have a keen eye for design and enjoy solving complex problems.",
      "When I'm not coding, I explore new technologies and contribute to open-source projects."
    ];

    let currentPhraseIndex = 0;
    let index = 0;
    const speed = 100; // Typing speed in milliseconds

    const typeWriter = () => {
      if (index < phrases[currentPhraseIndex].length) {
        element!.innerHTML += phrases[currentPhraseIndex].charAt(index);
        index++;
        setTimeout(typeWriter, speed);
      } else {
        // After typing the full phrase, wait a bit and then erase it for the next phrase
        setTimeout(() => {
          element!.innerHTML = ""; // Clear text
          currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Loop back to the first phrase after the last
          index = 0; // Reset index
          typeWriter(); // Start typing the next phrase
        }, 1000); // Delay before erasing and typing the next phrase
      }
    };

    typeWriter(); // Start typing animation
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const imageElement = this.el.nativeElement.querySelector('.image-friendly');
    const rect = imageElement.getBoundingClientRect();

    // Check if the image is in the viewport
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      // Trigger animation when the element is in view
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }
}
