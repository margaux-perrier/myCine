import { Component, Input, OnInit } from '@angular/core';
import { IGenre } from 'src/app/core/models/genre';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  @Input() genre! : IGenre; 
  
  constructor() { }

  ngOnInit(): void {
  }

}
