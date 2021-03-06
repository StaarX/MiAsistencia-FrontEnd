import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {UsuarioService} from '../servicios/usuario.service'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(private usuarioServicio:UsuarioService,private router:Router){

}

  canActivate(){
if (this.usuarioServicio.getToken()){
return true;
}else {
  this.router.navigateByUrl('/login');
  return false;
}
  }
  
}