import { createFeatureSelector, createSelector  } from "@ngrx/store";
import { MenuBurgerState } from "../reducer/menuburger.reducer";

const getAppState = createFeatureSelector<MenuBurgerState>('menuburger'); 

/**
* @method getShowMenuBurgerProperty
* @description  selector acess to showMenuburger property
* @return { boolean } showMenuBurger property
*/
export const getShowMenuBurgerProperty = createSelector(
    getAppState, 
    state => state.showMenuBurger
)
