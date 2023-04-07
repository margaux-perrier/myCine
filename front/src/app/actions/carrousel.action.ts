import { createAction, props } from "@ngrx/store";

export const handleNextAction = createAction(
    '[carousel] Handle next'
)

export const initializeIndexArray = createAction(
    '[Library] initialize IndexArray', 
)