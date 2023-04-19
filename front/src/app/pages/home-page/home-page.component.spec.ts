import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { HomePageComponent } from './home-page.component';
import { getShowMenuBurgerProperty } from 'src/app/state/menuBurger/selectors/menuburger.selectors';



describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let mockStore : MockStore; 

  let initialState = {
    menuburger : {
      showMenuBurger : false
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageComponent ], 
      providers : [
        provideMockStore({initialState}) , 
      ]
    })
    .compileComponents();

    mockStore = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
