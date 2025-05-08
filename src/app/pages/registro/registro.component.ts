import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  registros: any[] = [];

  ngOnInit() {
    const data = localStorage.getItem('datosRegistrados');
    this.registros = data ? JSON.parse(data) : [];
  }
}
