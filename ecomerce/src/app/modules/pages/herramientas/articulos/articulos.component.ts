import {Component, OnDestroy, OnInit} from '@angular/core';
import {ArticulosEngine} from "@core/services/classes/data/ArticulosEngine";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {DomSanitizer} from "@angular/platform-browser";
import {ArticulosTallaEngine} from "@core/services/classes/data/ArticulosTallaEngine";
import {ArticulosMarcaEngine} from "@core/services/classes/data/ArticulosMarcaEngine";
import {ArticulosTipoEngine} from "@core/services/classes/data/ArticulosTipoEngine";
import {ArticulosSexEngine} from "@core/services/classes/data/ArticulosSexEngine";

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit, OnDestroy {
  formA!: FormGroup;
  articulos: any;
  page!: number;
  size: number = 3;
  formT!: FormGroup;
  isNew = true;
  articulo_id: number = 0;
  subcribe!: Subscription;
  img!: File;
  imgName: string = "";
  imgPreview!: string;
  defauilImg = './assets/images/default.png';
  marcas: any;
  tipos: any;
  tallas: any;
  sexs: any;

  constructor(
    private articulo: ArticulosEngine,
    private eMarcas: ArticulosMarcaEngine,
    private eTalla: ArticulosTallaEngine,
    private eTipo: ArticulosTipoEngine,
    private eSex: ArticulosSexEngine,
    private formB: FormBuilder,
    private sanitizer: DomSanitizer,
  ) {
  }

  ngOnInit(): void {
    this.configForm();
    this.getMarcas();
    this.getTallas();
    this.getTipos();
    this.getSex();
    this.list();
  }

  configForm(): void {
    this.formA = this.formB.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      preciop: ['', Validators.required],
      stock: ['', Validators.required],
      marca_id: ['', Validators.required],
      tipo_id: ['', Validators.required],
      talla_id: ['', Validators.required],
      sex_id: ['', Validators.required],
      descripcion: ['', Validators.required],
    })
  }

  dataForm(): FormData {
    const formD = new FormData();
    formD.append('nombre', this.formA.get('nombre')?.value);
    formD.append('precio', this.formA.get('precio')?.value);
    formD.append('preciop', this.formA.get('preciop')?.value);
    formD.append('stock', this.formA.get('stock')?.value);
    formD.append('marca_id', this.formA.get('marca_id')?.value);
    formD.append('tipo_id', this.formA.get('tipo_id')?.value);
    formD.append('talla_id', this.formA.get('talla_id')?.value);
    formD.append('sex_id', this.formA.get('sex_id')?.value);
    formD.append('descripcion', this.formA.get('descripcion')?.value);
    if (this.img) {
      formD.append('image', this.img, this.img.name);
    }
    return formD;
  }

  list(): void {
    this.subcribe = this.articulo.readArticles().subscribe({
      next: (n) => {
        this.articulos = n.data;
      }
    })
  }

  save(): void {
    this.subcribe = this.articulo.storeArticles(this.dataForm());
    this.list();
    this.resetForm();
  }

  get(id: number): void {
    this.subcribe = this.articulo.showArticles(id).subscribe({
      next: (n) => {
        this.setvalueForm(n);
      },
      error: (e) => {
        console.log(e)
      }
    });
  }

  update(): void {
    this.subcribe = this.articulo.updateArticles(this.dataForm(), this.articulo_id);
    this.list();
    this.resetForm();
  }

  getImage(event: any): File {
    this.img = event.target.files[0];
    this.previewImage(this.img).then((img: any) => {
      this.imgPreview = img.base;
    });
    this.imgName = this.img.name;
    return this.img;
  }

  previewImage = async ($event: any) => new Promise((rsl, rj) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        rsl({
          blob: $event,
          image,
          base: reader.result
        })
      }
    } catch (e) {
      return e;
    }
  });

  getMarcas(): void {
    this.eMarcas.index().subscribe({
      next: (n) => {
        this.marcas = n;
      }
    })
  }

  getTallas(): void {
    this.eTalla.index().subscribe({
      next: (n) => {
        this.tallas = n;
      }
    })

  }

  getTipos(): void {
    this.eTipo.index().subscribe({
      next: (n) => {
        this.tipos = n;
      }
    })

  }

  getSex(): void {
    this.eSex.index().subscribe({
      next: (n) => {
        this.sexs = n;
      }
    })

  }

  setvalueForm(n: any): void {
    this.isNew = false;
    this.articulo_id = Number(n.id);
    this.imgPreview = n.image_path
    this.formA.setValue({
      nombre: n.nombre,
      precio: n.precio,
      preciop: n.preciop,
      stock: n.stock,
      tipo_id: n.tipo_id,
      marca_id: n.marca_id,
      sex_id: n.sex_id,
      talla_id: n.talla_id,
      descripcion: n.descripcion,
    });
  }

  resetForm(): void {
    this.isNew = true;
    this.formA.reset();
    this.imgPreview = './assets/images/default.png';
  }

  ngOnDestroy(): void {
    this.subcribe.unsubscribe();
  }

}
