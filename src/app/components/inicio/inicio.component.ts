import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SobreMiComponent } from '../sobre-mi/sobre-mi.component';
import { ProyectosComponent } from '../proyectos/proyectos.component';
import { HabilidadesComponent } from '../habilidades/habilidades.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { TranslationService } from '../../services/traductor.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [HeaderComponent, SobreMiComponent, ProyectosComponent, HabilidadesComponent, ContactoComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  constructor(public translationService: TranslationService, private http: HttpClient) {}


  getTranslation(key: string): string {
    return this.translationService.getTranslation(key);
  }

  downloadCV():void {
    const url = 'assets/img/Curriculum_Vitae_extenso.pdf';
    
    this.http.get(url, { responseType: 'arraybuffer'}).subscribe((data: ArrayBuffer) => {
      const blob = new Blob([data], {type: 'application/pdf'});

      const downloadLink = document.createElement('a');
      const objectURL = URL.createObjectURL(blob);

      downloadLink.href = objectURL;
      downloadLink.download = 'curriculum_vitae_extenso.pdf';

      document.body.appendChild(downloadLink);
      downloadLink.click();

      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(objectURL);

    })
  }
}
