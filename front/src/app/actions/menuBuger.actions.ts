import { createAction, props } from "@ngrx/store";

export const toggleMenuBurgerAction = createAction('[MenuBurger] Toggle MenuBurger')

export const handleCurrentRouteAction = createAction(
    '[Current url] Store current url', 
    props<{ url: string }>()
); 

