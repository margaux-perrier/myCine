import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IItem } from 'src/app/core/models/item';
import { RatingModule } from 'primeng/rating'; 
import { FormsModule } from '@angular/forms';


describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let router : Router; 

  let item : IItem = {
    id : 2, 
    name : 'foehe', 
    producerId : 2, 
    actorIds : [10,11,12], 
    avatar : 'foehe.png', 
    year : 2021, 
    duration: 101,
    description : 'Latius iam disseminata licentia onerosus bonis omnibus Caesar nullum post haec adhibens modum orientis latera cuncta vexabat nec honoratis.',
    type : 'film', 
    genreIds : [3],
    rating : 4,
    classification : 'tous publics'
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ], 
      imports : [ RouterTestingModule, RatingModule, FormsModule ], 
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.item = item; 
    fixture.detectChanges();
    router = TestBed.inject(Router); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to the detailsPage when onClick is called', () => {
    spyOn(router, 'navigate');
    component.onClick(item.id);
    expect(router.navigate).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith([router.url, item.id ])
  });
});
