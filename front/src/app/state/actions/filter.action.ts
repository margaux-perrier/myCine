import { createAction, props } from "@ngrx/store";
import { IGenre } from "src/app/core/models/genre";


export const loadFilterListAction = createAction('[GenreList] Load');

export const loadFilterListSuccessAction = createAction(
    '[genreList] Load Success',
    props<{ genreList: IGenre[] }>()
);
  
export const loadFilterListFailure = createAction(
  '[genreList] Load Fail',
  props<{ error: string }>()
);

export const selectedGenreAction = createAction(
  '[selectedGenreIdList] Add or remove GenreId', 
  props<{ selectedGenreId : number }>()
)

export const resetFilter = createAction(
  '[Filter] reset filter'
)


