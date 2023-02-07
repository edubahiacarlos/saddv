import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ConsultorModule } from './../consultor.module';
import { TestBed } from '@angular/core/testing';

import { ConsultorListaResolver } from './consultor-lista.resolver';


describe(`${ConsultorListaResolver.name}`, () => {
  let resolver: ConsultorListaResolver;
  let route: any;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [ ConsultorModule, RouterTestingModule, HttpClientTestingModule ],
    }).compileComponents();

    resolver = TestBed.inject(ConsultorListaResolver);
  });

  it('deve criar o resolve', () => {
    expect(resolver).toBeTruthy();
  });
});
