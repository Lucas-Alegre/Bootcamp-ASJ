import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  url: string = 'http://localhost:8080/tarea';
  productos: any = []

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(this.url)
  }
  delete(id: any): Observable<any> {
    return this.http.delete(this.url + "/" + id);
  }
  post(producto: any): Observable<any> {
    console.log(producto)
    return this.http.post(this.url, producto);
  }

  put(producto: any, id: any): Observable<any> {
    return this.http.put(this.url + "/" + id, producto);
  }
  
}
