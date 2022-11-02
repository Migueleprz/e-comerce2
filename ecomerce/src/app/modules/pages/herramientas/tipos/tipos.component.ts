import { Component, OnInit } from '@angular/core';
import {ArticulosTipoEngine} from "@core/services/classes/data/ArticulosTipoEngine";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-tipos',
  templateUrl: './tipos.component.html',
  styleUrls: ['./tipos.component.css']
})
export class TiposComponent implements OnInit {
  tipos: any;
  formTp!: FormGroup;
  isNew = true;
  tipo_id: number = 0;
  page!: number;
  size: number = 3;
  constructor(
    private tipo: ArticulosTipoEngine,
    private formB: FormBuilder,
  ) { }

  configForm(): void {
    this.formTp = this.formB.group({
      nombre: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.configForm();
    this.list();
  }

  save(): void {
    this.tipo.storage(this.formTp.value);
    this.list();
    this.resetForm();
  }

  get(id: number) {
    this.tipo.show(id).subscribe({
      next: (n) => {
        this.setvalueForm(n);
      },
      error: (e) => {
        console.log(e)
      }
    })
  }

  update(): void {
    this.tipo.update(this.formTp.value, this.tipo_id);
    this.list();
    this.resetForm();
  }

  list(): void {
    this.tipo.index().subscribe({
      next: (n) => {
        this.tipos = n;
      }
    })
  }

  setvalueForm(n: any): void {
    this.isNew = false;
    this.tipo_id = Number(n.id);
    this.formTp.setValue({
      nombre: n.nombre
    });
  }

  resetForm(): void {
    this.isNew = true;
    this.formTp.reset();
  }

}
