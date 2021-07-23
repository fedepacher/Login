import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, AbstractControl, FormGroup, Validators } from '@angular/forms';
import Validation from "../utils/validation";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formRegister:FormGroup = new FormGroup({});
  submitted = false;

  constructor(private fBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  private createRegisterForm(){
    this.formRegister = this.fBuilder.group({
      fullname: ['', Validators.required],
      map_id: ['', [Validators.required, Validators.min(0), Validators.max(9999)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    },
    {
      validators: [Validation.match('password', 'confirmPassword')]
    });    
  }

  //esta funcion es para no tener que poner todo el tiempo this.formRegister.controls.....
  get f(): {[key:string]: AbstractControl}{
    return this.formRegister.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if(this.formRegister.invalid){
      console.log("Error en submit");
      return;
    }
    console.log(JSON.stringify(this.formRegister.value, null, 2));
  }

  onReset(): void {
    this.submitted=false;
    this.formRegister.reset();
  }


  // submit(){
  //   console.log("Submitted");
  // }
}
