import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { HomePageComponent } from './home-page.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { Component, Directive, Input } from '@angular/core';
import { Location } from '@angular/common'; 
import { RouterTestingModule } from '@angular/router/testing';
import { ItemsPageComponent } from '../items-page/items-page.component';
import { By } from '@angular/platform-browser';
// import { Router } from '@angular/router';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let mockStore : MockStore; 
  let mockLocation : Location
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

  @Directive({
    selector: '[routerLink]',
    host: { '(click)': 'onClick()'} // host listener qui écoute le host event
  })
  class RouterLinkDirectiveStub {
    @Input('routerLink') routerLinkValue: any;
    linkValue : any = null  
    
    onClick() {
      this.linkValue = this.routerLinkValue;
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageComponent, FooterComponent, FakeHeaderComponent, ButtonComponent, RouterLinkDirectiveStub ], 
      imports : [ 
        RouterTestingModule.withRoutes([
          { path : 'movies', component: ItemsPageComponent}, 
          { path : 'series', component: ItemsPageComponent}
        ])
      ], 
      providers : [
        provideMockStore({initialState}),
        { provide : Location, useValue  : mockLocation }  
      ]
    })
    .compileComponents();
    
    mockLocation = TestBed.inject(Location);
    mockStore = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to moviesPages when the button is clicked', () => {
    const button = fixture.debugElement.query(By.css('.button--movies')); 
    expect(button).toBeTruthy(); 
    expect(button.nativeElement.textContent.trim()).toBe('Voir les films'); 
    button.triggerEventHandler('click', null);
    expect(button.injector.get(RouterLinkDirectiveStub).linkValue).toBe('/movies')
  }); 

  it('should navigate to seriesPages when the button is clicked', () => {
    const button = fixture.debugElement.query(By.css('.button--series')); 
    expect(button).toBeTruthy(); 
    expect(button.nativeElement.textContent.trim()).toBe('Voir les séries'); 
    button.triggerEventHandler('click', null);
    expect(button.injector.get(RouterLinkDirectiveStub).linkValue).toBe('/series')
  }); 


});
