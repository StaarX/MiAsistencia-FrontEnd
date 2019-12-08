import { Component, OnInit } from '@angular/core';
import { Clase } from 'src/app/models/Clase';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { MaestroserviceService } from 'src/app/servicios/maestroservice.service';
import { ClaseIniciada } from 'src/app/models/ClaseIniciada';
import { ClaseAsistencia } from 'src/app/models/ClaseAsistencia';

@Component({
  selector: 'app-pase-lista',
  templateUrl: './pase-lista.component.html',
  styleUrls: ['./pase-lista.component.css']
})
export class PaseListaComponent implements OnInit {
  clase: Clase = {
    id: '',
    nombre: '',
    horarioinicio: '',
    horariofin: '',
    dias:'',
    maestro:'',
    alumnosins:''
  };

  claseID: Clase ={
    id: ''
  }
  alumnID: Clase ={
    id: ''
  }
  clases: any = [];

public claseA:ClaseAsistencia={
  codigo:'',
  estado:'',
  alumnos:[{
    id:''
  }],
  asistentes:[],
  clase:{
    alumnosins:[],
  }
}




  constructor(private maistro:MaestroserviceService) { }

  ngOnInit() {
    this.maistro.comprobarClaseIniciada().subscribe(
      res => {
       this.claseA=res;
        
          console.log(this.claseA);
      }, 
      err => console.error(err)
    );
    

    this.maistro.getClases().subscribe(
      res => {
        this.clases = res;
          console.log(res);
      }, 
      err => console.error(err)
    );
    
  }

  saveClase(){
    this.claseID.id=this.clase.id;
    const claseMaestro=this.maistro.iniciarClase(this.claseID).subscribe(
      res => {
        this.claseA=res;
        console.log(res) 
      },
      err => console.error(err)     
    );
  }

  finalizarClase(){
    this.claseID.id=this.clase.id;
    const claseMaestro=this.maistro.finalizarClase(this.claseID).subscribe(
      res => {
        console.log(res) 
      },
      err => console.error(err)     
    );
  }


  darAsistencia(asistencia:Clase){
    this.alumnID={
      id:asistencia.id
    }
    this.maistro.darAsistencia(this.alumnID).subscribe(
      res => {
        console.log(res) 
      },
      err => console.error(err)     
    );
  }
  quitarAsistencia(asistencia:Clase){
    this.alumnID={
      id:asistencia.id
    }
    this.maistro.quitarAsistencia(this.alumnID).subscribe(
      res => {
        console.log(res) 
      },
      err => console.error(err)     
    );
  }

  

}
