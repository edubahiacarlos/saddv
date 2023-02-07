import { AdsListaResolver } from './resolver/ads-lista.resolver';
import { AdDadosLista } from './model/ad-dados-lista';
import { AdsResolver } from './guardas/ads.resolver';
import { AdsFormComponent } from './ads-form/ads-form.component';
import { AdsListaComponent } from './ads-lista/ads-lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AdsListaComponent, resolve: { adDadosLista: AdsListaResolver } },
  { path: 'criar', component: AdsFormComponent, resolve: { ad: AdsResolver }},
  { path: 'editar/:id', component: AdsFormComponent, resolve: { ad: AdsResolver } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdsRoutingModule { }
