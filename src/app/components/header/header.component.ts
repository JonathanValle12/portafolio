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

  isScrollingDown: boolean = false;

  constructor(private themeService: ThemeService, public translationService: TranslationService) {
    this.translationService.setLanguage('es');
   }

   @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.scrollHeight;

    // Calcula el porcentaje de desplazamiento
    const scrollPercentage = (scrollPosition / (fullHeight - windowHeight)) * 100;

    // Aplica la clase scrolling-down si el porcentaje es mayor que el 10%
    this.isScrollingDown = scrollPercentage > 30;
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
}
