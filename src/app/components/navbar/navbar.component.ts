import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  // Input para recibir estado desde el padre (opcional - puedes mantener tu suscripción actual)
  @Input() set user(user: { fullName: string } | null) {
    this.isLoggedIn = !!user;
    if (user) {
      this.userName = user.fullName;
    }
  }

  // Outputs para comunicar eventos al padre
  @Output() loginRequested = new EventEmitter<void>();
  @Output() logoutRequested = new EventEmitter<void>();
  @Output() menuItemClicked = new EventEmitter<string>();

  isLoggedIn = false;
  userName: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  // Versión modificada de tu método login
  login(): void {
    this.loginRequested.emit(); // Emite al padre
    this.router.navigate(['/login']); // Mantiene tu navegación actual
  }

  // Versión modificada de tu método logout
  logout(): void {
    this.logoutRequested.emit(); // Emite al padre
    this.authService.logout();
    this.router.navigate(['/inicio']);
  }

  // Nuevo método para items del menú
  navigateTo(route: string): void {
    this.menuItemClicked.emit(route); // Emite al padre
    this.router.navigate([route]); // Mantiene navegación
  }

    // Método para verificar ruta activa
  isActive(route: string): boolean {
    return this.router.url.includes(route);
  }
}