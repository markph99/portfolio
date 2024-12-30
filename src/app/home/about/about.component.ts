import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit{
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
}
