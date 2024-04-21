import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../services/traductor.service';
import { HabilidadesService } from '../../services/habilidades.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.css'
})
export class HabilidadesComponent implements OnInit {

  public habilidades: any[] = [];

  constructor(
    public _translationService: TranslationService,
    private _habilidadesService: HabilidadesService) {}

  ngOnInit(): void {
    this._habilidadesService.getHabilidades().subscribe((habilidades) => {
      this.habilidades = habilidades;
    })
  }


  getTranslation(key: string): string {
    return this._translationService.getTranslation(key);
  }
}
