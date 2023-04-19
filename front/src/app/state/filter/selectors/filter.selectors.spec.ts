import { FilterListState } from "../reducer/filter.reducer";
import { getGenreList, getSelectedGenreIdList } from "./filter.selectors";

describe('filter selectors', () => {
    it('should select genreList - getGenreList', () => {
        const initialState = createInitialState(); 
        const result = getGenreList.projector(initialState); 
        expect(result).toBe(initialState.genreList); 
    })

    it('should access to the selected genre id list - getSelectedGenreIdList', () => {
        const initialState = createInitialState(); 
        const result = getSelectedGenreIdList.projector(initialState, initialState.genreList); 
        expect(result.length).toEqual(2);
        expect(result[0]).toEqual(1);  
        expect(result[1]).toEqual(4);  
    })

    function createInitialState() : FilterListState {
        return {
            genreList : [ 
                { id: 1, name: 'drame', color: '#802FDE', background : '#E8E2F7', checked: true},
                { id: 2, name: 'action', color: '#E50087', background : '#FFE5F4', checked: false},
                { id: 3, name: 'documentaire', color: '#14B789', background : '#D5F8EF', checked: false},
                { id: 4, name: 'action', color: '#ff6700', background : '#ffbf69', checked: true},
                { id: 5, name: 'thriller', color: '#adb5bd', background : '#6c757d', checked: false},
            ], 
            selectedGenreIdList : [1,4], 
            error : ''
        } 
    }
})