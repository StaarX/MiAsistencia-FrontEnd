import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../models/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { MaestroserviceService } from '../../servicios/maestroservice.service';
import {Clase} from "../../models/Clase";
@Component({
  selector: 'app-inicio-maestro',
  templateUrl: './inicio-maestro.component.html',
  styleUrls: ['./inicio-maestro.component.css']
})
export class InicioMaestroComponent implements OnInit {


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
  constructor(private usuarioServicio:UsuarioService, private maistro:MaestroserviceService) { }
  public token =localStorage.getItem('ACCESS_TOKEN');
  public suadero= this.usuarioServicio.mostrarDatosToken(this.token);
  public nombre= this.suadero.nombre;
  public id= this.suadero.id;
  public tipo= this.suadero.tipo;
  //public nombreClase= this.clase.nombre;
  
  clases: any = [];
  

  ngOnInit() {
    this.maistro.getClases().subscribe(
      res => {
        this.clases = res;
          console.log(res);
      }, 
      err => console.error(err)
    );
  }

  saveClase(){
    console.log(this.clase);
    this.claseID.id=this.clase.id;;
    console.log(this.claseID);
    const claseMaestro=this.maistro.iniciarClase(this.claseID).subscribe(
      res => {
        console.log(res) 
        //console.log("Clase Iniciada!")
      },
      err => console.error(err)     
    );
  }
  }




