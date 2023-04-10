import { Component, Input } from '@angular/core';
import { IGenre } from 'src/app/core/models/genre';

/**
* @description reusable component - displays tag 
* @param { IGenre } genre
*/
@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent {
  @Input() genre! : IGenre; 
}
