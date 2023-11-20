import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../servicios/auth.service';
import { GlobalService } from '../servicios/globalService';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminSecretarioGuard implements CanActivate {

  constructor(private auth: AuthService,
              private globalService:GlobalService,
              private router:Router){
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.auth.estaAutentificado() &&
      (this.auth.getCargo() == this.globalService.cargo_admin ||
      this.auth.getCargo() == this.globalService.cargo_secretario) ){
      return true;
    }else{
      this.router.navigate(['login']);
    }

    return false;
  }
}