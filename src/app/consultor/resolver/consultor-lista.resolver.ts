import { Usuario } from './../../usuario/model/usuario';
import { UsuarioService } from './../../usuario/servico/usuario.service';
import { ConsultorAdLista } from './../interface/consultor-ad-lista';
import { ConsultorDadosLista } from './../interface/consultor-dados-lista';
import { AdDadosInicio } from './../../ads/model/ad-dados-inicio';
import { LoginService } from './../../login/servico/login.service';
import { AdService } from './../../ads/servico/ad.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, map, switchMap } from 'rxjs';
import { ConsultorService } from '../servico/consultor.service';
import { HttpParams } from '@angular/common/http';
import { Ad } from 'src/app/ads/model/ad';

@Injectable({
  providedIn: 'root'
})
export class ConsultorListaResolver implements Resolve<ConsultorDadosLista> {

  constructor(
    private adServico: AdService,
    private loginServico: LoginService,
    private usuarioServico: UsuarioService
  ){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ConsultorDadosLista> {
    let consultorDadosLista: ConsultorDadosLista = new ConsultorDadosLista();

    return this.adServico.listar(new HttpParams().append('consultorId', this.loginServico.usuarioLogado().id))
    .pipe(
      map( (ad: Ad[]) => {
        consultorDadosLista.listaAds = ad.sort( (a, b) => this.ordenarLista(a, b) )
        return consultorDadosLista;
      }),
      switchMap( (AdDadosLista: ConsultorDadosLista) => {
        return this.usuarioServico.buscarPorIds(this.definirListaRoteirista(AdDadosLista.listaAds));
      }),
      map( (roteiristas: Usuario[]) => {
        roteiristas.forEach(roteirista =>{
          consultorDadosLista.listaAds.forEach( ad => {
            if (roteirista.id == ad.roteiristaId) {
              ad.roteirista = roteirista
            }
          })
        })

        return consultorDadosLista;
      }),
    )
  }

  private definirListaRoteirista(lista: ConsultorAdLista[]) : number[] {
    let roteiristaAtual = 0;
    let roteiristaAnterior = 0;
    let listaRoteirista: number[] = [];

    lista.forEach( ad => {
      roteiristaAtual = ad.roteiristaId
      if (roteiristaAnterior !== roteiristaAtual) {
        listaRoteirista.push(roteiristaAtual);
      }

      roteiristaAnterior = roteiristaAtual;
    });

    return listaRoteirista
  }

  private ordenarLista(a: Ad, b: Ad) : number{
    if (a.roteiristaId > b.roteiristaId) {
      return 1;
    }

    if (a.roteiristaId < b.roteiristaId) {
      return -1;
    }

    return 0;
  }
}
