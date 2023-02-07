import { PermissaoService } from '../permissao/servico/permissao.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutorizadoGuard implements CanActivate, CanLoad {

  constructor(private permissaoServico: PermissaoService) {
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (route.data && route.data['recurso']) {
      return this.verificarModulo(route.data['recurso']);
    }

    return false;
  }

  canActivate(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (childRoute.data && childRoute.data['recurso'] && childRoute.data['acao']) {
      return this.verificarAcao(childRoute.data['recurso'], childRoute.data['acao'])
    }

    if (childRoute.data && childRoute.data['recurso']) {
      return this.verificarModulo(childRoute.data['recurso']);
    }

    return false;
  }

  private verificarModulo(recurso: string) : boolean {
    return this.permissaoServico.moduloAutorizado(recurso);
  }

  private verificarAcao(recurso: string, acao: string) : boolean {
    return this.permissaoServico.acaoAutorizada(recurso, acao);
  }
}
