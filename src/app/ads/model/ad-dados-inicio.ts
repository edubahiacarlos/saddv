import { Perfil } from '../../perfil/model/perfil';
import { Usuario } from '../../usuario/model/usuario';

export class AdDadosInicio {
  id?: number;
  titulo: string;
  descricao: string;
  roteirista: Usuario;
  consultor: Usuario;
  ad: string;
  status: string
  perfis: Perfil[];

  constructor(obj: any) {
    this.id = obj.id && obj.id != '' ? obj.id: undefined;
    this.titulo = obj.titulo;
    this.descricao = obj.descricao;
    this.roteirista = obj.roteirista;
    this.consultor = obj.consultor;
    this.ad = obj.ad;
    this.status = 'em-consultoria';
    this.perfis = obj.perfis
  }

  static clone() {
    return new AdDadosInicio(
      { titulo: '',
        descricao: '',
        ad: '',
        roteirista: { id: undefined, nome: '' },
        consultor: { id: undefined, nome: '' },
        perfis: []
      }
    );
  }
}
