import { createFeatureSelector, createSelector,} from "@ngrx/store";
import { FilterListState } from "../reducer/filter.reducer";

const getFilterFeatureState = createFeatureSelector<FilterListState>('filter'); 

/**
* @method getGenreList
* @description  selector acess to genreList property
*/
export const getGenreList = createSelector(
    getFilterFeatureState, 
    state => state.genreList
); 

/**
* @method getErrorGenre
* @description  selector acess to error property
*/
export const getErrorGenre = createSelector(
    getFilterFeatureState, 
    state => state.error
)

/**
* @method getSelectedGenreIdList
* @description  selector acess to the selected genre id list 
* @returns { number[] } genreIdList 
*/
export const getSelectedGenreIdList = createSelector(
    getFilterFeatureState, 
    getGenreList, 
    (state, genreList) => {
        return genreList.filter(item => item.checked === true).map(item => item.id);
    }
)