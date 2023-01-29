import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  arr: User[] = []

  public saveUser(value:string) {  
    let storedArr = localStorage.getItem('users')
    if(storedArr){
      this.arr = JSON.parse(storedArr)
      this.arr.push(JSON.parse(value))
      localStorage.setItem('users', JSON.stringify(this.arr))   
    }
    
  }

  public getUsers(key: string){   
    return localStorage.getItem(key)
  }
}
