export class Perfil {
  id: number;
  nome: string;

  constructor(obj: any) {
    this.id = parseInt(obj.id);
    this.nome = obj.nome;
  }
}
