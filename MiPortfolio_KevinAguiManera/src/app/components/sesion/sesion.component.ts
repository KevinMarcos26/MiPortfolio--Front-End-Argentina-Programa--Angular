import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})

export class SesionComponent implements OnInit {
  form: FormGroup;
  loginError: Boolean = false;
  constructor(
    private loginService : LoginService,
    private formBuilder : FormBuilder
  ) {
    this.form = this.formBuilder.group(
      {
        nombre: ['', [Validators.required]],
        password: ['', [Validators.required]]
      }
    )
   }
   
   ngOnInit(): void {
  }

  onSubmit(event: Event) {
    event.preventDefault;

    this.loginService.login(this.form.value).subscribe(
      (response: Boolean) => {
        if (response){
          window.location.reload();
        }
        else {
          this.loginError = true;
        }
      }
    );
  } }
