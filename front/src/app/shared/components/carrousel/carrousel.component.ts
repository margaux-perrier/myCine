import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IItem } from 'src/app/core/models/item';

/** 
* @description Reusable carrousel component
* @param { Observable<IItem[]> } itemList
* @param { string } titleList  
*/
@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent{

  @Input() itemList$! : Observable<IItem[]>;
  @Input() titleList : string = '';  

  responsiveOptions : any[]=[ 
    {
      breakpoint: '1410px', 
      numVisible: 5, 
      numScroll: 5
    }, 
    {
      breakpoint: '1180px', 
      numVisible: 4, 
      numScroll: 4
    }, 
    {
      breakpoint: '950px', 
      numVisible: 3, 
      numScroll: 3
    }, 
    {
      breakpoint: '575px', 
      numVisible: 2, 
      numScroll: 3
    },
    {
      breakpoint: '515px', 
      numVisible: 1, 
      numScroll: 3
    },
  ]
}
