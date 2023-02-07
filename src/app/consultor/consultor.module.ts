import { CompartilhadoModule } from './../compartilhado/compartilhado.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultorRoutingModule } from './consultor-routing.module';
import { ConsultorListaComponent } from './consultor-lista/consultor-lista.component';


@NgModule({
  declarations: [
    ConsultorListaComponent
  ],
  imports: [
    CommonModule,
    ConsultorRoutingModule,
    CompartilhadoModule
  ]
})
export class ConsultorModule { }
