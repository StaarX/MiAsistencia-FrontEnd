import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../models/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { MaestroserviceService } from '../../servicios/maestroservice.service';
import {Clase} from "../../models/Clase";
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio-maestro',
  templateUrl: './inicio-maestro.component.html',
  styleUrls: ['./inicio-maestro.component.css']
})
export class InicioMaestroComponent implements OnInit {

  constructor(private usuarioServicio:UsuarioService,private router:Router) { }
  public token =localStorage.getItem('ACCESS_TOKEN');
  public suadero= this.usuarioServicio.mostrarDatosToken(this.token);
  public nombre= this.suadero.nombre;
  public id= this.suadero.id;
  public tipo= this.suadero.tipo;
  //public nombreClase= this.clase.nombre;
  
  clases: any = [];
  

  ngOnInit() {
  }

  paseLista(){
    this.router.navigateByUrl('/paseLista');
  }


  }




