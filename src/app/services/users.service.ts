import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private cookies: CookieService) { }

  login(user: any): Observable<any>{
    //return this.http.post('https://reqres.in/api/login', user);
    //console.log(user);
    return this.http.post('http://localhost:3000/auth/login', user);
    
  }

  register(user: any): Observable<any> {
    //return this.http.post('https://reqres.in/api/register', user);
    return this.http.post('http://localhost:3000/users', user);
  }

  //metodo para guardar token en cookies
  setToken(token: string){
    this.cookies.set("token", token);
  }

  //metodo para recuperar token de cookies
  getToken(){
    return this.cookies.get("token");
  }
  
  getUser() : Observable<any>{
    const token = this.getToken();
    return this.http.get('https://reqres.in/api/users/2');
    // Aquí iría el endpoint para devolver el usuario para un token
  }

  logout() {
    this.cookies.delete("token");
  }
}
