import { handleListAction } from '../actions/list.action'; 
import { LibraryState, initialState, libraryReducer } from './library.reducer'; 

describe('libraryReducer', () => {
    describe('unknow action', () => {
        it('should return initial state', () => {

            const action = { type : 'unknown'}
            const state = libraryReducer(initialState, action); 

            expect(state).toBe(initialState); 
        })
    }), 
    describe('handleListAction - unknow name property', () => {
        it('should return an error', () => {

            //arrange 
            const action = handleListAction( { name : 'unknown', idItem : 3 })
            const error = `No case for type ${action.name} found in libraryReducer`; 
            const newState : LibraryState = {
                ...initialState, 
                error : error
            }

            //act
            const state = libraryReducer(initialState, action ); 
            
            //assert
            expect(state).toEqual(newState); 
            expect(state).not.toBe(newState); 
        })
    }), 
    describe('handleListAction', () => {
        it('should update the state with favorisIdList in an immutable way', () => {

            //arrange
            const action = handleListAction ({ name: 'favorisIdList', idItem: 3 })
            const newState : LibraryState = {
                ...initialState, 
                favorisIdList : [ action.idItem ]
            }

            //act
            const state = libraryReducer(initialState, action); 

            //assert
            expect(state).toEqual(newState); 
            expect(state).not.toBe(newState);
        }), 
        it('should update the state with wishIdList in an immutable way', () => {

            //arrange
            const action = handleListAction ({ name: 'wishIdList', idItem: 3 })
            const newState : LibraryState = {
                ...initialState, 
                wishIdList : [ action.idItem ]
            }

            //act
            const state = libraryReducer(initialState, action); 

            //assert
            expect(state).toEqual(newState); 
            expect(state).not.toBe(newState);
        }),
        it('should update the state with watchedIdList in an immutable way', () => {

            //arrange
            const action = handleListAction ({ name: 'watchedIdList', idItem: 3 })
            const newState : LibraryState = {
                ...initialState, 
                watchedIdList : [ action.idItem ]
            }

            //act
            const state = libraryReducer(initialState, action); 

            //assert
            expect(state).toEqual(newState); 
            expect(state).not.toBe(newState);
        })
    })
})
