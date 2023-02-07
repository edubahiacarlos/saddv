import { HttpClient } from '@angular/common/http';
import { Consultor } from './../modelo/consultor';
import { SaddvHttp } from './../../compartilhado/servico/saddv-http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultorService extends SaddvHttp<Consultor>{

  constructor(private http: HttpClient) {
    super(http, 'consultor');
   }
}
