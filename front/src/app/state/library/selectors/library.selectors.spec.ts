import { IItem } from "src/app/core/models/item"
import { LibraryState } from "../reducer/library.reducer"
import { getFavorisList } from "./library.selectors"

describe('Library selectors', () => {
    it('should select the favorite items', () => {
        const initialState : LibraryState = {
            favorisIdList : [1], 
            watchedIdList : [],
            wishIdList : [],   
            error : '', 
        }

        const itemList = newItemList(); 

        const result = getFavorisList.projector(itemList, initialState.favorisIdList); 
        console.log('icii' , result); 
        expect(result.length).toEqual(1); 
        expect(result[0].id).toEqual(1); 
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