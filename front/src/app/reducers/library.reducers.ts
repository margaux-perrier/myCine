import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { handleListAction } from "../actions/list.action";

export interface LibraryState {
    favorisIdList : number[],
    watchedIdList : number[],
    whishIdList : number[],   
    error : string,  
}

const initialState : LibraryState = {
    favorisIdList : [], 
    watchedIdList : [],
    whishIdList : [],   
    error : '',  
}

const getListFeatureState = createFeatureSelector<LibraryState>('library'); 

export const getFavorisIdList = createSelector(
    getListFeatureState, 
    state => state.favorisIdList
)

export const getWatchedIdList = createSelector(
    getListFeatureState, 
    state => state.watchedIdList
)

export const getwhishIdList = createSelector(
    getListFeatureState, 
    state => state.whishIdList
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
    })
)