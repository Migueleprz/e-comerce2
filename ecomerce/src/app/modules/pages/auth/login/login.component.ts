import { Component, OnInit } from '@angular/core';
import {Auth} from "@core/services/classes/Auth";
import {FormBuilder, FormGroup,  Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formI!: FormGroup;
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
    this.formI = this.formB.group({
      email:['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.configForm()
  }

  login():void{
    this.auth.login(this.formI.value);
  }

}
