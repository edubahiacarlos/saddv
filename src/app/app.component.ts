import { Usuario } from './usuario/model/usuario';
import { PermissaoService } from './permissao/servico/permissao.service';
import { UsuarioLogado } from './login/model/usuario-logado';
import { LoginService } from './login/servico/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'saddv';
//  loginService$: Subscription | undefined
  logado$: Observable<boolean>;
  usuarioEstaLogado: boolean = false;
  exibirMenuUsuario: boolean = true;
  usuarioLogado: Usuario = new Usuario({});
  tema: string | null = null;

  constructor(
    private loginServico: LoginService,
    private rota: Router,
    private permissaoServico: PermissaoService
  ) {
    this.logado$ = loginServico.getLogado();
    this.configuracaoInicial();
    this.sair();
  }

  ngOnInit(): void {
    this.getTema();
     this.logado$.subscribe({
       next: (resultado: boolean) => {
        this.usuarioEstaLogado = resultado;
        this.configuracaoInicial();
      },
      error: () => this.usuarioEstaLogado = false
    });
  }

  mostrarMenu(): boolean {
    return this.usuarioEstaLogado;
  }

  mostrarBotaoMenu() {
    this.exibirMenuUsuario = this.permissaoServico.moduloAutorizado('usuarios');
  }

  redirecionar(): void {
    if (this.mostrarMenu()) {
      this.rota.navigate(['/inicio']);
    } else {
      this.rota.navigate(['/login']);
    }
  }

  configuracaoInicial(): void {
    if (this.usuarioEstaLogado) {
      const t = this.permissaoServico.salvarPermissoesSessao(this.loginServico.usuarioLogado()).subscribe({
        complete: () => {
          this.buscarUsuarioLogado();
          this.mostrarBotaoMenu();

          t.unsubscribe();
        }
      });
    }

    this.mostrarMenu();
    this.redirecionar();
  }

  sair() {
    this.permissaoServico.removerPermissoesLocalStorage();
    this.loginServico.sair();
  }

  buscarUsuarioLogado() : UsuarioLogado {
    this.usuarioLogado = this.loginServico.usuarioLogado();
    return this.usuarioLogado
  }

  getTema() {
    this.tema = sessionStorage.getItem('tema');

    if (typeof this.tema !== 'string') {
      this.tema = 'temaPadrao'
    }
  }
}
