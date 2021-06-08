import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourneComponent } from './tourne.component';

describe('TourneComponent', () => {
  let component: TourneComponent;
  let fixture: ComponentFixture<TourneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
