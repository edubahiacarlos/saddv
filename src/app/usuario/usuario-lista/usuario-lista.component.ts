import { UsuarioService } from './../servico/usuario.service';
import { Usuario } from './../model/usuario';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.scss']
})
export class UsuarioListaComponent {
  displayedColumns: string[] = ['nome', 'email', 'acoes'];
  @Input() usuarios: Usuario[] = [];
  @Input() exibirBotaoEditar = false;
  @Input() exibirBotaoExcluir = false;

  @Output() acaoExcluir = new EventEmitter(false);
  @Output() acaoEditar = new EventEmitter(false);

  constructor(private servico: UsuarioService) {}

  excluir(usuario: Usuario) {
    this.acaoExcluir.emit(usuario);
  }

  editar(usuario: Usuario) {
    this.acaoEditar.emit(usuario);
  }
}
