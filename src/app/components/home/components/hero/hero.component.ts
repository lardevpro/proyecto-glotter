import { Component } from '@angular/core';
import { LoginComponent } from "../../../login/login.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  imports: [LoginComponent],
})
export class HeroComponent {}
