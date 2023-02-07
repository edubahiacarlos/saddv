import { FormGroup, NonNullableFormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

enum MostrarConteudo {
  MENSAGEM = 'mensagem',
  IMAGEM = 'imagem'
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'exibicao-validacao',
  templateUrl: './exibicao-validacao.component.html',
  styleUrls: ['./exibicao-validacao.component.css']
})
export class ExibicaoValidacaoComponent {
  @Input() campo: FormControl = new FormControl;
  @Input() mostrar: string = '';

  mensagem: string = '';
  mensagemValidacao: any = {
    required: 'Campo Obrigatório.',
    email: 'Informe um email válido.',
    minlength: 'Número de caracteres inferior ao permitido.',
    maxlength: 'Número máximo de caracteres excedidos.',
    cpfInvalido: 'CPF Inválido.',
    equalTo: 'O campo deve ser igual ao campo anterior'
  };

  constructor(private formBuild: NonNullableFormBuilder) { }

  verificaErros(campo: FormControl, tipoValidacao: string) {
    if (campo.hasError(tipoValidacao)) {
      return this.mensagemValidacao[tipoValidacao];
    }

    return this.mensagem;
  }

  campoValido(campo: FormControl) {
    return campo.valid
  }
}
