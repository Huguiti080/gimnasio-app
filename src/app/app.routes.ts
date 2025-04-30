import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClasesComponent } from './pages/clases/clases.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'clases', component: ClasesComponent },
    { path: 'servicios', component: ServiciosComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
