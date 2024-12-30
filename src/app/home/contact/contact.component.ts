import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: '',
  };

  namePlaceholder = 'John Doe';
  emailPlaceholder = 'example@mail.com';
  messagePlaceholder = 'Type your message here...';

  isTyping = false;
  typingText = '';

  startTypingAnimation(field: string) {
    this.isTyping = true;
    const placeholder = this.getPlaceholderText(field);
    this.typeText(placeholder);
  }

  getPlaceholderText(field: string): string {
    if (field === 'name') {
      return this.namePlaceholder;
    } else if (field === 'email') {
      return this.emailPlaceholder;
    } else {
      return this.messagePlaceholder;
    }
  }

  // Simulate typing effect
  typeText(text: string) {
    this.typingText = ''; // Reset the text before starting new animation
    let index = 0;
    const typingInterval = setInterval(() => {
      this.typingText += text[index];
      index++;
      if (index === text.length) {
        clearInterval(typingInterval); // Stop typing effect when done
      }
    }, 100); // Adjust typing speed (milliseconds per character)
  }

  onInputChange(field: string, event: any) {
    this.isTyping = false; // Stop the animation once user starts typing
    this.typingText = event.target.value;
  }

  onSubmit() {
    console.log('Form submitted:', this.formData);
  }
}
