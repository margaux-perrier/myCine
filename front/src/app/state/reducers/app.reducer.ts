import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
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
const initialState : AppState = {
    showMenuBurger : false, 
    currentUrl : ''
}

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

/**
* @method appReducer 
* @description manages the following state changes : showMenuBurger and currentUrl
* @param { AppState } state
* @param { Action } action
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
