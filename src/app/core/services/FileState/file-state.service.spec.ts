import { TestBed } from '@angular/core/testing';

import { FileStateService } from './file-state.service';

describe('FileStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FileStateService = TestBed.get(FileStateService);
    expect(service).toBeTruthy();
  });
});
