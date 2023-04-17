import { provideMockStore, MockStore } from '@ngrx/store/testing'; 
import { ItemListState } from '../reducer/items.reducer';
import { TestBed } from '@angular/core/testing';
import { getCurrentItem } from './items.selectors';

describe('Items Selector', () => {
    const initialState : ItemListState = {
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
                }
            ], 
            currentItemId: 2, 
            error : '',
        }

    it('should select the current Item based on its id', () => {
        const result = getCurrentItem.projector(initialState, initialState.currentItemId); 
        expect(result?.id).toEqual(2);
        expect(result).toBe(initialState.itemList[1])       
    })

})


