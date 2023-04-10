import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryPageComponent } from './library-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { libraryReducer } from '../../state/reducers/library.reducers';

@NgModule({
  declarations: [
    LibraryPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule, 
    StoreModule.forFeature('library', libraryReducer),
  ], 
  exports : [
    LibraryPageComponent,
  ]
})
export class LibraryModule { }
