import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Observable, BehaviorSubject} from 'rxjs';
import { UsuarioService } from '../servicios/usuario.service';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
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

}
