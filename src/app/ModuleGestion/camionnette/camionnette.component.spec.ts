import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamionnetteComponent } from './camionnette.component';

describe('CamionnetteComponent', () => {
  let component: CamionnetteComponent;
  let fixture: ComponentFixture<CamionnetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamionnetteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamionnetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
