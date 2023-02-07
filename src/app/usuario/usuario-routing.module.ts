import { AutenticadoGuard } from './../guarda/autenticado.guard';
import { AutorizadoGuard } from '../guarda/autorizado.guard';
import { UsuarioResolver } from './resolver/usuario.resolver';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UsuarioComponent,
    canActivateChild: [ AutorizadoGuard, AutenticadoGuard ],
  },
  {
    path: 'criar',
    data: { acao: 'criar' },
    component: UsuarioFormComponent,
    resolve: { usuario: UsuarioResolver },
    canActivate: [ AutenticadoGuard, AutorizadoGuard ],
  },
  {
    path: 'editar/:id',
    data: { acao: 'editar' },
    component: UsuarioFormComponent,
    resolve: {usuario: UsuarioResolver},
    canActivate: [ AutenticadoGuard, AutorizadoGuard ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
