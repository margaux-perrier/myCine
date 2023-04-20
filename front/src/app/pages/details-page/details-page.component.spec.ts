import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsPageComponent } from './details-page.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TagComponent } from 'src/app/shared/components/tag/tag.component';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'; 
import { itemsActions } from 'src/app/state/items';
import { libraryActions } from 'src/app/state/library';
import { By } from '@angular/platform-browser';
import {FontAwesomeTestingModule} from '@fortawesome/angular-fontawesome/testing';
import { getCurrentItem } from 'src/app/state/items/selectors/items.selectors';
import { DurationPipe } from 'src/app/shared/pipes/duration/duration.pipe';
import { RatingModule } from 'primeng/rating';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


describe('DetailsPageComponent', () => {
  let component: DetailsPageComponent;
  let fixture: ComponentFixture<DetailsPageComponent>;
  let mockStore : MockStore; 
  let mockActivatedRoute; 
  let mockLocation : Location; 

  const initialState = {
    items : {
      genreList : [], 
      selectedGenreIdList : [], 
      error : ''
    }, 
    library : {
      favorisIdList : [],   
      watchedIdList : [],
      wishIdList : [],   
      error : '',  
    }
  }

  let mockCurrentItemSelector; 

  beforeEach(async () => {

    mockActivatedRoute = {
      snapshot : { paramMap : { get : () => { return '3'; }}}
    }

    mockLocation = jasmine.createSpyObj('mockLocation', ['back']); 

    await TestBed.configureTestingModule({
      declarations: [ DetailsPageComponent, TagComponent, DurationPipe ],
      providers : [
        provideMockStore({initialState}),
        { provide : ActivatedRoute, useValue  : mockActivatedRoute }, 
        { provide : Location, useValue  : mockLocation } 
      ], 
      imports: [ FontAwesomeTestingModule, RatingModule, BrowserAnimationsModule, FormsModule ] 
 
    })
    .compileComponents();

    mockStore = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(DetailsPageComponent);
    mockCurrentItemSelector = mockStore.overrideSelector( getCurrentItem, {
        id : 2, 
        name : 'foehe', 
        producerId : 2, 
        actorIds : [10,11,12], 
        avatar : 'foehe.png', 
        year : 2021, 
        duration: 101,
        description : 'Latius iam disseminata licentia onerosus bonis omnibus Caesar nullum post haec adhibens modum orientis latera cuncta vexabat nec honoratis.',
        type : 'film', 
        genreIds : [3],
        rating : 4,
        classification : 'tous publics'
      });

    component = fixture.componentInstance;
    spyOn(mockStore, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  afterEach(() => {
    TestBed.inject(MockStore)?.resetSelectors();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call back() method from location when handleClose is called ', () => {
    component.handleClose(); 
    expect(mockLocation.back).toHaveBeenCalled(); 
  }); 

  it('should dispatch setCurrentItem action when ngOnInit is called', () => {
    const id = 3; 
    const action = itemsActions.setCurrentItem( { currentItemId : id } ); 
    component.ngOnInit(); 
    expect(mockStore.dispatch).toHaveBeenCalledWith(action); 
  }); 

  it('should dispatch loadItemListAction action when ngOnInit is called', () => { 
    const action = itemsActions.loadItemListAction(); 
    component.ngOnInit(); 
    expect(mockStore.dispatch).toHaveBeenCalledWith(action); 
  })

   it('should dispatch handleListAction when handleClick is called ', () => {
    const action = libraryActions.handleListAction({name : 'favorisIdList', idItem : 3 })
    const icon = fixture.debugElement.query(By.css('#favorisIdList')); 
    expect(icon).toBeTruthy();   
    icon.nativeElement.dispatchEvent(new Event('click')); 
    expect(mockStore.dispatch).toHaveBeenCalledWith(action)
  }); 

  it('should dispatch setRatingItem action when handleRating is called', () => {
    const action = itemsActions.setRatingItem( { ratingValue : 3 } ); 
    component.ratingValue = 3; 
    component.handleRating(); 
    expect(mockStore.dispatch).toHaveBeenCalledWith(action); 
  })
});
