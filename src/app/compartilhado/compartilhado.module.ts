import { ExibicaoValidacaoModule } from './exibicao-validacao/exibicao-validacao.module';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagemErroComponent } from './componentes/alertas/mensagem-erro/mensagem-erro.component';
import { MensagemConfirmacaoComponent } from './componentes/alertas/mensagem-confirmacao/mensagem-confirmacao.component';
import { ClickEnterDirective } from './diretiva/click-enter.directive';



@NgModule({
  declarations: [
    MensagemErroComponent,
    MensagemConfirmacaoComponent,
    ClickEnterDirective
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    AngularMaterialModule,
    ExibicaoValidacaoModule,
  ],
  exports: [
    AngularMaterialModule,
    ExibicaoValidacaoModule,
    ClickEnterDirective
  ]
})
export class CompartilhadoModule { }
