import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { loadItemListFailure, loadItemListSuccessAction, setCurrentItem } from "../actions/items.actions";
import { IItem } from "../models/item";
import { getSelectedGenreIdList } from "./filter.reducer";


export interface ItemListState {
    itemList : IItem[], 
    currentItemId: number | null;
    selectedGenreIdList : number[], 
    error : string
}

const initialState : ItemListState = {
    itemList : [], 
    currentItemId : null, 
    selectedGenreIdList : [], 
    error : ''
}

const getItemsFeatureState = createFeatureSelector<ItemListState>('items');

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

export const getCurrentItemId = createSelector(
    getItemsFeatureState, 
    state => state.currentItemId
)

export const getCurrentItem = createSelector(
    getItemsFeatureState,
    getCurrentItemId,    
    (state, currentItemId) => currentItemId ? state.itemList.find(item => item.id === currentItemId) : null 
    
)

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
    }),
    on(setCurrentItem, (state, action): ItemListState => {
        return {
          ...state,
          currentItemId: action.currentItemId, 
        };
    }),
); 
