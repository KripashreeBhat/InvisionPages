import { TestBed } from '@angular/core/testing';

import { NobackAuthService } from './noback-auth.service';

describe('NobackAuthService', () => {
  let service: NobackAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NobackAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
