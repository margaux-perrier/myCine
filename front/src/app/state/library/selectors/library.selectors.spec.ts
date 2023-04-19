import { LibraryState } from "../reducer/library.reducer"
import { getFavorisIdList, getFavorisList, getWatchedIdList, getWatchedList, getWishIdList, getWishList } from "./library.selectors"
import { ItemListState } from "../../items/reducer/items.reducer";

describe('Library selectors', () => {
   
    it('should select favorisIdList - getFavorisIDList', () => {
        const initialState = createInitialState(); 
        const result = getFavorisIdList.projector(initialState.library);
        expect(result.length).toEqual(2); 
        expect(result).toEqual([1,3]); 
    }),

    it('should select favorite items - getFavorisList', () => {
        const initialState = createInitialState(); 
        const result = getFavorisList.projector(initialState, initialState.library.favorisIdList, initialState.items.itemList); 
        expect(result.length).toEqual(2); 
        expect(result[0].id).toEqual(1); 
        expect(result[1].id).toEqual(3); 
    }), 

    it('should select watchedIdList - getWatchedIdList', () => {
        const initialState = createInitialState(); 
        const result = getWatchedIdList.projector(initialState.library); 
        expect(result.length).toEqual(2); 
        expect(result).toEqual([2,3]); 
    }), 

    it('should select watched items - getWatchedList', () => {
        const initialState = createInitialState(); 
        const result = getWatchedList.projector(initialState, initialState.library.watchedIdList, initialState.items.itemList); 
        expect(result.length).toEqual(2); 
        expect(result[0].id).toEqual(2); 
        expect(result[1].id).toEqual(3); 
    }), 

    it('should select wishIdList - getWishIdList', () => {
        const initialState = createInitialState(); 
        const result = getWishIdList.projector(initialState.library); 
        expect(result.length).toEqual(1); 
        expect(result).toEqual([1]); 
    }), 

    it('should select wished items - getWishList', () => {
        const initialState = createInitialState(); 
        const result = getWishList.projector(initialState, initialState.library.wishIdList, initialState.items.itemList); 
        expect(result.length).toEqual(1); 
        expect(result[0].id).toEqual(1);  
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
                        type : 'film', 
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
                        genreIds : [2],
                        rating : 4.5,
                        classification : 'tous publics'
                    }
                ], 
                currentItemId: null, 
                error : '',
            } as ItemListState,
            library : {
                favorisIdList : [1,3], 
                watchedIdList : [2,3],
                wishIdList : [1],   
                error : '',  
            } as LibraryState
        }
    }

})
