import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallasComponent } from './tallas.component';

describe('TallasComponent', () => {
  let component: TallasComponent;
  let fixture: ComponentFixture<TallasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TallasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TallasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
