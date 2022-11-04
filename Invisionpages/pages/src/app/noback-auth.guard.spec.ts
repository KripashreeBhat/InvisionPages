import { TestBed } from '@angular/core/testing';

import { NobackAuthGuard } from './noback-auth.guard';

describe('NobackAuthGuard', () => {
  let guard: NobackAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NobackAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
