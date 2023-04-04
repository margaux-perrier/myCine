import { createAction, props } from "@ngrx/store";
import { IItem } from "../models/item";

export const loadItemAction = createAction('[Item] Load');

export const loadItemListSuccessAction = createAction(
    '[Item] Load Success',
    props<{ item: IItem }>()
  );
  
export const loadItemListFailure = createAction(
  '[Item] Load Fail',
  props<{ error: string }>()
);