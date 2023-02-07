import { Usuario } from './../../usuario/model/usuario';
export interface ConsultorAdLista {
  titulo: string;
  roteirista?: Usuario;
  status: string;
  roteiristaId: number;
}
