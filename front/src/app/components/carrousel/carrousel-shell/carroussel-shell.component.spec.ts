import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselShellComponent } from './carousel-shell.component';

describe('CarousseShellComponent', () => {
  let component: CarrouselShellComponent;
  let fixture: ComponentFixture<CarrouselShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrouselShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
