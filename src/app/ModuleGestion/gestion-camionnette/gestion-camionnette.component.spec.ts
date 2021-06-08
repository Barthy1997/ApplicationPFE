import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCamionnetteComponent } from './gestion-camionnette.component';

describe('GestionCamionnetteComponent', () => {
  let component: GestionCamionnetteComponent;
  let fixture: ComponentFixture<GestionCamionnetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionCamionnetteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCamionnetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
