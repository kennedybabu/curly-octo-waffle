import { Injectable } from '@angular/core';
import { User } from './user';
import  *  as CryptoJS from  'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  arr: User[] = []

  public saveUser(value:string) {  
    let storedArr = localStorage.getItem('users')
    let users = this.getUsers('users')
    let userObject = JSON.parse(value)

    let email = userObject.email
    let name = userObject.fullname

    if(storedArr){
      this.arr = JSON.parse(storedArr)
      this.arr.push(JSON.parse(value))
      localStorage.setItem('users', JSON.stringify(this.arr))   
    } else {
      this.arr = []
      this.arr.push(JSON.parse(value))
      localStorage.setItem('users', JSON.stringify(this.arr))  
    }  
    
  }
  

  public getUsers(key: string){   
    return localStorage.getItem(key)
  }


  public loginUser(){
    let people = this.getUsers('users')
  } 

}
