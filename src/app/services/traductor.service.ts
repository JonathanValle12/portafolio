// translation.service.ts

import { Injectable } from '@angular/core';
import { Translations, TRANSLATIONS_ES, TRANSLATIONS_EN } from '../components/translations';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguage = 'en';

  setLanguage(language: string): void {
    this.currentLanguage = language;
  }

  getTranslation(key: string): string {
    const translations: Translations = this.currentLanguage === 'en' ? TRANSLATIONS_EN : TRANSLATIONS_ES;
    return translations[key] || key;
  }
}
