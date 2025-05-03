import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  contacto = {
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: ''
  };

  // Para mostrar errores solo si el campo fue tocado o modificado
  mostrarError(campo: any): boolean {
    return campo?.invalid && (campo?.touched || campo?.dirty);
  }

  enviarFormulario(form: NgForm) {
    if (form.valid) {
      console.log('Mensaje enviado:', this.contacto);

      // Guardar en localStorage (opcional)
      const mensajes = JSON.parse(localStorage.getItem('mensajesContacto') || '[]');
      mensajes.push(this.contacto);
      localStorage.setItem('mensajesContacto', JSON.stringify(mensajes));

      // Alerta SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'Mensaje enviado',
        text: '¡Gracias por contactarnos!',
        confirmButtonColor: '#f0ad4e'
      });

      // Limpiar el formulario
      form.resetForm();
    }
  }
}