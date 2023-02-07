import { UsuarioService } from './../servico/usuario.service';
import { Usuario } from './../model/usuario';
import { ValidacaoFormService } from './../../compartilhado/servico/validacao-form.service';
import { NonNullableFormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent implements OnInit {
  form = this.formBuild.group({
    id: [''],
    nome: ['', [ Validators.required ]],
    sobrenome: ['', [ Validators.required ]],
    email: ['', [ Validators.required, Validators.email ]],
    confirmarEmail: ['', [ Validators.required, Validators.email ]],
    perfilId: [0, [Validators.required]]
  });

  perfis: any[] = [
    { id: '1', nome: 'Administrador' },
    { id: '2', nome: 'Consultor' },
    { id: '3', nome: 'Roteirista' }
  ];

  constructor(
    private formBuild: NonNullableFormBuilder,
    private rota: Router,
    private rotaAtiva: ActivatedRoute,
    private mensagemErroForm: ValidacaoFormService,
    private usuarioServico: UsuarioService
  ) {}

  ngOnInit(): void {
    let usuario: Usuario = this.rotaAtiva.snapshot.data['usuario'];
    usuario = usuario ? usuario : Usuario.clone();

    this.form.setValue({
      id: usuario.id > 0 ? '' + usuario.id : '',
      nome: usuario.nome,
      sobrenome: usuario.sobrenome,
      email: usuario.email,
      confirmarEmail: usuario.email,
      perfilId: usuario.perfilId,

    })
  }

  voltarLista() {
    this.rota.navigate(['usuarios'])
  }

  salvar() {
    if (this.form.valid) {
      const usuario = new Usuario(this.form.value)
      this.usuarioServico.salvarAtualizar(usuario).subscribe({
        next: ( usuarioSalvo: Usuario) => {
          this.rota.navigate(['usuarios']);
        }
      });
    }
  }

  mensagemErro(campo: FormControl, tipoValidacao: string[]): string {
    return this.mensagemErroForm.mensagemErro(campo, tipoValidacao);
  }
}
