import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-mensagem-confirmacao',
  templateUrl: './mensagem-confirmacao.component.html',
  styleUrls: ['./mensagem-confirmacao.component.scss']
})
export class MensagemConfirmacaoComponent {
  constructor(
    public dialogRef: MatDialogRef<MensagemConfirmacaoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
}
