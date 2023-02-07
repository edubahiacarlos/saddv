import { of, switchMap } from 'rxjs';
import { Usuario } from './../model/usuario';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsuarioModule } from './../usuario.module';
import { TestBed } from '@angular/core/testing';

import { UsuarioService } from './usuario.service';

describe('UsuarioService', () => {
  let service: UsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ UsuarioModule, RouterTestingModule, HttpClientTestingModule ]
    });
    service = TestBed.inject(UsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Novo 1', () => {
    const lista: Usuario[] = [{
      id: 1,
      nome: 'Carlos',
      sobrenome: 'Eduardo',
      email: 'edu@com.br',
      perfilId: 1
    }]
    spyOn(service, 'listar').and.returnValue(of(lista));

    service.listar().subscribe( (res) => {
      expect(lista).toEqual(res)
    });



  });
});
