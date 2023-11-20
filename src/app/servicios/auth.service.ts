import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GlobalService } from './globalService';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private globalService: GlobalService) { }

  setUsuario(user:any){
    localStorage.setItem('usuario', JSON.stringify(user));
  }

  estaAutentificado(){
    return this.getUsuario() != null;
  }

  getUsuario(){
    let userStr = localStorage.getItem('usuario');
    if(userStr != null){
      return JSON.parse(userStr);
    }else{
      return null;
    }
  }

  getCargo(){
    let usuario = this.getUsuario();
    if(usuario != null){
      if(usuario.cargo != null){
        return usuario.cargo.idCargo;
      }
    }
    return 0;
  }

  esCargoAdmin(){
    return this.globalService.cargo_admin == this.getCargo();
  }
  esCargoObrero(){
    return this.globalService.cargo_obrero == this.getCargo();
  }
  esCargoSecretario(){
    return this.globalService.cargo_secretario == this.getCargo();
  }

  removerLogin(){
    localStorage.removeItem('expira');
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    return false;
  }

  setToken(token:any){
    localStorage.setItem('token',token);
  }
  setExpira(expira:any){
    localStorage.setItem('expira',expira);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  validarExpiracionToken(){
    if (localStorage.getItem('expira') == null) {
      return false;
    }
    const expiracion = new Date(localStorage.getItem('expira')!);
    return (expiracion > new Date());
  }

}
