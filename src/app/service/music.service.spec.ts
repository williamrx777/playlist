/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MusicService } from './music.service';

describe('Service: Music.service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MusicService]
    });
  });

  it('should ...', inject([MusicService], (service: MusicService) => {
    expect(service).toBeTruthy();
  }));
});
