import { Component, OnInit } from '@angular/core';
import {AlumnoService} from '../../servicios/alumno.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';


@Component({
  selector: 'app-registrar-asistencia',
  templateUrl: './registrar-asistencia.component.html',
  styleUrls: ['./registrar-asistencia.component.css']
})
export class RegistrarAsistenciaComponent implements OnInit {
  
  public token =localStorage.getItem('ACCESS_TOKEN');
  
  constructor(private alumno: AlumnoService, private usuarioServicio:UsuarioService) {
    
   }
   public suadero= this.usuarioServicio.mostrarDatosToken(this.token);
  public nombre= ''
  public id= ''
  public tipo= ''

   claseIniciada:Object={
    estado:'',
    res: '',
    clase:{
      asistentes:[],
      fecha:'',
      nombre: '',
      codigo:'',
      estado:''
    }
  }
  

  getDatos():void{
    if(this.suadero){
     this.nombre= this.suadero.nombre;
     this.id=this.suadero.id;
     this.tipo=this.suadero.tipo;
    }
  }

  ngOnInit() {
    this.alumno.comprobarClase().subscribe(
      res => {
        this.claseIniciada=res;
        console.log(this.claseIniciada)
      },
      err => console.error(err)
    );

    this.getDatos();
    
  }
  
  
  

}
