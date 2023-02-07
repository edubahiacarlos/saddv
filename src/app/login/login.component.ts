import { UsuarioLogado } from './model/usuario-logado';
import { MensagemErro } from '../compartilhado/componentes/alertas/model/mensagem-erro';
import { MensagemErroComponent } from './../compartilhado/componentes/alertas/mensagem-erro/mensagem-erro.component';
import { MatDialog } from '@angular/material/dialog';
import { Login } from './model/login';
import { LoginService } from './servico/login.service';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  form = this.formBuild.group({
    email: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
    senha: ['', [Validators.required]]
  });

  hide = true;
  mensagemBotao = 'Mostrar Senha';

  constructor(
    private formBuild: NonNullableFormBuilder,
    private loginServico: LoginService,
    public dialog: MatDialog
  ) {
  }
  ngOnInit(): void {
   // sessionStorage.setItem('nome', 'bbb2023');
    // let t = sessionStorage.getItem('nome');

    // if (!t) {
    //   t = 'Não pegou';
    // }

    // const erro  = { conteudo: t.toString(), status: '125', titulo: 'Teste' };
    //       this.alertaErro(erro);
  }



  logar() {
    if (this.form.valid) {
      const login = new Login();
      login.email = this.form.value.email ? this.form.value.email: '';
      login.senha = this.form.value.senha ? this.form.value.senha: '';

      this.loginServico.fazerlogar(login).subscribe({
        next: (usuarioLogado: UsuarioLogado) => {
          this.loginServico.logar(usuarioLogado);
        },
        error: (erro) => {
          erro  = { conteudo: erro.message, status: erro.status, titulo: '' };
          this.alertaErro(erro);
        }
      })

    }

  }

  prepararBotao() {
    this.hide = !this.hide
    if (this.hide) {
      this.mensagemBotao = 'Mostrar Senha';
    } else {
      this.mensagemBotao = 'Ocultar Senha';
    }
  }

  validarCampos(campo: FormControl, nomeCampo: string) {
    if (campo.hasError('required')) {
      return `O campo ${nomeCampo} é obrigatório`
    }

    if (campo.hasError('email')) {
      return `Email inválido!`
    }

    if (campo.hasError('maxlength')) {
      const tamanhoMaximo: number = campo.errors ? campo.errors['maxlength']['requiredLength'] : 200;
      return `O tamanho do campo ${nomeCampo} não deve ser maior que ${tamanhoMaximo}`
    }

    return '';
  }

  alertaErro(erro: MensagemErro) {
    this.dialog.open(MensagemErroComponent, {
      data: { conteudo: erro.conteudo, status: erro.status, titulo: erro.titulo }
    });
  }
}
