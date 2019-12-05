import { Component, OnInit } from '@angular/core';
import { Clase } from 'src/app/models/Clase';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { MaestroserviceService } from 'src/app/servicios/maestroservice.service';

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
  clases: any = [];

claseIniciada:Object={
  codigo:'',
  estado:'',
  alumnos:[{
    nombre:''
  }],
  asistentes:[],
  clase:{
    alumnosins:[''],
  }
}

  constructor(private maistro:MaestroserviceService) { }

  ngOnInit() {
    this.maistro.comprobarClaseIniciada().subscribe(
      res => {
        this.claseIniciada=res;
          console.log(this.claseIniciada);
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
        console.log(res) 
      },
      err => console.error(err)     
    );
  }

}
