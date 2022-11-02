import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ArticulosTallaEngine} from "@core/services/classes/data/ArticulosTallaEngine";

@Component({
  selector: 'app-tallas',
  templateUrl: './tallas.component.html',
  styleUrls: ['./tallas.component.css']
})
export class TallasComponent implements OnInit {
  tallas: any;
  formT!: FormGroup;
  isNew = true;
  talla_id: number = 0;
  page!: number;
  size: number = 3;

  constructor(
    private formB: FormBuilder,
    private talla: ArticulosTallaEngine
  ) {
  }

  configForm(): void {
    this.formT = this.formB.group({
      nombre: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.configForm();
    this.list();
  }

  save(): void {
    this.talla.storage(this.formT.value);
    this.list();
    this.resetForm();
  }

  get(id: number) {
    this.talla.show(id).subscribe({
      next: (n) => {
        this.setvalueForm(n);
      },
      error: (e) => {
        console.log(e)
      }
    })
  }

  update(): void {
    this.talla.update(this.formT.value, this.talla_id);
    this.list();
    this.resetForm();
  }

  list(): void {
    this.talla.index().subscribe({
      next: (n) => {
        this.tallas = n;
      }
    })
  }

  setvalueForm(n: any): void {
    this.isNew = false;
    this.talla_id = Number(n.id);
    this.formT.setValue({
      nombre: n.nombre
    });
  }

  resetForm(): void {
    this.isNew = true;
    this.formT.reset();
  }

}
