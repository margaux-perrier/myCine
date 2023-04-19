import { ItemsPageComponent } from './items-page.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { filterActions } from 'src/app/state/filter';
import { itemsActions } from 'src/app/state/items';
import { Component } from '@angular/core';

describe('itemsPagesComponent', () => {
  let component: ItemsPageComponent;
  let fixture: ComponentFixture<ItemsPageComponent>;
  let mockStore : MockStore; 

  const initialState = {
    items : {
      genreList : [], 
      selectedGenreIdList : [], 
      error : ''
    }, 
    filter : {
      genreList : [
        { id: 1, name: 'drame', color: '#802FDE', background : '#E8E2F7'},
      ], 
      selectedGenreIdList : [], 
      error : ''
    }
  }

  @Component({
    selector: 'app-header',  
    template: '<div></div>'
  })
  class FakeHeaderComponent {
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsPageComponent, FooterComponent, FakeHeaderComponent ], 
      providers : [
        provideMockStore({initialState}),
      ]
    })
    .compileComponents();

    mockStore = TestBed.inject(MockStore);
    spyOn(mockStore, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(ItemsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch resetFilter when ngOnInit is called', () => {
    const action = filterActions.resetFilter(); 
    component.ngOnInit(); 
    expect(mockStore.dispatch).toHaveBeenCalledWith(action); 
  })

  it('should dispatch oadItemListAction when ngOnInit is called', () => {
    const action = itemsActions.loadItemListAction(); 
    component.ngOnInit(); 
    expect(mockStore.dispatch).toHaveBeenCalledWith(action); 
  })
});
