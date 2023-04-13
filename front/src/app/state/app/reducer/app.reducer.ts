import { createReducer, on } from "@ngrx/store";
import { handleCurrentRouteAction, toggleMenuBurgerAction } from "../actions/app.actions";

export interface AppState {
    showMenuBurger : boolean;
    currentUrl : string, 
}

/**
 * @property initialState
 * @description   Defines the initial state of app : menuBurger and currentUrl
 * @type { AppState }
 */
export const initialState : AppState = {
    showMenuBurger : false, 
    currentUrl : ''
}

/**
* @method appReducer 
* @description manages the following state changes : showMenuBurger and currentUrl
* @param { AppState } state
* @param { Action } action
* @returns { AppState } updated state 
*/
export const appReducer = createReducer(
    initialState,
    on(toggleMenuBurgerAction, (state : AppState) => {
        return {
            ...state, 
            showMenuBurger : !state.showMenuBurger
        }
    }), 
    on(handleCurrentRouteAction, (state : AppState, action) => {
        return {
            ...state, 
            currentUrl : action.url
        }
    })
); 
