import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
    selector: 'app-contact',
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

  typingText = ''; // Current instruction text
  animatedInputText = ''; // Text being typed
  fieldBeingTyped = ''; // Currently focused field
  successMessage = ''; // Success message
  isSubmitted = false; // Form submission status

  instructions = {
    name: 'Type your full name here.',
    email: 'Enter a valid email address.',
    message: 'Write your message here.',
  };

  typingInterval: any; // Interval for typing effect

  async onSubmit(contactForm: any) {
    this.isSubmitted = true;

    if (!contactForm.valid) {
      console.error('Form is invalid. Please fill out all required fields.');
      return;
    }

    try {
      const response = await emailjs.send(
        'service_pw072wu', // Replace with your EmailJS service ID
        'template_800tdre', // Replace with your EmailJS template ID
        {
          from_name: this.formData.name,
          email: this.formData.email,
          message: this.formData.message,
          reply_to: this.formData.email,
        },
        '4qwa8TU4X2XdaqZe0' // Replace with your EmailJS public key
      );

      console.log('Email sent successfully!', response);
      this.successMessage = 'Your message has been sent successfully!';
      setTimeout(() => (this.successMessage = ''), 5000);
      this.resetForm(contactForm);
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('An error occurred while sending your message. Please try again.');
    }
  }

  startTypingAnimation(field: string) {
    this.fieldBeingTyped = field;
    const instruction = this.instructions[field as keyof typeof this.instructions];
    this.typingText = ''; // Reset instruction text
    this.animatedInputText = ''; // Reset animated input text

    if (this.typingInterval) clearInterval(this.typingInterval); // Clear previous animation

    let index = 0;
    this.typingInterval = setInterval(() => {
      if (index < instruction.length) {
        this.typingText += instruction[index];
        index++;
      } else {
        clearInterval(this.typingInterval); // Stop animation when complete
      }
    }, 50); // Speed of typing (50ms per letter)
  }

  onInput(event: any) {
    const inputValue = event.target.value;
    this.animatedInputText = inputValue; // Update the animated text
  }

  resetForm(contactForm: any) {
    this.formData = { name: '', email: '', message: '' };
    this.typingText = '';
    this.animatedInputText = '';
    this.fieldBeingTyped = '';
    if (this.typingInterval) clearInterval(this.typingInterval);
    contactForm.resetForm();
  }
}
