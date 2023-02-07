import { AdForm } from './../model/ad-form';
import { Perfil } from './../../perfil/model/perfil';
import { UsuarioService } from './../../usuario/servico/usuario.service';
import { Usuario } from './../../usuario/model/usuario';
import { Observable, map, filter, distinctUntilChanged, debounceTime, switchMap } from 'rxjs';
import { ValidacaoFormService } from './../../compartilhado/servico/validacao-form.service';
import { NonNullableFormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { AdService } from '../servico/ad.service';
import { Ad } from '../model/ad';
import { AdDadosInicio } from '../model/ad-dados-inicio';

@Component({
  selector: 'app-ads-form',
  templateUrl: './ads-form.component.html',
  styleUrls: ['./ads-form.component.scss']
})
export class AdsFormComponent {
  form: FormGroup<AdForm>;
  perfis: Perfil[] = [];
  usuariosFiltrados$: Observable<Usuario[]> | null = null;

  constructor(
    private rota: Router,
    private rotaAtiva: ActivatedRoute,
    private formBuild: NonNullableFormBuilder,
    private mensagemErroForm: ValidacaoFormService,
    private usuarioServico: UsuarioService,
    private adServico: AdService,
  ) {
    const dados: AdDadosInicio = this.dadosInicio();
    this.form = this.atualizarForm(dados);
    this.perfis = this.atualizarPerfis(dados);
    this.carregarUsuariosPorPerfil();
  }

  protected voltarLista() {
    this.rota.navigate(['ads']);
  }

  public mensagemErro(campo: FormControl, tipoValidacao: string[]): string {
    return this.mensagemErroForm.mensagemErro(campo, tipoValidacao);
  }

  public salvar(form: FormGroup<AdForm>) {
    if (form.valid) {
      this.adServico.salvarAtualizar(new Ad(form.value)).subscribe({
        next: res => {
          this.rota.navigate(['ads'])
        }
      })
    }
  }

  protected mostrarNomeConsultor(consultor: Usuario): string {
    return consultor && consultor.nome ? consultor.nome : '';
  }

  private dadosInicio() : AdDadosInicio {
    const adDadosInicio: AdDadosInicio = this.rotaAtiva.snapshot.data['ad'];
    return adDadosInicio ? adDadosInicio : AdDadosInicio.clone();
  }

  private atualizarPerfis(ad: AdDadosInicio) : Perfil[] {
    return ad.perfis;
  }

  private atualizarForm(ad: AdDadosInicio) : FormGroup<AdForm> {
    return  this.formBuild.group({
      id: [ad.id],
      titulo: [ad.titulo, [Validators.required, Validators.maxLength(30)]],
      descricao: [ad.descricao],
      consultor: [ ad.consultor, [Validators.required]],
      roteirista: [ ad.roteirista ],
      ad: [ad.ad, [ Validators.required ]]
    });
  }

  private encontrarPerfil(nome: string): Perfil | undefined {
    return this.perfis.find( perfil => {
      return perfil.nome.toLowerCase() == nome.toLowerCase()
    })
  }

  private carregarUsuariosPorPerfil() {
    this.usuariosFiltrados$ = this.form.controls.consultor.valueChanges
    .pipe(
      map( consultor => {
        if (typeof consultor === 'string') {
          return consultor;
        }

        return '';
      }),
      filter( (letras: string) => letras.length > 0),
      distinctUntilChanged(),
      debounceTime(300),
      switchMap( (letras) => {
        console.log('ok');
        const perfil = this.encontrarPerfil('consultor');
        const perfilId = perfil && perfil.id? perfil.id: 0;
        return this.usuarioServico.buscarUsuariosPorPerfil(perfilId)
      })
    );
  }
}
