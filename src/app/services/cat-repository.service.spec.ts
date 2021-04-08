import { TestBed } from '@angular/core/testing';

import { CatRepositoryService } from './cat-repository.service';

describe('CatRepositoryService', () => {
  let service: CatRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
