import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { menuBurgerReducer } from 'src/app/state/menuBurger/reducer/menuburger.reducer';
import { MenuBurgerComponent } from './menu-burger.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [
    MenuBurgerComponent,
  ],
  imports: [
    SharedModule, 
    AppRoutingModule,
    StoreModule.forFeature('menuburger', menuBurgerReducer), 
  ], 
  exports : [
    MenuBurgerComponent,
  ]
})
export class MenuBurgerModule { }
