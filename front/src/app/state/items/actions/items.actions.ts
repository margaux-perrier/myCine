import { createAction, props } from "@ngrx/store";
import { IItem } from "../../../core/models/item";

export const loadItemListAction = createAction('[ItemsList] Load');

export const loadItemListSuccessAction = createAction(
    '[ItemList] Load Success',
    props<{ itemList: IItem[] }>()
  );
  
export const loadItemListFailure = createAction(
  '[ItemList] Load Fail',
  props<{ error: string }>()
);

export const setCurrentItem = createAction(
  '[itemList] Set current Item', 
  props<{ currentItemId: number }>()
); 

export const setRatingItem = createAction(
  '[Details Paage] Set rating Item', 
  props<{ ratingValue: number }>()
); 

export const setSearchValue = createAction(
  ' [itemList] Set searchValue Item', 
  props<{ searchValue: string }>()
)