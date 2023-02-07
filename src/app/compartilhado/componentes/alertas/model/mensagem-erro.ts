export class MensagemErro {
  titulo: string
  status: string;
  conteudo: string;

  constructor(obj: MensagemErro) {
    this.titulo = obj.titulo;
    this.conteudo = obj.conteudo;
    this.status = obj.status;
  }
}
