import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  constructor() { }
  @Input() currentPage: number = 1;
  @Input() total: number = 0;
  @Input() limit: number = 20;
  @Output() changePage = new EventEmitter<number>();

  pages: number[] = [];

  ngOnInit(): void {
    const pageCount = Math.ceil(this.total /this.limit); 
    this.pages = this.range(1, pageCount); 
  }

  //génère un tableau de pages => pour pouvoir avoir le nombre de pages. 
  range(start: number, end: number): number[] {
    return [...Array(end).keys()].map((el) => el + start);
  }

}
