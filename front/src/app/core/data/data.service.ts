import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'; 
import { GenreListData } from './genreList-data';
import { ItemListData } from './itemList-data';
import { PeopleListData } from './peopleList-data';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() {}
  createDb(){
    const itemList = ItemListData.items; 
    const genreList = GenreListData.genreList;  
    const peopleList = PeopleListData.peopleList; 

    return {itemList, genreList, peopleList}; 
  }
}
