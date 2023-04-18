import { FilterListState } from '../../filter/reducer/filter.reducer';
import { ItemListState } from '../reducer/items.reducer';
import { getCurrentItem, getCurrentItemId, getItemList, getMoviesList, getSeriesList } from './items.selectors';

describe('Items Selector', () => {
    
    it('should select the ItemList - getItemList', () => {
        const initialState = createInitialState(); 
        const result = getItemList.projector(initialState.items, initialState.filter.selectedGenreIdList); 
        expect(result.length).toEqual(2);
        expect(result[0]).toBe(initialState.items.itemList[0]); 
        expect(result[1]).toBe(initialState.items.itemList[1]);       
    })

    it("should select current item's id - getCurrentItemId", () => {
        const initialState = createInitialState(); 
        const result = getCurrentItemId.projector(initialState.items); 
        expect(result).toBe(2); 
    })

    it('should select the current Item based on its id - getCurrentItem', () => {
        const initialState = createInitialState(); 
        const result = getCurrentItem.projector(initialState.items, initialState.items.currentItemId); 
        expect(result?.id).toEqual(2);
        expect(result).toBe(initialState.items.itemList[1])     
    })

    it('should select the movies list - getMoviesList', () => {
        const initialState = createInitialState(); 
        const result = getMoviesList.projector(initialState.items, initialState.filter.selectedGenreIdList); 
        expect(result.length).toEqual(1); 
        expect(result[0]).toBe(initialState.items.itemList[0])     
    })

    it('should select the series list - getSeriesList', () => {
        const initialState = createInitialState(); 
        const result = getSeriesList.projector(initialState.items, initialState.filter.selectedGenreIdList); 
        expect(result.length).toEqual(1); 
        expect(result[0]).toBe(initialState.items.itemList[1])     
    })

    function createInitialState() {
        return {
            items : {
                itemList : [
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
                    },
                    {
                        id : 2, 
                        name : 'foehe', 
                        producerId : 2, 
                        actorIds : [10,11,12], 
                        avatar : 'foehe.png', 
                        year : 2021, 
                        duration: 101,
                        description : 'Latius iam disseminata licentia onerosus bonis omnibus Caesar nullum post haec adhibens modum orientis latera cuncta vexabat nec honoratis.',
                        type : 'serie', 
                        genreIds : [3],
                        rating : 4,
                        classification : 'tous publics'
                    },
                    {
                        id : 3, 
                        name : 'test', 
                        producerId : 2, 
                        actorIds : [10,8,12], 
                        avatar : 'test.png', 
                        year : 2020, 
                        duration: 120,
                        description : 'Latius iam disseminata licentia onerosus bonis omnibus Caesar nullum post haec adhibens modum orientis latera cuncta vexabat nec honoratis.',
                        type : 'film', 
                        genreIds : [4,5],
                        rating : 4.5,
                        classification : 'tous publics'
                    }
                ], 
                currentItemId: 2, 
                error : '',
            } as ItemListState,
            filter : {
                genreList : [], 
                selectedGenreIdList : [1,3], 
                error : ''  
            } as FilterListState
        }
    }

})


