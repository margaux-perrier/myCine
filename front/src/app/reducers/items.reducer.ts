import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { loadItemListFailure, loadItemListSuccessAction } from "../actions/items.actions";
import { IItem } from "../models/item";


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
    state => state.itemList
  );

export const itemListReducer = createReducer<ItemListState>(
    initialState,
    on(loadItemListSuccessAction, (state, action): ItemListState => {
        return {
          ...state,
          itemList: action.itemList,
          error: ''
        };
    }), 
    // on(loadItemListFailure, (state, action): ItemListState => {
    //     return {
    //         ...state, 
    //         itemList : [], 
    //         error : action.error 
    //     }
    // })
); 
