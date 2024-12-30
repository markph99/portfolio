import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { HeroComponent } from "../hero/hero.component";
import { AboutComponent } from "../about/about.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, HeroComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
