import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AdsModule } from './../ads.module';
import { TestBed } from '@angular/core/testing';

import { AdsResolver } from './ads.resolver';

describe('AdsResolver', () => {
  let resolver: AdsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AdsModule, RouterTestingModule, HttpClientTestingModule ]
    });
    resolver = TestBed.inject(AdsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
