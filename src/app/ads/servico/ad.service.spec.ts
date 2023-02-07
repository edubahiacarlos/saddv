import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AdsModule } from './../ads.module';
import { TestBed } from '@angular/core/testing';

import { AdService } from './ad.service';

describe('AdService', () => {
  let service: AdService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AdsModule, RouterTestingModule, HttpClientTestingModule ]
    });
    service = TestBed.inject(AdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
