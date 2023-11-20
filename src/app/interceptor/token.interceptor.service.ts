import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { AlertifyService } from '../servicios/alertify.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private auth: AuthService,
              private alerta: AlertifyService,
              private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(!this.auth.validarExpiracionToken() && this.auth.estaAutentificado()){
      this.auth.removerLogin();
      this.alerta.error('La sesión ha caducado!');
      window.location.href = '/login';
    }

    return next.handle(req);
  }
}
