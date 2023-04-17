import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { filterListEffects } from 'src/app/state/filter/effect/filter.effects';
import { filterReducer } from 'src/app/state/filter/reducer/filter.reducer'; 

@NgModule({
  declarations: [
    FilterComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('filter', filterReducer),
    EffectsModule.forFeature( [filterListEffects ])
  ], 
  exports: [
    FilterComponent
  ]
})
export class FilterModule { }
