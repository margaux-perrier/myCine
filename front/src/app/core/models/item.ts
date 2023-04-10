import {IGenre} from './genre';
import { IPeople } from './people';

export interface IItem {
    id: number, 
    name : string, 
    avatar : string, 
    producerId : number, 
    producer? : IPeople, 
    actorIds : number[], 
    actors? : IPeople[], 
    year : number, 
    duration? : number, 
    description : string, 
    type : string, 
    genreIds : number[],
    genres? : IGenre[], 
    rating : number, 
    classification : string, 
    currentIndex? : number, 
}
