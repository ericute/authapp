import { TestBed, inject } from '@angular/core/testing';

import { AuthgardService } from './authguard.service';

describe('AuthgardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthgardService]
    });
  });

  it('should be created', inject([AuthgardService], (service: AuthgardService) => {
    expect(service).toBeTruthy();
  }));
});
