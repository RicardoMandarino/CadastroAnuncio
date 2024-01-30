import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  public post(userData: any):Observable<any> {
    const route: string = 'https://localhost:7191/anuncio';
    return this.http.post(route, userData, {
      headers: {
        
      }
    });
  }
}
