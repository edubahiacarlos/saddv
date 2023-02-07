import { ConsultorAdLista } from './consultor-ad-lista';

export class ConsultorDadosLista {
  listaAds: ConsultorAdLista[] = [];

  static clone() : ConsultorDadosLista {
    return new ConsultorDadosLista();
  }
}
