import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private proyectosURL = 'assets/data/proyectos.json';

  constructor(private http: HttpClient) { }

  getProyectos(): Observable<any[]> {
    return this.http.get<any[]>(this.proyectosURL);
  }
}
