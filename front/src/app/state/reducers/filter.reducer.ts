import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { loadFilterListFailure, loadFilterListSuccessAction, resetFilter, selectedGenreAction } from "../actions/filter.action";
import { IGenre } from "../../core/models/genre";

export interface FilterListState {
    genreList : IGenre[], 
    selectedGenreIdList : number[]
    error : string, 
}

const initialState : FilterListState = {
    genreList : [], 
    selectedGenreIdList : [], 
    error : ''
}

const getFilterFeatureState = createFeatureSelector<FilterListState>('filter'); 

export const getGenreList = createSelector(
    getFilterFeatureState, 
    state => state.genreList
); 

export const getErrorGenre = createSelector(
    getFilterFeatureState, 
    state => state.error
)

export const getSelectedGenreIdList = createSelector(
    getFilterFeatureState, 
    getGenreList, 
    (state, genreList) => {
        let genreListSelected = genreList.filter(item => item.checked === true);
        if(genreListSelected.length >0 ){
            return genreListSelected.map(item => item.id)
        }else{
            return state.selectedGenreIdList
        }
    }
)

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