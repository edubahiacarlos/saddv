export class Ad {
  id: number;
  titulo: string;
  descricao: string;
  roteiristaId: number;
  consultorId: number;
  ad: string;
  status: string

  constructor(obj: any) {
    this.id = parseInt(obj.id)
    this.titulo = obj.titulo;
    this.descricao = obj.descricao;
    this.roteiristaId = obj.roteirista && obj.roteirista.id ? obj.roteirista.id: 0;
    this.consultorId = obj.consultor && obj.consultor.id ? obj.consultor.id : 0;
    this.ad = obj.ad;
    this.status = 'em-consultoria';
  }

  static clone() {
    return new Ad({ titulo: '', descricao: '', roteirista: { id: undefined }, consultor: { id: undefined }, ad: '' });
  }
}
