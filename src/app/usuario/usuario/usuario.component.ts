import { PermissaoService } from './../../permissao/servico/permissao.service';
import { MensagemConfirmacao } from './../../compartilhado/componentes/alertas/model/mensagem-confirmacao';
import { MensagemService } from './../../compartilhado/componentes/alertas/servico/mensagem.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from './../model/usuario';
import { UsuarioService } from './../servico/usuario.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent {
  usuarios$: Observable<Usuario[]> | null = null;
  recurso: string = 'usuarios';
  exibirBotaoCriar: boolean = false;
  exibirBotaoEditar: boolean = false;
  exibirBotaoExcluir: boolean = false;
  exibirLista: boolean = false;

  constructor(
    private usuarioServico: UsuarioService,
    private rota: Router,
    private rotaAtiva: ActivatedRoute,
    private mensagemServico: MensagemService,
    protected permissaoServico: PermissaoService,
  ) {
    this.atualizarLista();
    this.pegarPermissoes();
  }

  pegarPermissoes() {
    this.exibirBotaoCriar = this.permissaoServico.acaoAutorizada(this.recurso, 'criar');
    this.exibirBotaoEditar = this.permissaoServico.acaoAutorizada(this.recurso, 'editar');
    this.exibirBotaoExcluir = this.permissaoServico.acaoAutorizada(this.recurso, 'excluir');
    this.exibirLista = this.permissaoServico.acaoAutorizada(this.recurso, 'listar');
  }

  atualizarLista() {
    this.usuarios$ = this.usuarioServico.listar();
  }

  abrirRota(recurso: string) {
    this.rota.navigate([recurso], { relativeTo: this.rotaAtiva });
  }

  confirmarExclusao(usuario: Usuario) {
    const dialogRef = this.mensagemServico.abrirMensagemConfirmacao(
      new MensagemConfirmacao({ titulo: `Excluir Usuário ${usuario.nome} ${usuario.sobrenome}`, mensagem: '' })
    );

    dialogRef.afterClosed().subscribe( (excluir: boolean ) => {
      if (excluir) {
        this.excluir(usuario)
      }
    });
  }

  excluir(usuario: Usuario) {
    this.usuarioServico.apagar(usuario.id).subscribe({
      complete:  () => {
        this.atualizarLista();
      },
      error: erro => {
        this.mensagemServico.abrirMensagemErro(
          {
            conteudo:'',
            status: `${erro.status} - ${erro.statusText}`,
            titulo: `ao Excluir Usuário ${usuario.nome}`
          }
        );
      }
    });
  }

  editar(usuario: Usuario) {
    this.rota.navigate(['editar', usuario.id], { relativeTo: this.rotaAtiva });
  }
}
