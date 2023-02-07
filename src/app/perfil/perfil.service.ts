import { HttpClient } from '@angular/common/http';
import { Perfil } from './model/perfil';
import { SaddvHttp } from './../compartilhado/servico/saddv-http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerfilService extends SaddvHttp<Perfil> {

  constructor(protected http: HttpClient) {
    super(http, 'perfil');
   }
}
