import { AdDadosLista } from './../model/ad-dados-lista';
import { UsuarioService } from './../../usuario/servico/usuario.service';
import { Usuario } from './../../usuario/model/usuario';
import { Ad } from './../model/ad';
import { AdService } from './../servico/ad.service';
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdsListaResolver implements Resolve<AdDadosLista> {
  constructor (
    private adServico: AdService,
    private usuarioServico: UsuarioService
  ) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AdDadosLista> {
    let adDadosLista = new AdDadosLista();

    return this.adServico.listar()
    .pipe(
      map( listaAd => {
        adDadosLista.listaAd = listaAd.sort( (a, b) => this.ordenarLista(a, b) )
        return adDadosLista;
      }),
      switchMap( (AdDadosLista: AdDadosLista) => {
        return this.usuarioServico.buscarPorIds(this.definirListaConsultores(AdDadosLista.listaAd));
      }),
      map( (listaConsultores: Usuario[]) => {
        listaConsultores.forEach( consultor => {
          adDadosLista.listaAd.forEach( ad => {
            if (ad.consultorId == consultor.id) {
                ad.consultor = consultor;
            }
          })
        })
        return adDadosLista;
      })
    );
  }

  private definirListaConsultores(lista: Ad[]) : number[] {
    let consultorAtual = 0;
        let consultorAnterior = 0;
        let listaConsultor: number[] = [];

        lista.forEach( ad => {
          consultorAtual = ad.consultorId
          if (consultorAnterior !== consultorAtual) {
            listaConsultor.push(consultorAtual);
          }

          consultorAnterior = consultorAtual;
        });

      return listaConsultor
  }

  private ordenarLista(a: Ad, b: Ad) : number{
    if (a.consultorId > b.consultorId) {
      return 1;
    }

    if (a.consultorId < b.consultorId) {
      return -1;
    }

    return 0;
  }
}
