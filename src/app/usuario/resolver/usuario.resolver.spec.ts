import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsuarioModule } from './../usuario.module';
import { TestBed } from '@angular/core/testing';

import { UsuarioResolver } from './usuario.resolver';

describe('UsuarioResolver', () => {
  let resolver: UsuarioResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ UsuarioModule, RouterTestingModule, HttpClientTestingModule ]
    });
    resolver = TestBed.inject(UsuarioResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
