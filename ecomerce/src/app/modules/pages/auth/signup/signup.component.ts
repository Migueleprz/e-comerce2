import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Auth} from "@core/services/classes/Auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formR!: FormGroup;
  image!: File;
  islooged = Boolean(localStorage.getItem('isLogged'));

  constructor(
    private auth: Auth,
    private formB: FormBuilder,
    private router:Router
  ) {
    if(this.islooged){
      router.navigate(['/']);
    }
  }

  configForm():void {
    this.formR = this.formB.group({
      nuip:['', Validators.required],
      nombres:['', Validators.required],
      apellidos:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      passwordc: ['', Validators.required]
    });
  }

  getImage(event: any): File {
    this.image = event.target.files[0];
    return this.image;
  }

  dataForm():FormData {
    const formD = new FormData();
    formD.append('nuip', this.formR.get('nuip')?.value);
    formD.append('nombres', this.formR.get('nombres')?.value);
    formD.append('apellidos', this.formR.get('apellidos')?.value);
    formD.append('email', this.formR.get('email')?.value);
    formD.append('password', this.formR.get('password')?.value);
    formD.append('passwordc', this.formR.get('passwordc')?.value);
    if(this.image){
      formD.append('image', this.image);
    }
    return formD;
  }

  ngOnInit(): void {
    this.configForm()
  }

  register():void{
    this.auth.register(this.dataForm());
  }

}
