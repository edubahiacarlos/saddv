import { FormControl } from '@angular/forms';
import { Usuario } from '../../usuario/model/usuario';

export class AdForm {
  id: FormControl<number | undefined>;
  titulo: FormControl<string>;
  descricao: FormControl<string>;
  roteirista: FormControl<Usuario>;
  consultor: FormControl<Usuario>;
  ad: FormControl<string>;

  constructor(obj: any) {
    this.id = obj.id && obj.id != '' ? obj.id: undefined;
    this.titulo = obj.titulo;
    this.descricao = obj.descricao;
    this.roteirista = obj.roteirista;
    this.consultor = obj.consultor;
    this.ad = obj.ad;
  }
}
