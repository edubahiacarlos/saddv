import { FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidacaoFormService {

  mensagem: any = {
    required: 'Campo Obrigatório.',
    email: 'Informe um email válido.',
    minlength: 'Número de caracteres inferior ao permitido.',
    maxlength: 'Número máximo de caracteres excedidos.'
  };

  mensagemErro(campo: FormControl, tipoValidacao: string[]): string {
    let msg = ''
    tipoValidacao.forEach( validacao => {
      if (campo.hasError(validacao)) {
        msg = this.mensagem[validacao];
      }
    })

    return msg;
  }

}
