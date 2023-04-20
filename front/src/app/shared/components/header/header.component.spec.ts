import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { menuBurgerActions } from 'src/app/state/menuBurger';
import { ButtonComponent } from '../button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let mockStore : MockStore; 
  
  let initialState = {
    menuburger : {
      showMenuBurger : false
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent, ButtonComponent ], 
      providers : [
        provideMockStore({initialState}) , 
      ], 
      imports : [FontAwesomeModule, RouterTestingModule ]
    })
    .compileComponents();

    mockStore = TestBed.inject(MockStore);
    spyOn(mockStore, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch toggleMenuBurgerAction when handleClick is called', () => {
    const action = menuBurgerActions.toggleMenuBurgerAction(); 
    component.handleClick(); 
    expect(mockStore.dispatch).toHaveBeenCalledWith(action); 
  })

});
