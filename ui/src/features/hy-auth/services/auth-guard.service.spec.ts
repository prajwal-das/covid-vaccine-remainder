import {TestBed} from '@angular/core/testing';

import {HyAuthGuard} from './hy-auth-guard.service';

describe('AuthGuardService', () => {
  let service: HyAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HyAuthGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
