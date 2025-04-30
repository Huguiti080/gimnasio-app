import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Importa los componentes standalone
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Nota: aquí es "styleUrls" en plural
})
export class AppComponent {
  title = 'gimnasio-app';
}
