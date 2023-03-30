import { createAction, props } from "@ngrx/store";
import { IItem } from "../models/item";

export const loadItemListAction = createAction('[ItemsList] Load');

export const loadItemListSuccessAction = createAction(
    '[ItemList] Load Success',
    props<{ itemList: IItem[] }>()
  );
  
  export const loadItemListFailure = createAction(
    '[ItemList] Load Fail',
    props<{ error: string }>()
  );