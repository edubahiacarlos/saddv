import { MensagemErro } from '../model/mensagem-erro';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mensagem-erro',
  templateUrl: './mensagem-erro.component.html',
  styleUrls: ['./mensagem-erro.component.scss']
})
export class MensagemErroComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public mensagem: MensagemErro){}
}
