import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagComponent } from './tag.component';
import { IGenre } from 'src/app/core/models/genre';

describe('TagComponent', () => {
  let component: TagComponent;
  let fixture: ComponentFixture<TagComponent>;
  let genre : IGenre = {
    id: 1,
    name: 'drame', 
    color: '#802FDE', 
    background : '#E8E2F7',
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagComponent);
    component = fixture.componentInstance;
    component.genre = genre; 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
