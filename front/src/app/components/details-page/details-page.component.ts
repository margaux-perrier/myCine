import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { setCurrentItem } from 'src/app/actions/items.actions';
import { IItem } from 'src/app/models/item';
import { getCurrentItem } from 'src/app/reducers/items.reducer';
import { State } from '../../state/app.state'; 

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  name! : string; 
  currentItem$! : Observable<IItem | null | undefined>; 
  
  constructor(private activatedRoute: ActivatedRoute, private router : Router, private store : Store<State> ) {}

  ngOnInit() : void {
    const itemId = Number(this.activatedRoute.snapshot.paramMap.get('id')); 
    this.store.dispatch(setCurrentItem({ currentItemId: itemId })); 
    this.currentItem$ = this.store.select(getCurrentItem); 
    this.currentItem$.pipe(
      tap(data => console.log('ici', data))
    )
  }

  handleClick(){
    console.log('test'); 
    this.router.navigateByUrl('/movies'); 
  }
}
