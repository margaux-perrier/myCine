import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { handleNextAction } from "../actions/carrousel.action";
import { handleListAction, initializeIndexArray } from "../actions/list.action";

export interface LibraryState {
    favorisIdList : number[],
    currentIndex : number[], 
    watchedIdList : number[],
    whishIdList : number[],   
    error : string,  
}

const initialState : LibraryState = {
    favorisIdList : [2, 1, 3,4,5,6,7,8,9,10], 
    currentIndex : [],    
    watchedIdList : [],
    whishIdList : [],   
    error : '',  
}

const getListFeatureState = createFeatureSelector<LibraryState>('library'); 

export const getFavorisIdList = createSelector(
    getListFeatureState, 
    state => state.favorisIdList
)

export const getCurrentIndex = createSelector(
    getListFeatureState, 
    state => state.currentIndex
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
    }),
    on(initializeIndexArray, (state) : LibraryState => {
        return{
            ...state, 
            currentIndex : [...Array(state.favorisIdList.length).keys()].map((el) => el + 0),  
        }
    }), 
    on(handleNextAction, (state) : LibraryState => {
        return{
            ...state, 
            // currentIndex : state.currentIndex.map(index =>  index === state.currentIndex[state.currentIndex.length-1] ? 0 : index + 1),  
            // currentIndex : state.currentIndex.map(index =>  index === Math.max(...state.currentIndex) ? 0 : index + 1),  
            favorisIdList : state.favorisIdList.map((item, index ) => index === Math.max(...state.favorisIdList) ? 0 : index +1 )
        }
    })

)