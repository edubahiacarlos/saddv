import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, take } from 'rxjs';

export class SaddvHttp<T> {
  readonly API = 'http://10.0.0.181:3000/' + this.recurso;

  constructor(private httpCliente: HttpClient, private recurso: string ){}

  listar(parametros?: HttpParams): Observable<T[]> {
    return this.httpCliente.get<T[]>(this.API, { params: parametros }).pipe(take(1));
  }

  salvarAtualizar(obj: any): Observable<T> {
    if (obj.id) {
      return this.atualizar(obj, obj.id);
    }

    return this.salvar(obj).pipe(take(1));
  }

  salvar(objeto: T): Observable<T>{
    return this.httpCliente.post<T>(this.API, objeto).pipe(take(1));
  }

  atualizar(objeto: T, id: number): Observable<T>{
    return this.httpCliente.put<T>(`${this.API}/${id}`, objeto).pipe(take(1));
  }

  apagar(id: number): Observable<void>{
    return this.httpCliente.delete<void>(`${this.API}/${id}`).pipe(take(1));
  }

  buscarPorId(id: number) : Observable<T> {
    return this.httpCliente.get<T>(`${this.API}/${id}`).pipe(take(1));
  }

  buscarPorIds(ids: number[]) : Observable<T[]> {
    return this.httpCliente.get<T[]>(`${this.API}`, { params: new HttpParams().appendAll( { 'id': ids }) }).pipe(take(1));
  }

  teste(parametros: HttpParams): Observable<T>{
    return this.httpCliente.put<T>(`${this.API}/${parametros.get('id')}`, { params: parametros }).pipe(take(1));
  }

  teste1(parametros: HttpParams): Observable<T>{
    return this.httpCliente.post<T>(this.API, { params: parametros }).pipe(take(1));
  }
}
