import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { ItemListState } from "../reducer/items.reducer";
import { getSelectedGenreIdList } from "../../reducers/filter.reducer";


const getItemsFeatureState = createFeatureSelector<ItemListState>('items');

/**
* @method getItemList
* @description  selector access to showMenuburger (boolean) property
* @param { number[] } [selectedGenreIdList]
* @return { IItem[] }
*/
export const getItemList = createSelector(
    getItemsFeatureState,
    getSelectedGenreIdList,
    (state, selectedGenreIdList) => {
        if(selectedGenreIdList.length >0){
            return state.itemList.filter(item => item.genreIds.map(id => selectedGenreIdList.includes(id)).includes(true))
        }else{
            return state.itemList
        }
    }
);

/**
* @method getCurrentItemId
* @description  selector access to currentItemId
* @return { number | null }
*/
export const getCurrentItemId = createSelector(
    getItemsFeatureState, 
    state => state.currentItemId
)

/**
* @method getCurrentItem
* @description  selector retrieve the current item from itemList with currentItemId
* @param { number } currentItemId
* @return { IItem | undefined | null } currentItem
*/
export const getCurrentItem = createSelector(
    getItemsFeatureState,
    getCurrentItemId,    
    (state, currentItemId) => currentItemId ? state.itemList.find(item => item.id === currentItemId) : null 
)

/**
* @method getMoviesList
* @description  selector retrieve movies list 
* @param { number[] } [selectedGenreIdList]
* @return { IItem[] }
*/
export const getMoviesList = createSelector(
    getItemsFeatureState,
    getSelectedGenreIdList, 
    (state, selectedGenreIdList) => {
        if(selectedGenreIdList.length >0){
            return state.itemList.filter(item => item.type === 'film' && item.genreIds.map(id => selectedGenreIdList.includes(id)).includes(true))
        }else{
            return state.itemList.filter(item => item.type === 'film')
        }
    }
)

/**
* @method getErrorItems
* @description  selector access error property
*/
export const getErrorItems = createSelector(
    getItemsFeatureState, 
    state => state.error
)