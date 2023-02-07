import { Ad } from './ad';

export class AdDadosLista {
  listaAd: any[] = [];

  static clone() : AdDadosLista {
    return new AdDadosLista();
  }
}
