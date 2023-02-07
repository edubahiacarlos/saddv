import { LoginService } from './../login/servico/login.service';
import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticadoGuard implements CanActivate {
  usuarioEstaLogado: boolean = false;
  login$: Observable<boolean>;

  constructor(private loginService: LoginService, private rota: Router){
    this.login$ = loginService.getLogado();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return this.loginService.usuarioEstaLogado().pipe(map( res => {
        if (!res) {
          this.rota.navigate(['/login']);
        }

        return res;
      }));
  }
}
