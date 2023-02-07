import { Permissao } from 'src/app/permissao/model/permissao';
import { Observable, of, map } from 'rxjs';
import { UsuarioLogado } from './../../login/model/usuario-logado';
import { HttpClient } from '@angular/common/http';
import { SaddvHttp } from './../../compartilhado/servico/saddv-http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PermissaoService extends SaddvHttp<Permissao> {

  constructor(
    private http: HttpClient
  ) {
    super(http, 'permissoes');
  }

  acaoAutorizada(recurso: string, acao: string): boolean {
    const permissoes: Permissao[] = this.buscarPermissoesLocalStorage();
    const permissao = this.encotrarPermissaoRecursoAcao(permissoes, recurso, acao);
    return permissao != undefined;
  }

  moduloAutorizado(recurso: string): boolean {
    const permissoes: Permissao[] = this.buscarPermissoesLocalStorage();
    const permissao = this.encotrarPermissaoRecurso(permissoes, recurso)
    return permissao != undefined;
  }

  buscarTodasPermissoesUsuario(usuarioLogado: UsuarioLogado): Observable<Permissao[]> {
    if (!usuarioLogado) {
      return of([]);
    }

    return this.http.get<Permissao[]>(`${this.API}?perfil=${usuarioLogado.perfilId}`);
  }

  salvarPermissoesSessao(usuarioLogado: UsuarioLogado): Observable<void> {
    return this.buscarTodasPermissoesUsuario(usuarioLogado)
      .pipe(map( res => {
        this.adicionarPermissoesLocalStorage(res);
      }));
  }

  private adicionarPermissoesLocalStorage(permissoes: Permissao[]) {
    sessionStorage.setItem('permissoes', JSON.stringify(permissoes));
  }

  removerPermissoesLocalStorage() {
    sessionStorage.removeItem('permissoes');
  }

  buscarPermissoesLocalStorage() : Permissao[] | [] {
    const json = sessionStorage.getItem('permissoes')
    return json ? JSON.parse(json) : [];
  }

  encotrarPermissaoRecurso(lista: Permissao[], recurso: string) : Permissao| undefined {
    return lista.find(permissao => permissao.recurso == recurso);
  }

  encotrarPermissaoRecursoAcao(lista: Permissao[], recurso: string, acao: string) : Permissao| undefined {
    return lista.find(permissao => permissao.recurso == recurso && permissao.acao == acao);
  }
}
