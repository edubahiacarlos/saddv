import { ConsultorListaResolver } from './resolver/consultor-lista.resolver';
import { ConsultorListaComponent } from './consultor-lista/consultor-lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "", component: ConsultorListaComponent, resolve: { consultorLista: ConsultorListaResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultorRoutingModule { }
