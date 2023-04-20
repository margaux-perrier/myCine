import { TestBed } from '@angular/core/testing';
import { ItemsService } from './items.service';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"

describe('ItemsService', () => {
  let service: ItemsService;
  let httpTestingController : HttpTestingController; 

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [ HttpClientTestingModule ], 
      providers : [ ItemsService ]
    });
    service = TestBed.inject(ItemsService);
    httpTestingController = TestBed.inject(HttpTestingController); 
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
