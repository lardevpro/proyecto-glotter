import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isMenuOpen = false;
  logoPath = 'assets/images/logo.png';

  constructor(private router: Router) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  redirectTo(route: string) {
    this.router.navigate([`/${route}`]);
  }

  isRouteActive(route: string): boolean {
    return this.router.url === `/${route}`;
  }
}
