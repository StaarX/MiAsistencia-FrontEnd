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
  let token = usuarioService.getToken();
  if(token==null){
    return next.handle(req);
  }
    let tokenizeRequest= req.clone({
    setHeaders: {
      Authorization: token
    }
  })
  
  
  return next.handle(tokenizeRequest)
}

}
