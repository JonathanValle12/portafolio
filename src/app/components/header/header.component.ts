import { Component, HostListener, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { TranslationService } from '../../services/traductor.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private themeService: ThemeService, public translationService: TranslationService) {
    this.translationService.setLanguage('es');
   }

  toggleTheme() {
    const currentTheme = this.themeService.getCurrentTheme();
    // Cambiar al tema oscuro
    if (currentTheme === 'dark') {
      this.themeService.setTheme('light');
    } else {
      this.themeService.setTheme('dark');
    }
  }
  isLightTheme(): boolean {
    return this.themeService.getCurrentTheme() === 'light';
  }
  changeLanguage(event: any): void {
    const language = event.target.value;
    this.translationService.setLanguage(language);
  }

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key);
  }

  abrirMenu(): any {
    const icono = document.getElementById('menu');
    icono?.addEventListener('click', () => {
      
        if (document.querySelector<HTMLElement>('#menus')) {
          
        //document.querySelector<HTMLElement>('#menus')?.style.backgroundColor = 'block';
        }
    });
  }
}
