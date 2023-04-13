import { createFeatureSelector, createSelector  } from "@ngrx/store";
import { AppState } from "../reducer/app.reducer";

const getAppState = createFeatureSelector<AppState>('app'); 

/**
* @method getShowMenuBurgerProperty
* @description  selector acess to showMenuburger property
* @return { boolean } showMenuBurger property
*/
export const getShowMenuBurgerProperty = createSelector(
    getAppState, 
    state => state.showMenuBurger
)

/**
* @method getCurrentUrl
* @description  selector access to currentUrl property
* @return { string } currentUrl property
*/
export const getCurrentUrl = createSelector(
    getAppState, 
    state => state.currentUrl
)