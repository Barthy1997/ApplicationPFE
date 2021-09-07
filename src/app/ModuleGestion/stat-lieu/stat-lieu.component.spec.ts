import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatLieuComponent } from './stat-lieu.component';

describe('StatLieuComponent', () => {
  let component: StatLieuComponent;
  let fixture: ComponentFixture<StatLieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatLieuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatLieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
