import {Component, DoCheck} from '@angular/core';
import {Auth} from '@core/services/classes/Auth';
import {LocalStorage} from '@core/services/classes/LocalStorage';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})
export class NavbarComponent implements   DoCheck {
  isLogged!: boolean;
  usuario!: string;
  foto: string = "/";
  type!: boolean;

  constructor(
    private lStorage: LocalStorage,
    private auth: Auth,
  ) {
  }

  ngDoCheck(){
    this.isLogged = Boolean(localStorage.getItem("isLogged"));
    if(this.isLogged) {
      this.usuario = this.lStorage.get("user");
      this.foto = this.lStorage.get("image");
      this.type = Boolean(this.lStorage.get("type"));
    }
  }


  salir(): void {
    this.auth.logout();
  }

}
