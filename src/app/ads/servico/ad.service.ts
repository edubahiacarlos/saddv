import { Consultor } from './../../consultor/modelo/consultor';
import { Observable, switchMap, map, tap, take } from 'rxjs';
import { Ad } from './../model/ad';
import { SaddvHttp } from './../../compartilhado/servico/saddv-http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdService extends SaddvHttp<Ad> {

  constructor(private http: HttpClient) {
    super(http, 'ad');
  }
}
