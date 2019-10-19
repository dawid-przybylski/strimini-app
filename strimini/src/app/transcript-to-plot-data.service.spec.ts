import { TestBed } from '@angular/core/testing';

import { TranscriptToPlotDataService } from './transcript-to-plot-data.service';

describe('TranscriptToPlotDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TranscriptToPlotDataService = TestBed.get(TranscriptToPlotDataService);
    expect(service).toBeTruthy();
  });
});
