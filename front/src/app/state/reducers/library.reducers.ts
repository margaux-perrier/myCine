import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { getItemList } from "./items.reducer";
import { IItem } from "src/app/core/models/item";
import { handleListAction } from "../actions/list.action";

export interface LibraryState {
    favorisIdList : number[],
    watchedIdList : number[],
    whishIdList : number[],   
    error : string,  
}

const initialState : LibraryState = {
    favorisIdList : [1,2,3,4,5,6,7,8,9,10],   
    watchedIdList : [],
    whishIdList : [],   
    error : '',  
}

const getListFeatureState = createFeatureSelector<LibraryState>('library'); 

export const getFavorisIdList = createSelector(
    getListFeatureState, 
    state => state.favorisIdList
)

export const getFavorisList = createSelector(
    getListFeatureState,
    getFavorisIdList, 
    getItemList, 
    (state, favorisIdList, itemList) => itemList.filter( (item : IItem) => favorisIdList.includes(item.id))
)

export const getWatchedIdList = createSelector(
    getListFeatureState, 
    state => state.watchedIdList
)

export const getWatchedList = createSelector(
    getListFeatureState,
    getWatchedIdList, 
    getItemList, 
    (state, watchedIdList, itemList) => itemList.filter( (item : IItem) => watchedIdList.includes(item.id))
)

export const getWishIdList = createSelector(
    getListFeatureState, 
    state => state.whishIdList
)

export const getWishList = createSelector(
    getListFeatureState,
    getWishIdList, 
    getItemList, 
    (state, wishIdList, itemList) => itemList.filter( (item : IItem) => wishIdList.includes(item.id))
)

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