import { Component, OnInit } from '@angular/core';
import {AlumnoService} from '../../servicios/alumno.service';


@Component({
  selector: 'app-registrar-asistencia',
  templateUrl: './registrar-asistencia.component.html',
  styleUrls: ['./registrar-asistencia.component.css']
})
export class RegistrarAsistenciaComponent implements OnInit {
  
  public token =localStorage.getItem('ACCESS_TOKEN');
  
  constructor(private alumno: AlumnoService) {
    
   }

  ngOnInit() {
    this.alumno.comprobarClase().subscribe(
      res => {
        console.log(res)
      },
      err => console.error(err)
    );
    
  }
  
  
  

}
