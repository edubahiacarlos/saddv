import { LoginService } from './../../login/servico/login.service';
import { AdLista } from './../model/ad-lista';
import { MensagemConfirmacao } from './../../compartilhado/componentes/alertas/model/mensagem-confirmacao';
import { MensagemService } from './../../compartilhado/componentes/alertas/servico/mensagem.service';
import { Ad } from './../model/ad';
import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { AdService } from '../servico/ad.service';
import { AdDadosLista } from '../model/ad-dados-lista';

@Component({
  selector: 'app-ads-lista',
  templateUrl: './ads-lista.component.html',
  styleUrls: ['./ads-lista.component.scss']
})
export class AdsListaComponent {
  ads: AdLista[] = [];
  displayedColumns: string[] = ['titulo', 'consultor', 'acoes'];

  constructor(
    private rota: Router,
    private rotaAtiva: ActivatedRoute,
    private adServico: AdService,
    private loginServico: LoginService,
    private mensagemServico: MensagemService
  ) {
    this.atualizarLista();
  }

  private dadosInicio() : AdDadosLista {
    const adDadosLista: AdDadosLista = this.rotaAtiva.snapshot.data['adDadosLista'];
    return adDadosLista ? adDadosLista : AdDadosLista.clone();
  }

  atualizarLista() {
    this.ads = this.dadosInicio().listaAd;
  }

  abrirTelaCriarAd() {
    this.rota.navigate(['criar'], { relativeTo: this.rotaAtiva })
  }

  confirmarExclusao(ad: Ad) {
    const dialogRef = this.mensagemServico.abrirMensagemConfirmacao(
      new MensagemConfirmacao({ titulo: `Excluir AD ${ad.titulo}`, mensagem: '' })
    );

    dialogRef.afterClosed().subscribe( (excluir: boolean ) => {
      if (excluir) {
        this.excluir(ad)
      }
    });
  }

  excluir(ad: Ad) {
    if (ad.id == undefined) {
      return;
    }

    this.adServico.apagar(ad.id).subscribe({
      complete:  () => {
        this.atualizarLista();
      },
      error: erro => {
        this.mensagemServico.abrirMensagemErro(
          {
            conteudo:'',
            status: `${erro.status} - ${erro.statusText}`,
            titulo: `ao Excluir AD ${ad.titulo}`
          }
        );
      }
    });
  }

  editar(ad: Ad) {
    this.rota.navigate(['editar', ad.id], { relativeTo: this.rotaAtiva })
  }

  desabilitarBotaoEdicao(ad: AdLista) {
    if (ad.status === 'em-consultoria' && this.loginServico.usuarioLogado().perfilId === 3) {
      return true;
    }

    return false;
  }
}
