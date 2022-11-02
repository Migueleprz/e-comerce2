import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerramientasComponent } from './herramientas.component';

describe('HerramientasComponent', () => {
  let component: HerramientasComponent;
  let fixture: ComponentFixture<HerramientasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerramientasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerramientasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
