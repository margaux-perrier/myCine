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
        it('should add id item in favorisIdList in an immutable way', () => {

            //arrange
            const action = handleListAction ({ name: 'favorisIdList', idItem: 3 })
            const newState : LibraryState = {
                ...initialState, 
                favorisIdList : [3]
            }

            //act
            const state = libraryReducer(initialState, action); 

            //assert
            expect(state).toEqual(newState); 
            expect(state).not.toBe(newState);
        }), 
        it('should remove id item from favorisIdList in an immutable way', () => {

            //arrange
            const initState = {
                ...initialState, 
                favorisIdList : [3]
            }
            const action = handleListAction ({ name: 'favorisIdList', idItem: 3 })
          
            //act
            const state = libraryReducer(initState, action); 

            //assert
            expect(state).toEqual(initialState); 
            expect(state).not.toBe(initialState);
        }), 
        it('should add id item in wishIdList in an immutable way', () => {

            //arrange
            const action = handleListAction ({ name: 'wishIdList', idItem: 3 })
            const newState : LibraryState = {
                ...initialState, 
                wishIdList : [3]
            }

            //act
            const state = libraryReducer(initialState, action); 

            //assert
            expect(state).toEqual(newState); 
            expect(state).not.toBe(newState);
        }),
        it('should remove id item from wishIdList in an immutable way', () => {

            //arrange
            const initState = {
                ...initialState, 
                wishIdList : [3]
            }
            const action = handleListAction ({ name: 'wishIdList', idItem: 3 })
          
            //act
            const state = libraryReducer(initState, action); 

            //assert
            expect(state).toEqual(initialState); 
            expect(state).not.toBe(initialState);
        }), 
        it('should add id item in watchedIdList in an immutable way', () => {

            //arrange
            const action = handleListAction ({ name: 'watchedIdList', idItem: 3 })
            const newState : LibraryState = {
                ...initialState, 
                watchedIdList : [3]
            }

            //act
            const state = libraryReducer(initialState, action); 

            //assert
            expect(state).toEqual(newState); 
            expect(state).not.toBe(newState);
        }),
        it('should remove id item from watchedIdList in an immutable way', () => {

            //arrange
            const initState = {
                ...initialState, 
                watchedIdList : [3]
            }
            const action = handleListAction ({ name: 'watchedIdList', idItem: 3 })
          
            //act
            const state = libraryReducer(initState, action); 

            //assert
            expect(state).toEqual(initialState); 
            expect(state).not.toBe(initialState);
        })
    })
})
