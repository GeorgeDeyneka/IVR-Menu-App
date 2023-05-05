import { TestBed } from '@angular/core/testing';

import { IvrCreatedGuard } from './ivr-created.guard';

describe('IvrCreatedGuard', () => {
  let guard: IvrCreatedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IvrCreatedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
