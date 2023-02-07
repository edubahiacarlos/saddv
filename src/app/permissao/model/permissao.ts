export class Permissao {
  id: number;
  recurso: string;
  acao: string;
  usuario: string;

  constructor(obj: any) {
    this.id = obj.id;
    this.recurso = obj.recurso;
    this.acao = obj.acao;
    this.usuario = obj.usuario;
  }

  static clone() : Permissao {
    return new Permissao({ id: 0, recuurso: '', acao: '', usuario: '' });
  }
}
