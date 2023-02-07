import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AdsModule } from './../ads.module';
import { TestBed } from '@angular/core/testing';

import { AdsListaResolver } from './ads-lista.resolver';

describe('AdsListaResolver', () => {
  let resolver: AdsListaResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AdsModule, HttpClientTestingModule ]
    });
    resolver = TestBed.inject(AdsListaResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
