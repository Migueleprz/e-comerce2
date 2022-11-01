import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-articulo',
  templateUrl: './card-articulo.component.html',
  styleUrls: ['./card-articulo.component.css']
})
export class CardArticuloComponent implements OnInit {
  @Input('imge') image: string = "";
  @Input('articleName') articleName: string = "";
  @Input('articlePrice') articlePrice: string = "";
  @Input('articleId') articleId: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
