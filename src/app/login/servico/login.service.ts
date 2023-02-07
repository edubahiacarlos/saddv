import { UsuarioLogado } from './../model/usuario-logado';
import { map, Observable, Subject, of, take } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SaddvHttp } from './../../compartilhado/servico/saddv-http';
import { Injectable } from '@angular/core';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends SaddvHttp<UsuarioLogado> {
  novoLogado: Subject<boolean> = new Subject();

  constructor(private http: HttpClient) {
    super(http, 'login');
  }

  fazerlogar(login: Login) :Observable<UsuarioLogado> {
    let params: HttpParams = new HttpParams().append('senha', login.senha);
    params = params.append('email', login.email);

    const url = `${this.API}`
    return this.http.get<UsuarioLogado[]>(url, { params }).pipe(map( res => {

      if (res.length > 0 ){
        return new UsuarioLogado(res[0]);
      }

      return UsuarioLogado.clone();
    }));
  }

  adicionarUsuarioLogadoLocalStorage(usuarioLogado: UsuarioLogado) {
    sessionStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));
  }

  removerUsuarioLogadoLocalStorage() {
    sessionStorage.removeItem('usuarioLogado');
  }

  logar(usuarioLogado: UsuarioLogado) : boolean {
    if (usuarioLogado.id) {
      this.adicionarUsuarioLogadoLocalStorage(usuarioLogado);
      this.setLogado(true);
      return true;
    }

    return false;
  }

  sair() {
    this.removerUsuarioLogadoLocalStorage();
    this.setLogado(false);
  }

  usuarioLogado(): UsuarioLogado {
    let usuario = sessionStorage.getItem('usuarioLogado');
    return usuario ? JSON.parse(usuario) : null;
  }

  getLogado() :Observable<boolean> {
    return this.novoLogado.asObservable();
  }

  setLogado(valor: boolean) {
    this.novoLogado.next(valor);
  }

  usuarioEstaLogado() : Observable<boolean> {
    const usuario = this.usuarioLogado();
    if (!usuario) {
      this.setLogado(false);
      return of(false);
    }
    const url = 'http://10.0.0.181:3000/usuarios/?email=' + usuario.email;

    return this.http.get(url).pipe(map( (res: any) => {
      if (res.length > 0) {
        return true;
      }

      return false;
    } ));
  }
}
