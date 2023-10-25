import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Users } from '../pages/interfaces/interfaces';
import { Observable } from 'rxjs';
import { Usuario } from '../pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private httpclient: HttpClient) { }

  crearUsuario(usuario:Usuario):Observable<Usuario>{
    return this.httpclient.post<Usuario>(`${environment.apiUrl}/registros`, usuario);
  }

  mostrarRegistrados():Observable<Usuario>{
    return this.httpclient.get<Usuario>(`${environment.apiUrl}/registros`)
  }

  //Obtenemos todos los usuarios
  GetAllUsers():Observable<Users>{
    return this.httpclient.get<Users>(`${environment.apiUrl}/usuarios`);
  }

  //Obtenemos un usuario por medio de su username
  GetUserById(codigo: any):Observable<Users>{
    return this.httpclient.get<Users>(`${environment.apiUrl}/usuarios/?email=${codigo}`);
  }

  IsLogged(){
    return sessionStorage.getItem('email')!=null;
  }

  GetName(){
    return sessionStorage.getItem("nombre");
  }

  logout() {
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("nombre");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("userrole");
    sessionStorage.removeItem("ingresado");
  }
}
