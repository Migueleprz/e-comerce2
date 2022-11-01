import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardArticuloComponent } from './card-articulo.component';

describe('CardArticuloComponent', () => {
  let component: CardArticuloComponent;
  let fixture: ComponentFixture<CardArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardArticuloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
