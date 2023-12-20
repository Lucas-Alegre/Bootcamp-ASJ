import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({

  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  URL_API = 'https://reqres.in/api/users'

  datosUsuarios: any = {
    id: -1,
    name: "",
    job: ""
  }
  public getUsers(): Observable<any> {
    return this.http.get(this.URL_API)
  }
  public createUsers(user: any): Observable<any> {
    return this.http.post(this.URL_API, user);
  }

  public deleteUser(id: any): Observable<any> {
    return this.http.delete(this.URL_API + "/" + id)
  }

  public update(user: any): Observable<any> {
    return this.http.put(this.URL_API + "/" + this.datosUsuarios.id, user);
  }

}
