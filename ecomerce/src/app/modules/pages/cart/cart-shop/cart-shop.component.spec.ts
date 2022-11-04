import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartShopComponent } from './cart-shop.component';

describe('CartShopComponent', () => {
  let component: CartShopComponent;
  let fixture: ComponentFixture<CartShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
