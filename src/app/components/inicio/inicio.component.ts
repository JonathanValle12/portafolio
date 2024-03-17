import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SobreMiComponent } from '../sobre-mi/sobre-mi.component';
import { ProyectosComponent } from '../proyectos/proyectos.component';
import { HabilidadesComponent } from '../habilidades/habilidades.component';
import { ContactoComponent } from '../contacto/contacto.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [HeaderComponent, SobreMiComponent, ProyectosComponent, HabilidadesComponent, ContactoComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
