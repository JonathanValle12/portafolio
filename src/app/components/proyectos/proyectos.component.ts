import { Component } from '@angular/core';
import { TranslationService } from '../../services/traductor.service';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {

  
  constructor(public translationService: TranslationService) {}

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key);
  }
}
