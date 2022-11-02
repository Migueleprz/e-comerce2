import {Component, OnInit} from '@angular/core';
import {ArticulosMarcaEngine} from "@core/services/classes/data/ArticulosMarcaEngine";
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {
  marcas: any;
  formM!: FormGroup;
  isNew = true;
  img!: File;
  imgPreview!: string;
  defauilImg = './assets/images/default.png';
  marca_id: number = 0;
  page!:number;
  size:number = 3;

  constructor(
    private marca: ArticulosMarcaEngine,
    private formB: FormBuilder,
    private sanitizer: DomSanitizer,
  ) {
  }

  ngOnInit(): void {
    this.list();
    this.configForm();
  }

  configForm(): void {
    this.formM = this.formB.group({
      nombre: ['', Validators.required]
    })
  }

  dataForm(): FormData {
    const formD = new FormData();
    formD.append('nombre', this.formM.get('nombre')?.value);
    if (this.img) {
      formD.append('image', this.img, this.img.name);
    }

    return formD;
  }

  save(): void {
    this.marca.storage(this.dataForm());
    this.list();
    this.resetForm();
  }

  get(id: number) {
    this.marca.show(id).subscribe({
      next: (n) => {
        this.setvalueForm(n);
      },
      error: (e) => {
        console.log(e)
      }
    })
  }

  update(): void {
    this.marca.update(this.dataForm(), this.marca_id);
    this.list();
    this.resetForm();
  }

  list(): void {
    this.marca.index().subscribe({
      next: (n) => {
        this.marcas = n;
      }
    })
  }

  getImage(event: any): File {
    this.img = event.target.files[0];
    this.previewImage(this.img).then((img: any) => {
      this.imgPreview = img.base;
    });
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

  setvalueForm(n: any): void {
    this.isNew = false;
    this.marca_id = Number(n.id);
    this.imgPreview = n.image_path
    this.formM.setValue({
      nombre: n.nombre
    });
  }

  resetForm():void{
    this.isNew = true;
    this.formM.reset();
    this.imgPreview = './assets/images/default.png';
  }


}
