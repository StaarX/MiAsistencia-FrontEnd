import { Component, OnInit } from '@angular/core';
import {AlumnoService} from '../../servicios/alumno.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Codigo } from 'src/app/models/Codigo';
import { Clase } from 'src/app/models/Clase';
import { ClaseIniciada } from 'src/app/models/ClaseIniciada';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-registrar-asistencia',
  templateUrl: './registrar-asistencia.component.html',
  styleUrls: ['./registrar-asistencia.component.css']
})
export class RegistrarAsistenciaComponent implements OnInit {
  
  public token =localStorage.getItem('ACCESS_TOKEN');
  
  constructor(private alumno: AlumnoService, 
              private usuarioServicio:UsuarioService, 
              public flashMessage: FlashMessagesService ) {
    
   }
   public suadero= this.usuarioServicio.mostrarDatosToken(this.token);
  public nombre= ''
  public id= ''
  public tipo= ''


  claseI:Clase ={
    id:''
  }
  claseIniciada:ClaseIniciada={
    estado:'',
    res: '',
    clase:{
      asistentes:[],
      fecha:'',
      nombre: '',
      codigo:'',
      estado:'',
      idmaestro:'',
      id:''
  }
}
  codigoAsist:Codigo ={
    clase:'',
    maestro:'',
    codigo:''
    
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

  

  registrarAsistencia(form){
    console.log(form.value);
    const codigoFront = form.value;
    this.codigoAsist.codigo=codigoFront.codigo;
    this.codigoAsist.maestro=this.claseIniciada.clase.idmaestro;
    this.codigoAsist.clase=this.claseIniciada.clase.id;
    
    console.log(this.codigoAsist);
    
    this.alumno.registrarClase(this.codigoAsist).subscribe(
      res => {
        console.log(res);
        this.flashMessage.show('HAS REGISTRADO ASISTENCIA '+this.suadero.nombre, { cssClass: 'alert-success', timeout: 4000 });
      },
      
      err => this.flashMessage.show('Ya has marcado asistencia a esta clase '+ err, { cssClass: 'alert-warning', timeout: 4000 })
      
    );
  }
  
  

}
