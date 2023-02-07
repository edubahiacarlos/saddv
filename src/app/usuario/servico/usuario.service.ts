import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './../model/usuario';
import { SaddvHttp } from './../../compartilhado/servico/saddv-http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends SaddvHttp<Usuario>{

  constructor(protected http: HttpClient) {
    super(http, 'usuarios');
  }

  buscarUsuariosPorPerfil(perfilId: number) : Observable<Usuario[]>{
    const url = `${this.API}?perfilId=${perfilId}`
    return this.http.get<Usuario[]>(url)
  }
}
