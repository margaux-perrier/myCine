import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { loadItemListFailure, loadItemListSuccessAction, setCurrentItem, setRatingItem } from "../actions/items.actions";
import { IItem } from "../../core/models/item";
import { getSelectedGenreIdList } from "./filter.reducer";


export interface ItemListState {
    itemList : IItem[], 
    currentItemId: number | null;
    error : string
}

/**
 * @property initialState
 * @description   Defines the initial state of the items
 * @type { ItemListState }
 */
const initialState : ItemListState = {
    itemList : [], 
    currentItemId : null, 
    error : ''
}

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
* @method getCurrentItem
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

/**
* @method itemsListReducer 
* @description manages the following state changes : itemList with rating, currentItemId
* @param { AppState } state
* @param { Action } action
*/
export const itemListReducer = createReducer<ItemListState>(
    initialState,
    on(loadItemListSuccessAction, (state, action): ItemListState => {
        return {
          ...state,
          itemList: action.itemList,
          error: ''
        };
    }), 
    on(loadItemListFailure, (state, action): ItemListState => {
        return {
            ...state, 
            itemList : [], 
            error : action.error 
        }
    }),
    on(setCurrentItem, (state, action): ItemListState => {
        return {
          ...state,
          currentItemId: action.currentItemId, 
        };
    }),
    on(setRatingItem, (state, action) : ItemListState => {
        return {
            ...state, 
            itemList : state.itemList.map( item => {
                if(state.currentItemId === item.id){
                    return{
                        ...item, 
                        rating : ((item.rating + action.ratingValue)/2)
                    }
                }else{
                    return item
                
                }
            })
        }
    }
    )
); 
