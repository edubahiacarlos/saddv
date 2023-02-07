import { TesteComponent } from './teste/teste.component';
import { AutorizadoGuard } from './guarda/autorizado.guard';
import { AutenticadoGuard } from './guarda/autenticado.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Title } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: 'teste', component: TesteComponent
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginModule),
  },
  {
    path: 'inicio',
    canActivate: [ AutenticadoGuard ],
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioModule),
  },
  {
    path: 'usuarios',
    data: { recurso: 'usuarios' },
    title: "SADDV - USUÁRIOS",
    canActivate: [ AutenticadoGuard, AutorizadoGuard ],
    canLoad: [ AutorizadoGuard ],
    loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule ),
  },
  {
    path: 'ads',
    data: { recurso: 'ads' },
    title: 'SADDV - ADS',
    //canActivate: [ AutenticadoGuard, AutorizadoGuard ],
    //canLoad: [ AutorizadoGuard ]
    loadChildren: () => import('./ads/ads.module').then( m => m.AdsModule)
  },
  {
    path: "consultor",
    data:  { recurso: "consultor" },
    loadChildren: () => import('./consultor/consultor.module').then( m => m.ConsultorModule)
  },
  {
    path: '**',
    canActivate: [ AutenticadoGuard ],
   // canLoad: [ UsuarioGuardaGuard ],
   loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
