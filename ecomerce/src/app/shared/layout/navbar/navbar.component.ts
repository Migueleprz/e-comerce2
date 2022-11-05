import {Component, DoCheck} from '@angular/core';
import {Auth} from '@core/services/classes/Auth';
import {LocalStorage} from '@core/services/classes/LocalStorage';
import {Router} from "@angular/router";
import {Cart} from "@core/services/classes/utils/Cart";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})
export class NavbarComponent implements  DoCheck {
  isLogged!: boolean;
  usuario!: string;
  foto: string = "";
  type!: boolean;
  public numItem!: number;

  constructor(
    private lStorage: LocalStorage,
    private auth: Auth,
    private router:Router,
    private cart: Cart
  ) {
  }

  ngDoCheck(){
    this.isLogged = Boolean(localStorage.getItem("isLogged"));
    if(this.isLogged) {
      this.usuario = this.lStorage.get("user");
      this.foto = this.lStorage.get("image");
      this.type = Boolean(this.lStorage.get("type"));
    }
    this.cart.getArticle().subscribe({
      next:(n)=>{
        this.numItem = n.length;
      }
    })
  }


  salir(): void {
    this.auth.logout();
  }

  cartArticulo(): void{
    this.router.navigate(['/carrito/cartArticulo']);
  }

}
