import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public userService: UsersService, public router: Router) { }

  ngOnInit(): void {
    this.getUserLogged();
  }

  getUserLogged(){
    this.userService.getUser().subscribe(user => {
      console.log(user);
    },
    error => {
      console.log(error);
    });
  }

  logout(){
    this.userService.logout();
    this.router.navigateByUrl('/login');
  }

}
