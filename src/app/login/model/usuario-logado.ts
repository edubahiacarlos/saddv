export class UsuarioLogado {
  id: number;
  nome: string = "";
  sobrenome: string = "";
  email: string = "";
  perfilId: number;

  constructor(obj: any) {
    this.id = obj.id;
    this.nome = obj.nome;
    this.sobrenome = obj.sobrenome;
    this.email = obj.email;
    this.perfilId = obj.perfilId
  }

  static clone(): UsuarioLogado {
    return new UsuarioLogado({id: 0, nome: "", sobrenome: "", email: "", perfilId: "" });
  }
}
