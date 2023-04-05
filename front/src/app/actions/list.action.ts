import { createAction, props } from "@ngrx/store";
import { IItem } from "../models/item";

export const loadList = createAction('[Library] Load');

export const loadItemListSuccessAction = createAction(
    '[Library] Load Success',
    props<{ item: IItem }>()
);
  
export const loadItemListFailure = createAction(
    '[Library] Load Fail',
    props<{ error: string }>()
);

export const handleListAction = createAction(
    '[detailsPage] Add or remove Id to List', 
    props<{ name: string, idItem : number }>()
)

export const initializeIndexArray = createAction(
    '[Library] initialize IndexArray', 
)
