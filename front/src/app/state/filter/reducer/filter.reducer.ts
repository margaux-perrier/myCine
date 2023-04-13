import { createReducer, on } from "@ngrx/store";
import { loadFilterListFailure, loadFilterListSuccessAction, resetFilter, selectedGenreAction } from "../actions/filter.action";
import { IGenre } from "../../../core/models/genre";

export interface FilterListState {
    genreList : IGenre[], 
    selectedGenreIdList : number[]
    error : string, 
}

/**
 * @property initialState
 * @description   Defines the initial state of the filter feature : genreList, selectedGenreIdList and error
 * @type { FilterListState }
 */
export const initialState : FilterListState = {
    genreList : [], 
    selectedGenreIdList : [], 
    error : ''
}

/**
* @method filterReducer 
* @description manages the following state changes: genreList, error, selectedGenreIdList and reset
* @param { AppState } state
* @param { Action } action 
*/
export const filterReducer = createReducer<FilterListState>(
    initialState, 
    on(loadFilterListSuccessAction, (state, action) : FilterListState => {
        return {
            ...state, 
            genreList: action.genreList.map( (item : IGenre) => { 
                if(state.selectedGenreIdList.includes(item.id)){
                    return{
                        ...item, 
                        checked : !item.checked
                    }
                }else{
                    return item
                }
            }),
            error : ''
        }
    }),
    on(loadFilterListFailure, (state, action): FilterListState => {
        return {
            ...state, 
            genreList: [], 
            error : action.error 
        }
    }),
    on(selectedGenreAction, (state, action): FilterListState => {
        return {
            ...state, 
            genreList : state.genreList.map( item => { 
                if(action.selectedGenreId === item.id){
                    return{
                        ...item, 
                        checked : !item.checked
                    }
                }else{
                    return item
                }
            }),
            selectedGenreIdList : !state.selectedGenreIdList.includes(action.selectedGenreId) ?  [ ...state.selectedGenreIdList, action.selectedGenreId ] : 
            state.selectedGenreIdList.filter(item => item !== action.selectedGenreId)
        }
    }),
    on(resetFilter, (state, action) : FilterListState => {
        return{
            ...state, 
            selectedGenreIdList : initialState.selectedGenreIdList,  
            genreList : state.genreList.map( item => { return{ ...item, checked : false }
            }),
        }
    })
)