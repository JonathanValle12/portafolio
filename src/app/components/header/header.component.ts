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

  showMenu: boolean = false;
  selectedLanguage: string = 'es';
  activeSection: string = 'inicio';

  constructor(private themeService: ThemeService, public translationService: TranslationService) {
    this.translationService.setLanguage('es');
   }

   @HostListener('window:scroll', [])
   onWindowsScroll(): void {
    this.setActiveSection();
   }

   setActiveSection(): void {
    const sections = ['inicio', 'sobre-mi', 'proyectos', 'habilidades', 'contacto'];
    const scrollPosition = window.pageYOffset;

    if (scrollPosition < 150) { 
      this.activeSection = 'inicio';
    } else {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionBottom = sectionTop + element.offsetHeight;

          if (scrollPosition >= sectionTop - 150 && scrollPosition < sectionBottom - 150) {
            this.activeSection = section;
          }
        }
      });
    }
}

scrollToSection(section: string): void {
  const element = document.getElementById(section);
  
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: 'smooth'
    });

    this.activeSection = section;
  }
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
  changeLanguage(language: string): void {
    //const language = event.target.value;
    this.selectedLanguage = language;
    this.translationService.setLanguage(language);
  }
  getTranslation(key: string): string {
    return this.translationService.getTranslation(key);
  }

  toggleMenu(): any {
    this.showMenu = !this.showMenu;
  }
}