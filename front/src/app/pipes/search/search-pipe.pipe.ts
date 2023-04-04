import { Pipe, PipeTransform } from '@angular/core';
import { IItem } from '../../models/item';



/** @class searchPipe
* filter items according to a search value based on the item's name or the item's producer name
* @param {IItem[]} itemList
* @param {String} searchText
* @returns {IItem[]} filtered itemList 
*/
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
