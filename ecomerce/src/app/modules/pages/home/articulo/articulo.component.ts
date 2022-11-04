import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Articulo} from "@core/const/articulo";
import {ArticulosEngine} from "@core/services/classes/data/ArticulosEngine";
import {MArticulos} from "@core/interfaces/models/mArticulos";

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  id: number = 0;
  articulo = Articulo;
  cant = 1;
  disp = 0;

  constructor(
    private route: ActivatedRoute,
    private articuloR: ArticulosEngine
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.getDataArticulo();
  }

  getDataArticulo(): void{
    this.articuloR.showArticles(this.id).subscribe(
      {
        next:(n:MArticulos[])=>{
          this.articulo.nombre = n[0].nombre;
          this.articulo.precio = n[0].precio;
          this.articulo.stock = n[0].stock;
          this.disp = n[0].stock;
          this.articulo.image = n[0].image_path;
          this.articulo.marca = n[0].marcas.nombre;
          this.articulo.marca_image = n[0].marcas.image_path;
          this.articulo.tipo = n[0].tipos.nombre;
          this.articulo.talla = n[0].tallas.nombre;
          this.articulo.sex = n[0].sex.nombre;
          this.articulo.description = n[0].descripcion;
        }
      }
    )
  }

  inc(){
    if(this.cant < this.disp){
      this.cant++;
    }
  }

  dec(){
    if(this.cant >= 2){
      this.cant--;
    }
  }


}
