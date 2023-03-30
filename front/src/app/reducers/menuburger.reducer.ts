import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { toggleMenuBurgerAction } from "../actions/menuBuger.actions";

export interface MenuBurgerState {
    showMenuBurger : boolean;
}

const initialState : MenuBurgerState = {
    showMenuBurger : false
}

const getMenuBurgerState = createFeatureSelector<MenuBurgerState>('menuburger'); 

export const getShowMenuBurgerProperty = createSelector(
    getMenuBurgerState, 
    state => state.showMenuBurger
)

export const menuburgerReducer = createReducer(
    initialState,
    on(toggleMenuBurgerAction, (state : MenuBurgerState) => {
        return {
            ...state, 
            showMenuBurger : !state.showMenuBurger
        }
    })
); 
