import { Pipe, PipeTransform } from '@angular/core';
import { IItem } from '../models/item';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {

  transform(itemList: IItem[], searchText: string): IItem[]{
    if(searchText.trim() === '') return itemList 
    searchText = searchText.toLowerCase(); 
    return itemList.filter( item => 
      item.name.toLowerCase().includes(searchText) || item.producer?.firstname.toLowerCase().includes(searchText)
    );
  }

}
