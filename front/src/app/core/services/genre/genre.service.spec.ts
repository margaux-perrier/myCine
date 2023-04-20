import { TestBed } from '@angular/core/testing';

import { GenreService } from './genre.service';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"

describe('GenreService', () => {
  let service: GenreService;
    let httpTestingController : HttpTestingController; 

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [ HttpClientTestingModule ], 
      providers : [ GenreService ]
    });
    service = TestBed.inject(GenreService);
    httpTestingController = TestBed.inject(HttpTestingController); 

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
