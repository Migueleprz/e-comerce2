import {Component, OnInit} from '@angular/core';
import {Cart} from "@core/services/classes/utils/Cart";

@Component({
  selector: 'app-cart-shop',
  templateUrl: './cart-shop.component.html',
  styleUrls: ['./cart-shop.component.css']
})
export class CartShopComponent implements OnInit {
  public article: any = [];
  public cant: number = 0;
  public totalVal: number = 0;

  constructor(
    private cart: Cart
  ) {
  }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    this.cart.getArticle().subscribe({
      next: (n) => {
        this.article = n;
        this.cant = n.length;
        this.totalVal = this.cart.getValorTotal();
      }
    });
  }

  removeItem(item:any): void {
    this.cart.deleteItem(item);
  }
  removeAllItem(): void {
    const mes = confirm('Desea eliminar todos los items?');
    if(mes){
      this.cart.deleteAllItem();
    }

  }

}
