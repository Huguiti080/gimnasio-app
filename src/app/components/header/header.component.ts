import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component'; 
import { CommonModule } from '@angular/common';
import { LoginComponent } from "../login/login.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent, CommonModule, LoginComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
