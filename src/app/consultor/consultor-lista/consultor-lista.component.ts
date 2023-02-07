import { ConsultorDadosLista } from './../interface/consultor-dados-lista';
import { ConsultorAdLista } from './../interface/consultor-ad-lista';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-consultor-lista',
  templateUrl: './consultor-lista.component.html',
  styleUrls: ['./consultor-lista.component.scss']
})
export class ConsultorListaComponent {
  ads: ConsultorAdLista[] = [];
  displayedColumns: string[] = ['titulo', 'roteirista', 'acoes'];

  constructor(
    private rotaAtiva: ActivatedRoute
  ){
    this.ads = this.dadosInicio().listaAds;
  }

  private dadosInicio(): ConsultorDadosLista {
    const consultorDados: ConsultorDadosLista = this.rotaAtiva.snapshot.data['consultorLista'];
    return consultorDados ? consultorDados : ConsultorDadosLista.clone();
  }

  getListaAds() {
    return this.ads;
  }
}
