import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { HeroComponent } from "../hero/hero.component";
import { AboutComponent } from "../about/about.component";
import { ProjectsComponent } from "../projects/projects.component";
import { FootComponent } from "../foot/foot.component";
import { ContactComponent } from "../contact/contact.component";
import { SkillsComponent } from "../skills/skills.component";
import { CertificatesComponent } from '../certificates/certificates.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent,CertificatesComponent, HeroComponent, AboutComponent, ProjectsComponent, FootComponent, ContactComponent, SkillsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
