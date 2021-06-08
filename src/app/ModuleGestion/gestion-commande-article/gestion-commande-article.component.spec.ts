import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCommandeArticleComponent } from './gestion-commande-article.component';

describe('GestionCommandeArticleComponent', () => {
  let component: GestionCommandeArticleComponent;
  let fixture: ComponentFixture<GestionCommandeArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionCommandeArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCommandeArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
