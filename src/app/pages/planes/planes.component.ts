import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent {
  plans = [
    {
      name: 'Básico',
      price: '$9.99',
      features: [
        'Acceso a funciones básicas',
        'Soporte por correo electrónico',
        'Hasta 5 proyectos activos',
        '10GB de almacenamiento'
      ],
      ctaText: 'Empezar gratis',
      ctaLink: '/registro?plan=basico',
      recommended: false
    },
    {
      name: 'Profesional',
      price: '$19.99',
      features: [
        'Todas las funciones básicas',
        'Soporte prioritario',
        'Proyectos ilimitados',
        '50GB de almacenamiento',
        'Informes avanzados'
      ],
      ctaText: 'Prueba 7 días gratis',
      ctaLink: '/registro?plan=profesional',
      recommended: true
    },
    {
      name: 'Empresa',
      price: '$49.99',
      features: [
        'Todas las funciones profesionales',
        'Soporte 24/7',
        'Almacenamiento ilimitado',
        'Usuarios ilimitados',
        'Integraciones premium'
      ],
      ctaText: 'Contactar ventas',
      ctaLink: '/contacto',
      recommended: false
    }
  ];

  faqs = [
    {
      question: '¿Puedo cambiar de plan más tarde?',
      answer: 'Sí, puedes cambiar entre planes en cualquier momento desde tu panel de configuración.'
    },
    {
      question: '¿Hay un límite en el número de usuarios?',
      answer: 'El plan Básico permite hasta 3 usuarios, el Profesional hasta 10 y el Empresa usuarios ilimitados.'
    },
    {
      question: '¿Ofrecen descuentos para organizaciones sin fines de lucro?',
      answer: 'Sí, ofrecemos un 30% de descuento para organizaciones sin fines de lucro verificadas.'
    }
  ];
}