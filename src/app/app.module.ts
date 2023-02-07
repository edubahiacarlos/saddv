import { TesteModule } from './teste/teste.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CompartilhadoModule } from './compartilhado/compartilhado.module';
import { PermissaoComponent } from './permissao/permissao.component';


@NgModule({
  declarations: [
    AppComponent,
    PermissaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CompartilhadoModule,
    HttpClientModule,
    TesteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
