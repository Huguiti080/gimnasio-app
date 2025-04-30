import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component'; // Ajusta la ruta según la ubicación de tu NavBarComponent
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
