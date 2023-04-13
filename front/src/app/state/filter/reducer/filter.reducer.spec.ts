import { IGenre } from "src/app/core/models/genre";
import { initialState, filterReducer, FilterListState } from "./filter.reducer";
import { loadFilterListFailure, loadFilterListSuccessAction, selectedGenreAction, resetFilter } from "../actions/filter.action";

describe('FilterReducer', () => {
    describe('unknow action', () => {
        it('should return initial state', () => {

            const action = { type : 'unknown'}
            const state = filterReducer(initialState, action); 
            expect(state).toBe(initialState); 
        })
    }), 
    describe('FilterListSuccess Action', () => {
        it('should update the state with filerList in an immutable way', () => {

            //arrange
            const genreList : IGenre[] =  newGenreList(); 
            const action = loadFilterListSuccessAction( { genreList : genreList } )
            
            const newState : FilterListState = {
                ...initialState, 
                genreList : genreList, 
            }
            
            //act
            const state = filterReducer(initialState, action); 

            //assert 
            expect(state).toEqual(newState); 
            expect(state).not.toBe(newState); //check immutability 
        })
    }), 
    describe('loadFilterListFailure action', () => {
        it('should update the state with an error in an immutable way', () => {
            
            //arrange
            const error = 'error'; 
            const action = loadFilterListFailure({ error })
            const newState : FilterListState = {
                ...initialState, 
                error : error
            }

            //act
            const state = filterReducer(initialState, action); 

            //assert
            expect(state).toEqual(newState); 
            expect(state).not.toBe(newState); 
        })
    }), 
    describe('selectedGenreIdList action', () => {
        it('should update genreList item with true checked property when a genre is selected and update selectedGenreIdList', () => {
            
            //arrange 
            const genreList : IGenre[] = newGenreList(); 
            const initState = { ...initialState, genreList }; 
            const action = selectedGenreAction({ selectedGenreId : 1 }); 
        
            //act
            const state = filterReducer(initState, action); 
            
            //assert 
            expect(state.genreList[0].checked).toBe(true); 
            expect(state.selectedGenreIdList).toContain(1); 
        })
    }),
    describe('selectedGenreIdList action', () => {
        it('should update genreList item with false checked property and update selectedGenreIdList', () => {
            
            //arrange 
            const initState = { 
                ...initialState, 
                selectedGenreIdList : [1], 
                genreList : [ {
                    id: 1, 
                    name : 'test', 
                    color: 'test',
                    background: 'test', 
                    checked: true 
                }
                ]  
            }
            const action = selectedGenreAction({ selectedGenreId : 1 }); 
        
            //act
            const state = filterReducer(initState, action); 
            
            //assert 
            expect(state.genreList[0].checked).toBe(false); 
            expect(state.selectedGenreIdList).not.toContain(1); 
        })
    }),
    describe('resetFilter action', () => {
        it('should reset filter', () => {
            //arrange 
            const genreList : IGenre[] = newGenreList(); 
            const initState = { ...initialState, genreList, selectedGenreIdList : [1] }; 
            const action = resetFilter();
            const newState = { ...initialState, genreList }
            
            //act
            const state = filterReducer(initState, action); 

            //assert
            expect(state.genreList[0].checked).toBe(false); 
            expect(state).toEqual(newState); 
            expect(state).not.toBe(newState); 
        })
    })

    function newGenreList() : IGenre[] {
        return [
            {
                id: 1, 
                name : 'test', 
                color: 'test',
                background: 'test', 
                checked: false 
            }
        ]
    }
})