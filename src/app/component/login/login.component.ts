import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = "";
  password : string = "";

  constructor(public userService: UsersService) { }

  ngOnInit(): void {
  
  }

  login(){
    const user = {email: this.email, password: this.password};
    //suscribe es el await de js, es decir hace la funcion asincronica,
    //llama la funcion y cuand recupera el dato en data sigue su ejecucion, es decir 
    //no se queda esperando
    this.userService.login(user).subscribe( data => {
      console.log(data);     
    });
    
  }
}
