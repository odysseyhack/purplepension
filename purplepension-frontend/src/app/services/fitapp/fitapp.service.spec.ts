import { TestBed } from '@angular/core/testing';

import { FitappService } from './fitapp.service';

describe('FitappService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FitappService = TestBed.get(FitappService);
    expect(service).toBeTruthy();
  });
});
