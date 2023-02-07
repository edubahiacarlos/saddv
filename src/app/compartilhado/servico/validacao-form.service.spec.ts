import { FormControl, Validators } from '@angular/forms';
import { TestBed } from '@angular/core/testing';

import { ValidacaoFormService } from './validacao-form.service';

describe(`${ValidacaoFormService.name}`, () => {
  let service: ValidacaoFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidacaoFormService);
  });

  it('Deve criar o serviço', () => {
    expect(service).toBeTruthy();
  });

  it(`#${ValidacaoFormService.prototype.mensagemErro.name}
      => Deve retornar a mensagem: O campo é obrigatório quando valor do input for vazio
     `, () => {
    const mensagem = service.mensagemErro(new FormControl('', [ Validators.required ]), ['required']);
    expect('Campo Obrigatório.').toEqual(mensagem);
  });

  it(`#${ValidacaoFormService.prototype.mensagemErro.name}
      => Deve retornar a mensagem Informe um email válido quando o campo não for um email .
     `, () => {
    const mensagem = service.mensagemErro(new FormControl('edu.com.br', [ Validators.email ]), ['email']);
    expect('Informe um email válido.').toEqual(mensagem);
  });

  it(`#${ValidacaoFormService.prototype.mensagemErro.name}
      => Deve retornar a mensagem Número de caracteres inferior ao permitido, quando o campo não tiver o mínimo de caracteres exigidos.
     `, () => {
    const mensagem = service.mensagemErro(new FormControl('carlos', [ Validators.minLength(10) ]), ['minlength']);

    expect('Número de caracteres inferior ao permitido.').toEqual(mensagem);
  });

  it(`#${ValidacaoFormService.prototype.mensagemErro.name}
      => Deve retornar a mensagem Número máximo de caracteres excedidos, quando o campo tiver mais caracteres do que o permitido.
     `, () => {
    const mensagem = service.mensagemErro(new FormControl('carlos', [ Validators.maxLength(3) ]), ['maxlength']);

    expect('Número máximo de caracteres excedidos.').toEqual(mensagem);
  });

  it(`#${ValidacaoFormService.prototype.mensagemErro.name}
      => Deve retornar um valor vazio quuando o campo for válido.
     `, () => {
    const mensagem = service.mensagemErro(new FormControl('Valor do Campo', [ Validators.required ]), ['required']);
    expect('').toEqual(mensagem);
  });

});
