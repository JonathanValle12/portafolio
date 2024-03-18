import { Component } from '@angular/core';
import { TranslationService } from '../../services/traductor.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  constructor(public translationService: TranslationService) {}


  getTranslation(key: string): string {
    return this.translationService.getTranslation(key);
  }
}
