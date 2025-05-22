import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-certificates',
    imports: [CommonModule],
    templateUrl: './certificates.component.html',
    styleUrl: './certificates.component.css',
    animations: [
        trigger('fadeInOut', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('300ms ease-in', style({ opacity: 1 }))
            ]),
            transition(':leave', [
                animate('300ms ease-out', style({ opacity: 0 }))
            ])
        ])
    ]
})
export class CertificatesComponent {
  certificates = [
    {
      title: 'AWS Practitioner Essentials',
      image: './AWS Practitioner_page-0001.jpg',
    },
    {
      title: 'Digital Forensics',
      image: './Certifcate to Digital Forensics_page-0001.jpg',
    },
    {
      title: 'Blue Team Junior Analyst',
      image: './Certificate BTJA_page-0001(1).jpg',
    },
    {
      title: 'Certified Network Security Practitioner',
      image: './CNSP.jpg',
    },
    {
      title: 'Business Analytics with Excel',
      image: './Certificate Business Analytics with Excel_page-0001.jpg',
    },
    {
      title: 'Intro in Cybersecurity',
      image: './Certificate Intro in Cybersecurity_page-0001.jpg',
    },
    {
      title: 'ITIL-V4',
      image: './Certificate ITIL-V4_page-0001.jpg',
    },
    {
      title: 'Javascript Essentials 1',
      image: './Certificate JSE-1_page-0001.jpg',
    },
    {
      title: 'Javascript Essentials 2',
      image: './Certificate JSE-2_page-0001.jpg',
    },
    {
      title: 'Introduction to Bash',
      image: './Certificate of Bash_page-0001.jpg',
    },
    {
      title: 'Introduction to Powershell',
      image: './Certificate of Powershell_page-0001.jpg',
    },
    {
      title: 'Introduction to Python',
      image: './Certificate Python_page-0001.jpg',
    },
    {
      title: 'Darkweb Operation',
      image: './Certificate to DarkWeb Operation_page-0001.jpg',
    },
    {
      title: 'Open Source Intelligence',
      image: './Certificates to OSINT_page-0001.jpg',
    },
    {
      title: 'Introduction to Threat Hunting',
      image: './Introduction to Threat Hunting-course_page-0001(1).jpg',
    },
  ];

  selectedCertificate: any = null;
  selectedIndex: number | null = null;

  openModal(index: number): void {
    this.selectedIndex = index;
    this.selectedCertificate = this.certificates[index];
  }

  closeModal(): void {
    this.selectedCertificate = null;
    this.selectedIndex = null;
  }

  navigate(direction: number): void {
    if (this.selectedIndex === null) return;
    const newIndex = this.selectedIndex + direction;
    if (newIndex >= 0 && newIndex < this.certificates.length) {
      this.selectedIndex = newIndex;
      this.selectedCertificate = this.certificates[newIndex];
    }
  }
}
