import { UsuarioService } from './../servico/usuario.service';
import { Usuario } from './../model/usuario';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioResolver implements Resolve<Usuario> {

  constructor(private usuarioServico: UsuarioService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Usuario> {

    if (route.params && route.params['id']) {
      return this.usuarioServico.buscarPorId(route.params['id']);
    }

    return of(Usuario.clone());
  }
}
