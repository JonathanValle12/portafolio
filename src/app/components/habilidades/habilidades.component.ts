import { Component } from '@angular/core';
import { TranslationService } from '../../services/traductor.service';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.css'
})
export class HabilidadesComponent {

  constructor(public translationService: TranslationService) {}


  getTranslation(key: string): string {
    return this.translationService.getTranslation(key);
  }
}
