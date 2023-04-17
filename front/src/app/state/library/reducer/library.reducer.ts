import { createReducer, on } from "@ngrx/store";
import { handleListAction } from "../actions/list.action";

export interface LibraryState {
    favorisIdList : number[],
    watchedIdList : number[],
    wishIdList : number[],   
    error : string,  
}

/**
 * @property initialState
 * @description   Defines the initial state of the library feature : favorisList, watchedList, wishList
 * @type { LibrarytState }
 */
export const initialState : LibraryState = {
    favorisIdList : [2],   
    watchedIdList : [],
    wishIdList : [],   
    error : '',  
}

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

            case 'wishIdList' : {
                return{
                    ...state, 
                    wishIdList : !state.wishIdList.includes(action.idItem) ? [...state.wishIdList, action.idItem] : state.wishIdList.filter( id => id !== action.idItem)
                }
            }

            case 'watchedIdList' : {
                return{
                    ...state, 
                    watchedIdList : !state.watchedIdList.includes(action.idItem) ? [...state.watchedIdList, action.idItem] : state.watchedIdList.filter( id => id !== action.idItem)
                }
            }

            default : 
                return {
                    ...state, 
                    error : `No case for type ${action.name} found in libraryReducer`
                }
        }
    }),
)