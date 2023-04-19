import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { FilterComponent } from './filter.component';
import { filterActions } from 'src/app/state/filter';
import { By } from '@angular/platform-browser';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;
  let mockStore : MockStore; 

  let initialState = {
    filter : {
      genreList : [
        { id: 1, name: 'drame', color: '#802FDE', background : '#E8E2F7'},
      ], 
      selectedGenreIdList : [], 
      error : ''
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterComponent ], 
      providers : [
        provideMockStore({initialState}),
      ]
    })
    .compileComponents();

    mockStore = TestBed.inject(MockStore);
    spyOn(mockStore, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch loadFilterListAction when ngOnInit is called', () => {
    const action = filterActions.loadFilterListAction(); 
    component.ngOnInit(); 
    expect(mockStore.dispatch).toHaveBeenCalledWith(action); 
  })

  it('should dispatch selectedGenreAction when onSelected is called', () => {
    const action = filterActions.selectedGenreAction( { selectedGenreId: 1 } ); 
    let target : { id : 1 }
    
    const checkboxInput = fixture.debugElement.query(By.css('input')); 
    expect(checkboxInput).toBeTruthy()
    let spy = spyOn(component, 'onSelected'); 
    checkboxInput.triggerEventHandler('click', {target : { id : 1}}); 
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
    
  })

});
