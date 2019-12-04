import { Injectable, Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import {UsuarioService} from '../servicios/usuario.service';
import { MaestroserviceService } from '../servicios/maestroservice.service'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private injector:Injector) { }

intercept ( req, next){
  let usuarioService= this.injector.get(UsuarioService);
  //let maestroservice= this.injector.get(MaestroserviceService);
  let tokenizeRequest= req.clone({
    setHeaders: {
      Authorization: usuarioService.getToken()
    }
  })
  
  
  return next.handle(tokenizeRequest)
}

}
