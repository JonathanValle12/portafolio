import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../services/traductor.service';
import { ProyectosService } from '../../services/proyectos.service';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule aquí
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule], // Importa HttpClientModule aquí
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent implements OnInit {

  public proyectos: any[] = [];

  constructor(
    public _translationService: TranslationService,
    public _proyectosService: ProyectosService
    ) {}

  ngOnInit(): void {
    this._proyectosService.getProyectos().subscribe((proyectos) => {
      this.proyectos = proyectos;
    })
  }
  getTranslation(key: string): string {
    return this._translationService.getTranslation(key);
  }
}
