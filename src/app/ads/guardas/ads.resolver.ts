import { PerfilService } from './../../perfil/perfil.service';
import { LoginService } from './../../login/servico/login.service';
import { AdDadosInicio } from '../model/ad-dados-inicio';
import { UsuarioService } from './../../usuario/servico/usuario.service';
import { AdService } from '../servico/ad.service';
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, switchMap, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdsResolver implements Resolve<AdDadosInicio> {

  constructor(
    private adServico: AdService,
    private usuarioServico: UsuarioService,
    private loginService: LoginService,
    private perfilServico: PerfilService
  ){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AdDadosInicio> {

    if (route.params && route.params['id']) {
      let dados: any = {};

        return this.adServico.buscarPorId(route.params['id'])
        .pipe(
          switchMap( ad => {
            dados = ad;
            return this.usuarioServico.buscarPorId(ad.consultorId)
          }),
          switchMap( consultor => {
            dados.consultor = consultor;
            return this.usuarioServico.buscarPorId(dados.roteiristaId)
          }),
          switchMap( (roteirista) => {
            dados.roteirista = roteirista;
            return this.perfilServico.listar();
          }),
          map( perfis => {
            dados.perfis = perfis;
            return new AdDadosInicio(dados);
          })
        );
    }

    let adDadosInicio = AdDadosInicio.clone();
    adDadosInicio.roteirista = this.loginService.usuarioLogado();

    return of(adDadosInicio)
    .pipe(
      switchMap( () => {
        return this.perfilServico.listar();
      }),
      map( perfis => {
        adDadosInicio.perfis = perfis
        return adDadosInicio;
      })
    );
  }
}
