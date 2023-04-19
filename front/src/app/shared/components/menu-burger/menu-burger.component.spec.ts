import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuBurgerComponent } from './menu-burger.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { menuBurgerActions } from 'src/app/state/menuBurger';
import { ButtonComponent } from '../button/button.component';

describe('MenuBurgerComponent', () => {
  let component: MenuBurgerComponent;
  let fixture: ComponentFixture<MenuBurgerComponent>;
  let mockStore : MockStore; 

  let initialState = {
    menuburger : {
      showMenuBurger : true
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBurgerComponent, ButtonComponent ],
      providers : [
        provideMockStore({initialState}) , 
      ]
    })
    .compileComponents();

    mockStore = TestBed.inject(MockStore);
    spyOn(mockStore, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(MenuBurgerComponent);
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
