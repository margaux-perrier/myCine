import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibraryPageComponent } from './library-page.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { itemsActions } from 'src/app/state/items';
import { CarrouselComponent } from 'src/app/shared/components/carrousel/carrousel.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('LibraryComponent', () => {
  let component: LibraryPageComponent;
  let fixture: ComponentFixture<LibraryPageComponent>;
  let mockStore : MockStore; 

  const initialState = { 
    itemList : [], 
    currentItemId : null, 
    error : ''
  };

  @Component({
    selector: 'app-header',  
    template: '<div></div>'
  })
  class FakeHeaderComponent {
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryPageComponent, CarrouselComponent, FooterComponent, FakeHeaderComponent ], 
      imports: [ RouterTestingModule ], 
      providers : [
        provideMockStore({initialState}),
      ]
    })
    .compileComponents();

    mockStore = TestBed.inject(MockStore);
    spyOn(mockStore, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(LibraryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch loadItemListAction action when ngOnInit() is called', () => {
    const action = itemsActions.loadItemListAction(); 
    component.ngOnInit(); 
    expect(mockStore.dispatch).toHaveBeenCalledWith(action); 
  })
});
