import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { HeroComponent } from "../hero/hero.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
