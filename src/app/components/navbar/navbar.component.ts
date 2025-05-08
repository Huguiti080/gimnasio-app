import { Component, OnInit } from '@angular/core';
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
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  userName: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Suscribirse a los cambios en el estado de autenticación
    this.authService.currentUser.subscribe(user => {
      this.isLoggedIn = !!user;
      if (user) {
        this.userName = user.fullName;
      }
    });
  }

  login(): void {
    this.router.navigate(['/login']);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/inicio']);
  }
}