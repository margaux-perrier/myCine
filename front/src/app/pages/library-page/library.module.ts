import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryPageComponent } from './library-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { libraryReducer } from 'src/app/state/library/reducer/library.reducer';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MenuBurgerModule } from 'src/app/shared/components/menu-burger/menu-burger.module';

@NgModule({
  declarations: [
    LibraryPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MenuBurgerModule, 
    AppRoutingModule,
    StoreModule.forFeature('library', libraryReducer),
  ], 
  exports : [
    LibraryPageComponent,
  ]
})
export class LibraryModule { }
