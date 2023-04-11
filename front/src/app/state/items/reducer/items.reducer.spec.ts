import { initialState, itemListReducer } from './items.reducer';
import { loadItemListSuccessAction, loadItemListFailure, setCurrentItem, setRatingItem } from '../actions/items.actions';
import { IItem } from 'src/app/core/models/item';
import { ItemListState } from './items.reducer';

describe('ItemsReducer', () => {
    describe('unknow action', () => {
        it('should return initial state', () => {

            const action = { type : 'unknown'}
            const state = itemListReducer(initialState, action); 

            expect(state).toBe(initialState); 
        })
    }), 
    describe('loadItemListSuccess Action', () => {
        it('should update the state with itemList in an immutable way', () => {

            //arrange
            const itemList : IItem[] = newItemList(); 
            const action = loadItemListSuccessAction( { itemList : itemList } )
            
            const newState : ItemListState = {
                ...initialState, 
                itemList : itemList, 
            }
            
            //act
            const state = itemListReducer(initialState, action); 

            //assert 
            expect(state).toEqual(newState); 
            expect(state).not.toBe(newState); //check immutability 
        })
    }), 
    describe('loadItemListFailure action', () => {
        it('should update the state with an error in an immutable way', () => {
            
            //arrange
            const error = 'error'; 
            const action = loadItemListFailure({ error })
            const newState : ItemListState = {
                ...initialState, 
                error : error
            }

            //act
            const state = itemListReducer(initialState, action); 

            //assert
            expect(state).toEqual(newState); 
            expect(state).not.toBe(newState); 
        })
    }), 
    describe('setCurrentItem action', () => {
        it('should update the state with current item id in an immutable way', () => {
            const action = setCurrentItem({ currentItemId : 1 }); 
            const state = itemListReducer(initialState, action); 
            const newState : ItemListState = {
                ...initialState, 
                currentItemId : 1
            }
            expect(state).toEqual(newState); 
            expect(state).not.toBe(newState); 
        })
    }), 
    describe('setRatingItem action', () => {
        it('should update the state with item rated', () => {
            //arrange
            const itemList = newItemList();  
            const initState = { ...initialState, itemList, currentItemId : 1 }
            const action = setRatingItem( { ratingValue : 2.5 } )
           
            //act 
            const state = itemListReducer( initState , action); 

            //assert
            expect(state.itemList[0].rating).toEqual(2.5); 
        })
    })

    function newItemList() : IItem[] {
        return [
            {
                id :1, 
                name : 'mascarade', 
                avatar : 'mascarade.png', 
                producerId : 1, 
                actorIds : [8,9,16], 
                year : 1982, 
                duration: 120, 
                description : 'Latius iam disseminata licentia onerosus bonis omnibus Caesar nullum post haec adhibens modum orientis latera cuncta vexabat nec honoratis.',
                type : 'film', 
                genreIds : [1,2],
                rating : 2.5,
                classification : 'tous publics'
            }
        ]
    }
})