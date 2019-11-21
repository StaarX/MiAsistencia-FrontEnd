import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Observable, BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  API_URI = 'http://localhost:3000';
  authSubject = new BehaviorSubject(false);
  private token: string;


  constructor(private http: HttpClient) { }


  comprobarAsistencia(token:String):Observable<String>{
    return this.http.get<string>(`${this.API_URI}/maestro/comprobarClaseIniciada`).pipe(tap(
      (res: string)=>{
      if (res){
        console.log(res);
      }
    })
    );
  }

}
