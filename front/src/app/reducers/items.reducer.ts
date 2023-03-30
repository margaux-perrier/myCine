import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { loadItemListFailure, loadItemListSuccessAction } from "../actions/items.actions";
import { IItem } from "../models/item";
import { getSelectedGenreIdList } from "./filter.reducer";


export interface ItemListState {
    itemList : IItem[], 
    selectedGenreIdList : number[], 
    error : string
}

const initialState : ItemListState = {
    itemList : [], 
    selectedGenreIdList : [], 
    error : ''
}

const getItemsFeatureState = createFeatureSelector<ItemListState>('items');

export const getItemList = createSelector(
    getItemsFeatureState,
    getSelectedGenreIdList,
    (state, selectedGenreIdList) => {
        if(selectedGenreIdList.length >0){
            return state.itemList.filter(item => item.genre.map(id => selectedGenreIdList.includes(id)).includes(true))
        }else{
            return state.itemList
        }
    }
  
);

export const getErrorItems = createSelector(
    getItemsFeatureState, 
    state => state.error
)

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
    })
); 
