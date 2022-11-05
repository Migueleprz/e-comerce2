import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {Cart} from "@core/services/classes/utils/Cart";

@Component({
  selector: 'app-card-articulo',
  templateUrl: './card-articulo.component.html',
  styleUrls: ['./card-articulo.component.css']
})
export class CardArticuloComponent {
  @Input('imge') image: string = "";
  @Input('articleName') articleName: string = "";
  @Input('articlePrice') articlePrice: string = "";
  @Input('articleId') articleId: string = "";
  @Input('articulo') article!:[];

  constructor(
    private router: Router,
    private cart: Cart
  ) {
  }

  urlArticulo(id: string) {
    this.router.navigate([`articulo/${this.articleName}/${this.articleId}`]);
  }

  addItem(){
    this.cart.addItem(this.article);
  }

}
