import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardListComponent } from './card-list.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Component } from '@angular/core';

describe('CardListComponent', () => {
  let component: CardListComponent;
  let fixture: ComponentFixture<CardListComponent>;
  let mockStore : MockStore; 

  let initialState = {
    items : {
      genreList : [], 
      selectedGenreIdList : [], 
      error : ''
    }
  }

   @Component({
    selector: 'app-search',  
    template: '<div></div>'
    })
    class FakeSearchComponent {
    }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardListComponent, FakeSearchComponent ], 
      providers : [
        provideMockStore({initialState}),  
      ]
    })
    .compileComponents();
    mockStore = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(CardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
