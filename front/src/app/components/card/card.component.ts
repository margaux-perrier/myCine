import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IItem } from '../../models/item';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush

})
export class CardComponent implements OnInit {
  @Input() item! : IItem; 

  constructor() { }

  ngOnInit(): void {}

}
