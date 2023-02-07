export class Usuario {
  id: number;
  nome: string;
  sobrenome: string;
  email: string;
  perfilId: number;

  constructor(usuario: any) {
    this.id = parseInt(usuario.id);
    this.nome = usuario.nome;
    this.sobrenome = usuario.sobrenome;
    this.email = usuario.email;
    this.perfilId = usuario.perfilId
  }

  static clone() {
    return new Usuario({ id: 0, nome: '', sobrenome: '', email: '', perfilId: '' });
  }
}
