import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'; 
import { GenreListData } from './genreList-data';
import { ItemListData } from './itemList-data';
import { ProducerListData } from './producerList-data';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() {}
  createDb(){
    const itemList = ItemListData.items; 
    const genreList = GenreListData.genreList;  
    const producerList = ProducerListData.producerList; 

    return {itemList, genreList, producerList}; 
  }
}
