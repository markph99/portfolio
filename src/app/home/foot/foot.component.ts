import { Component } from '@angular/core';

@Component({
    selector: 'app-foot',
    imports: [],
    templateUrl: './foot.component.html',
    styleUrl: './foot.component.css'
})
export class FootComponent {
  currentYear: number = new Date().getFullYear();
}
