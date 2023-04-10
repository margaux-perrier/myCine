import { Component, Input } from '@angular/core';

/** 
* @description reusable button
* @param { string } text button's text
* @param { boolean } filter true if it's a filter button
* @param { boolean } reset true if it's a reset button 
*/
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
 
  @Input() text : string = ''; 
  @Input() filter : boolean = false; 
  @Input() reset : boolean = false; 

}
