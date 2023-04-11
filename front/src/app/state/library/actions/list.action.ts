import { createAction, props } from "@ngrx/store";

export const handleListAction = createAction(
    '[detailsPage] Add or remove Id to List', 
    props<{ name: string, idItem : number }>()
)

