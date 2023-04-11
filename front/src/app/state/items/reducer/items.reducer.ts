import { createReducer, on } from "@ngrx/store";
import { loadItemListFailure, loadItemListSuccessAction, setCurrentItem, setRatingItem } from "../actions/items.actions";
import { IItem } from "../../../core/models/item";


export interface ItemListState {
    itemList : IItem[], 
    currentItemId: number | null;
    error : string
}

/**
 * @property initialState
 * @description   Defines the initial state of the items
 * @type { ItemListState }
 */
export const initialState : ItemListState = {
    itemList : [], 
    currentItemId : null, 
    error : ''
}

/**
* @method itemsListReducer 
* @description manages the following state changes : itemList with rating, currentItemId
* @param { AppState } state
* @param { Action } action
*/
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
    on(setRatingItem, (state, action) : ItemListState => {
        return {
            ...state, 
            itemList : state.itemList.map( item => {
                if(state.currentItemId === item.id){
                    return{
                        ...item, 
                        rating : ((item.rating + action.ratingValue)/2)
                    }
                }else{
                    return item
                
                }
            })
        }
    }
    )
); 
