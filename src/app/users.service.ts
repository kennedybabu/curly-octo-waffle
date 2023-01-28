import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  public saveUser(key:string, value:string){
    localStorage.setItem(key, value)
  }
}
