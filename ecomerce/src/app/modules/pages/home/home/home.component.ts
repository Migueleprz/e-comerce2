import {Component, OnInit} from '@angular/core';
import {ArticulosEngine} from "@core/services/classes/data/ArticulosEngine";
import {MArticulosPaginate} from "@core/interfaces/models/mArticulosPaginate";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dts:any;
  page!:number;
  size:number = 6;

  constructor(
    private article: ArticulosEngine
  ) {
  }

  ngOnInit(): void {
     this.article.readArticles().subscribe({
       next:(n:MArticulosPaginate)=>{
         this.dts = n.data
         this.dts.forEach((a:any)=>{
           Object.assign(a,{cant:1, total:a.precio});
         })
       }
     });
  }

}
