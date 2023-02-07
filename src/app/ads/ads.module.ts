import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsRoutingModule } from './ads-routing.module';
import { AdsListaComponent } from './ads-lista/ads-lista.component';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { AdsFormComponent } from './ads-form/ads-form.component';


@NgModule({
  declarations: [
    AdsListaComponent,
    AdsFormComponent
  ],
  imports: [
    CommonModule,
    AdsRoutingModule,
    CompartilhadoModule
  ]
})
export class AdsModule { }
