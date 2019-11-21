import { Component, OnInit } from '@angular/core';
import {UsuarioService } from '../../servicios/usuario.service';
import { Router } from '@angular/router';
import { AlumnoService } from 'src/app/servicios/alumno.service';
@Component({
  selector: 'app-inicio-alumno',
  templateUrl: './inicio-alumno.component.html',
  styleUrls: ['./inicio-alumno.component.css']
})

export class InicioAlumnoComponent implements OnInit {
  constructor(
    private usuarioServicio: UsuarioService,
     private alumnoServicio:AlumnoService,
     private router: Router) { }
  public token =localStorage.getItem('ACCESS_TOKEN');
    public suadero= this.usuarioServicio.mostrarDatosToken(this.token);
    public nombre= this.suadero.nombre;
    public id= this.suadero.id;
    public tipo= this.suadero.tipo;
    
  ngOnInit() {
    
  }


  // registrarAsistencia(tokenAlumno:String){
  //   if(this.alumnoServicio.comprobarAsistencia(this.token)){
  //     this.router.navigateByUrl('/regAsist');
  //   }
    
    
  

}