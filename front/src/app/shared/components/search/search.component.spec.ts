import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { filterActions } from 'src/app/state/filter';
import { ItemsService } from 'src/app/core/services/items/items.service';
import { ButtonComponent } from '../button/button.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let mockStore : MockStore; 
  const mockItemsService : ItemsService = jasmine.createSpyObj(['onSearchItems']);


  let initialState = {
    filter : {
      genreList : [], 
      selectedGenreIdList : [], 
      error : ''
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent, ButtonComponent ], 
      providers : [
        provideMockStore({initialState}),
        { provide : ItemsService, useValue : mockItemsService } 
      ], 
      imports : [ FormsModule, FontAwesomeModule ]
    })
    .compileComponents();

    mockStore = TestBed.inject(MockStore);
    spyOn(mockStore, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch resetFilter action when resetFilter is called', () => {
    const action = filterActions.resetFilter(); 
    component.resetFilter(); 
    expect(mockStore.dispatch).toHaveBeenCalledWith(action); 
  })

  it('should called onSearchItems method when ngOnInit is called with empty string value', () => {
    component.ngOnInit(); 
    expect(mockItemsService.onSearchItems).toHaveBeenCalledWith(''); 
  })

  it('should called onSearchItems method when onSearchValueChanged is called', () => {
    component.onSearchValueChanged(); 
    expect(mockItemsService.onSearchItems).toHaveBeenCalled(); 
  })


});
