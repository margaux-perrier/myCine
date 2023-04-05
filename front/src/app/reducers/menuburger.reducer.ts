import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { handleCurrentRouteAction, toggleMenuBurgerAction } from "../actions/menuBuger.actions";

export interface MenuBurgerState {
    showMenuBurger : boolean;
    currentUrl : string, 
}

const initialState : MenuBurgerState = {
    showMenuBurger : false, 
    currentUrl : ''
}

const getMenuBurgerState = createFeatureSelector<MenuBurgerState>('menuburger'); 

export const getShowMenuBurgerProperty = createSelector(
    getMenuBurgerState, 
    state => state.showMenuBurger
)

export const getCurrentUrl = createSelector(
    getMenuBurgerState, 
    state => state.currentUrl
)

export const menuburgerReducer = createReducer(
    initialState,
    on(toggleMenuBurgerAction, (state : MenuBurgerState) => {
        return {
            ...state, 
            showMenuBurger : !state.showMenuBurger
        }
    }), 
    on(handleCurrentRouteAction, (state : MenuBurgerState, action) => {
        return {
            ...state, 
            currentUrl : action.url
        }
    })
); 
