import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-articulo',
  templateUrl: './card-articulo.component.html',
  styleUrls: ['./card-articulo.component.css']
})
export class CardArticuloComponent{
  @Input('imge') image: string = "";
  @Input('articleName') articleName: string = "";
  @Input('articlePrice') articlePrice: string = "";
  @Input('articleId') articleId: string = "";
  constructor(
    private router: Router
  ) { }

articulo(id:string){
    this.router.navigate([`articulo/${this.articleName}/${this.articleId}`]);
}

}
