import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Observable, BehaviorSubject} from 'rxjs';
import { UsuarioService } from '../servicios/usuario.service';
import { Clase } from '../models/Clase'


@Injectable({
  providedIn: 'root'
})
export class MaestroserviceService {
  API_URI = 'http://localhost:3000';
  

  constructor(private http: HttpClient) {
    
    
   }

   getClases(){
     return this.http.get(`${this.API_URI}/maestro/clases`)
   }

   iniciarClase(id: Clase){
     console.log(id);
     return this.http.post(`${this.API_URI}/maestro/iniciarClase`,id)
   }

   finalizarClase(id: Clase){
    console.log(id);
    return this.http.post(`${this.API_URI}/maestro/finalizarClase`,id)
  }

   comprobarClaseIniciada(){
    return this.http.get(`${this.API_URI}/maestro/comprobarClaseIniciada`)
   }

   darAsistencia(id: Clase){
     return this.http.post(`${this.API_URI}/maestro/registrarAsistencia`,id);
   }

   quitarAsistencia(id: Clase){
    return this.http.post(`${this.API_URI}/maestro/eliminarAsistencia`,id);
   } 

 
}
