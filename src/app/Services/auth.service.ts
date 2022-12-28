import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiServiceUrl=environment.baseUrl;

  constructor(private http:HttpClient) { }

  // add new User
  public addUser(user:any){
    return this.http.post(`${this.apiServiceUrl}/user/create`,user);
  }

}
