import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  private habilidadesURL = 'assets/data/habilidades.json';

  constructor(private http: HttpClient) { }
 
  getHabilidades():Observable<any[]> {
    return this.http.get<any>(this.habilidadesURL);
  }
}
