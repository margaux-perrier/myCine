import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { handleCurrentRouteAction, toggleMenuBurgerAction } from "../actions/app.actions";

export interface AppState {
    showMenuBurger : boolean;
    currentUrl : string, 
}

const initialState : AppState = {
    showMenuBurger : false, 
    currentUrl : ''
}

const getAppState = createFeatureSelector<AppState>('app'); 

export const getShowMenuBurgerProperty = createSelector(
    getAppState, 
    state => state.showMenuBurger
)

export const getCurrentUrl = createSelector(
    getAppState, 
    state => state.currentUrl
)

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
