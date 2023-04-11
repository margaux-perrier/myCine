import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { itemsSelectors } from "../items";
import { IItem } from "src/app/core/models/item";
import { handleListAction } from "../actions/list.action";

export interface LibraryState {
    favorisIdList : number[],
    watchedIdList : number[],
    whishIdList : number[],   
    error : string,  
}

/**
 * @property initialState
 * @description   Defines the initial state of the library feature : favorisList, watchedList, wishList
 * @type { LibrarytState }
 */
const initialState : LibraryState = {
    favorisIdList : [],   
    watchedIdList : [],
    whishIdList : [],   
    error : '',  
}

const getListFeatureState = createFeatureSelector<LibraryState>('library'); 

/**
* @method getFavorisIdList
* @description  selector access to favorisIdList
* @return { number[] }
*/
export const getFavorisIdList = createSelector(
    getListFeatureState, 
    state => state.favorisIdList
)

/**
* @method getFavorisList
* @description  selector access to favoris items 
* @param { number[] }
* @return { (IItem[] | []) }
*/
export const getFavorisList = createSelector(
    getListFeatureState,
    getFavorisIdList, 
    itemsSelectors.getItemList, 
    (state, favorisIdList, itemList) => favorisIdList.length > 0 ? itemList.filter( (item : IItem) => favorisIdList.includes(item.id)) : []
)

/**
* @method getWatchedIdList
* @description  selector access to watchedIdList
* @return { number[] }
*/
export const getWatchedIdList = createSelector(
    getListFeatureState, 
    state => state.watchedIdList
)

/**
* @method getWatchedList
* @description  selector access to watchedList
* @param { number[] }
* @return { (IItem[] | []) }
*/
export const getWatchedList = createSelector(
    getListFeatureState,
    getWatchedIdList, 
    itemsSelectors.getItemList,
    (state, watchedIdList, itemList) => watchedIdList.length > 0 ? itemList.filter( (item : IItem) => watchedIdList.includes(item.id)) : []
)

/**
* @method getWishIdList
* @description  selector access to wishIdList
* @return { number[] }
*/
export const getWishIdList = createSelector(
    getListFeatureState, 
    state => state.whishIdList
)

/**
* @method getWishList
* @description  selector access to wishList 
* @param { number[] }
* @return { (IItem[] | []) }
*/
export const getWishList = createSelector(
    getListFeatureState,
    getWishIdList, 
    itemsSelectors.getItemList, 
    (state, wishIdList, itemList) => wishIdList.length ? itemList.filter( (item : IItem) => wishIdList.includes(item.id)) : []
)

/**
* @method libraryReducer 
* @description manages the following state changes : add or remove items to wishList, favorisList or watchedList
* @param { AppState } state
* @param { Action } action
*/
export const libraryReducer = createReducer<LibraryState>(
    initialState, 
    on(handleListAction, (state, action) : LibraryState => {
        switch(action.name){
            case 'favorisIdList' : {
                return{
                    ...state, 
                    favorisIdList : !state.favorisIdList.includes(action.idItem) ? [...state.favorisIdList, action.idItem] : state.favorisIdList.filter( id => id !== action.idItem)
                }
            }

            case 'whishIdList' : {
                return{
                    ...state, 
                    whishIdList : !state.whishIdList.includes(action.idItem) ? [...state.whishIdList, action.idItem] : state.whishIdList.filter( id => id !== action.idItem)
                }
            }

            case 'watchedIdList' : {
                return{
                    ...state, 
                    watchedIdList : !state.watchedIdList.includes(action.idItem) ? [...state.watchedIdList, action.idItem] : state.watchedIdList.filter( id => id !== action.idItem)
                }
            }

            default : 
                throw new Error (`No case for type ${action.name}  found in libraryReducer`); 
        }
    }),
)