import { AdsModule } from './../ads.module';
import { TestBed } from '@angular/core/testing';

import { AdsGuard } from './ads.guard';

describe('AdsGuard', () => {
  let guard: AdsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AdsModule ]
    });
    guard = TestBed.inject(AdsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
