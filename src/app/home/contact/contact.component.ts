import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser'; // Importing emailjs

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
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
  successMessage: string = ''; // Success message string

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

  typeText(text: string) {
    this.typingText = '';
    let index = 0;
    const typingInterval = setInterval(() => {
      this.typingText += text[index];
      index++;
      if (index === text.length) {
        clearInterval(typingInterval);
      }
    }, 100);
  }

  onInputChange(field: string, event: any) {
    this.isTyping = false;
    this.typingText = event.target.value; // Directly reflect input changes in typingText
  }

  async onSubmit() {
    try {
      const response = await emailjs.send(
        'service_pw072wu', // Your EmailJS service ID
        'template_800tdre', // Your EmailJS template ID
        {
          from_name: this.formData.name,
          email: this.formData.email,
          message: this.formData.message,
          reply_to: this.formData.email, // Use the email as the reply_to field
        },
        '4qwa8TU4X2XdaqZe0' // Replace with your EmailJS public key
      );
      console.log('Email sent successfully!');
      this.successMessage = 'Your message has been sent successfully!'; // Set success message
      setTimeout(() => {
        this.successMessage = ''; // Clear the success message after 5 seconds
      }, 5000);
      this.resetForm();
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('An error occurred while sending your message. Please try again.');
    }
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      message: '',
    };
    this.typingText = ''; // Clear the typing effect
  }
}
