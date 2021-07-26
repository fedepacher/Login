import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = "";
  password : string = "";

  constructor(public userService: UsersService, public router: Router) { }

  ngOnInit(): void {
  
  }

  login(){
    //const user = {email: this.email, password: this.password};
    const user = {username: this.email, password: this.password};
    //suscribe es el await de js, es decir hace la funcion asincronica,
    //llama la funcion y cuand recupera el dato en data sigue su ejecucion, es decir 
    //no se queda esperando
    this.userService.login(user).subscribe( data => {
      console.log(data);
      this.userService.setToken(data.token);
      this.router.navigateByUrl('/home');//me redirecciona a la pagina principal
    },
    error => {
      console.log(error);
    });    
  }

  register(){
    this.router.navigateByUrl('/register');
  } 
    
}
