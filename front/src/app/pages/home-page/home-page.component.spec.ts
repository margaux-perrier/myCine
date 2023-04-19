import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { HomePageComponent } from './home-page.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { Component } from '@angular/core';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let mockStore : MockStore; 

  let initialState = {
    menuburger : {
      showMenuBurger : false
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
      declarations: [ HomePageComponent, FooterComponent, FakeHeaderComponent, ButtonComponent ], 
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
