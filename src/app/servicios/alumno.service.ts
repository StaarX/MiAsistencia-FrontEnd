import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Observable, BehaviorSubject} from 'rxjs';
import { UsuarioService } from '../servicios/usuario.service';
import { Codigo } from '../models/Codigo';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  API_URI = 'http://localhost:3000';
  authSubject = new BehaviorSubject(false);
  private token= localStorage.getItem('ACCESS_TOKEN');

  constructor(private http: HttpClient, private uS:UsuarioService) { }

  comprobarClase(){
    return this.http.get(`${this.API_URI}/estudiante/comprobarClaseIniciada`)     
  }

  registrarClase(codigo:Codigo):Observable<string>{
    return this.http.post(`${this.API_URI}/estudiante/registrarAsistencia`,codigo).pipe(tap(
      (res: string)=>{
        console.log(res);
      })
      );

}

}
