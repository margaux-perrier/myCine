import { createReducer, on } from "@ngrx/store";
import { toggleMenuBurgerAction } from "../actions/menuBurger.actions";

export interface MenuBurgerState {
    showMenuBurger : boolean;
}

/**
 * @property initialState
 * @description   Defines the initial state of app : menuBurger and currentUrl
 * @type { MenuBurgerState }
 */
export const initialState : MenuBurgerState = {
    showMenuBurger : false, 
}

/**
* @method MenuBurgerReducer 
* @description manages the following state changes : showMenuBurger and currentUrl
* @param { MenuBurgerState } state
* @param { Action } action
* @returns { MenuBurgerState } updated state 
*/
export const menuBurgerReducer  = createReducer(
    initialState,
    on(toggleMenuBurgerAction, (state : MenuBurgerState) => {
        return {
            ...state, 
            showMenuBurger : !state.showMenuBurger
        }
    }), 
); 
