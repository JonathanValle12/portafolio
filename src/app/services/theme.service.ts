import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme: string = 'light'; // Inicialmente configurado en tema claro

  setTheme(theme: string) {
    this.currentTheme = theme;
    this.loadThemeCSS(theme); // Cargar el CSS del tema cada vez que se cambie
  }

  getCurrentTheme(): string {
    return this.currentTheme; // Devuelve el tema actual
  }

  private loadThemeCSS(theme: string) {
    const themeLink = document.getElementById('theme-link');
    if (themeLink) {
      themeLink.setAttribute('href', `assets/css/theme-${theme}.css`); // Actualizar el enlace del tema
    } else {
      const head = document.getElementsByTagName('head')[0];
      const newLink = document.createElement('link');
      newLink.setAttribute('id', 'theme-link');
      newLink.setAttribute('rel', 'stylesheet');
      newLink.setAttribute('type', 'text/css');
      newLink.setAttribute('href', `assets/css/theme-${theme}.css`);
      head.appendChild(newLink);
    }
  }
}
