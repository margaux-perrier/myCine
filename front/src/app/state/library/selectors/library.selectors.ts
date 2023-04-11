import { createFeatureSelector, createSelector } from "@ngrx/store";
import { itemsSelectors } from "../../items";
import { IItem } from "src/app/core/models/item";
import { LibraryState } from "../reducer/library.reducer";

const getListFeatureState = createFeatureSelector<LibraryState>('library'); 

/**
* @method getFavorisIdList
* @description  selector access to favorisIdList
* @return { number[] }
*/
export const getFavorisIdList = createSelector(
    getListFeatureState, 
    state => state.favorisIdList
)

/**
* @method getFavorisList
* @description  selector access to favoris items 
* @param { number[] }
* @return { (IItem[] | []) }
*/
export const getFavorisList = createSelector(
    getListFeatureState,
    getFavorisIdList, 
    itemsSelectors.getItemList, 
    (state, favorisIdList, itemList) => favorisIdList.length > 0 ? itemList.filter( (item : IItem) => favorisIdList.includes(item.id)) : []
)

/**
* @method getWatchedIdList
* @description  selector access to watchedIdList
* @return { number[] }
*/
export const getWatchedIdList = createSelector(
    getListFeatureState, 
    state => state.watchedIdList
)

/**
* @method getWatchedList
* @description  selector access to watchedList
* @param { number[] }
* @return { (IItem[] | []) }
*/
export const getWatchedList = createSelector(
    getListFeatureState,
    getWatchedIdList, 
    itemsSelectors.getItemList,
    (state, watchedIdList, itemList) => watchedIdList.length > 0 ? itemList.filter( (item : IItem) => watchedIdList.includes(item.id)) : []
)

/**
* @method getWishIdList
* @description  selector access to wishIdList
* @return { number[] }
*/
export const getWishIdList = createSelector(
    getListFeatureState, 
    state => state.wishIdList
)

/**
* @method getWishList
* @description  selector access to wishList 
* @param { number[] }
* @return { (IItem[] | []) }
*/
export const getWishList = createSelector(
    getListFeatureState,
    getWishIdList, 
    itemsSelectors.getItemList, 
    (state, wishIdList, itemList) => wishIdList.length ? itemList.filter( (item : IItem) => wishIdList.includes(item.id)) : []
)