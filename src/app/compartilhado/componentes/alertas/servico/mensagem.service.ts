import { MensagemConfirmacao } from './../model/mensagem-confirmacao';
import { MensagemConfirmacaoComponent } from './../mensagem-confirmacao/mensagem-confirmacao.component';
import { MensagemErroComponent } from './../mensagem-erro/mensagem-erro.component';
import { MensagemErro } from '../model/mensagem-erro';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor(public dialog: MatDialog) { }

  abrirMensagemErro(erro: MensagemErro) {
    this.dialog.open(MensagemErroComponent, {
      data: { conteudo: erro.conteudo, status: erro.status, titulo: erro.titulo }
    });
  }

  abrirMensagemConfirmacao(mensagem: MensagemConfirmacao): MatDialogRef<MensagemConfirmacaoComponent> {
    const enterAnimationDuration: string = "500ms";
    const exitAnimationDuration: string = "500ms";

    return this.dialog.open(MensagemConfirmacaoComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
      data: mensagem,
    });
  }
}
