export class MensagemConfirmacao {
  titulo: string;
  mensagem: string;

  constructor(obj: MensagemConfirmacao) {
    this.titulo = obj.titulo;
    this.mensagem = obj.mensagem;
  }
}
