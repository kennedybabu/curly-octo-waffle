import { Injectable } from '@angular/core';
import { User } from './user';
import  *  as CryptoJS from  'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  arr: User[] = []

  value : any

  public saveUser(value:string) {  
    let storedArr = localStorage.getItem('users')
    let users = this.getUsers('users')
    let userObject = JSON.parse(value)

    let email = userObject.email
    let name = userObject.fullname

    if(storedArr){
      this.arr = JSON.parse(storedArr)
      this.arr.push(JSON.parse(value))
      localStorage.setItem('users', this.encrypt('users', JSON.stringify(this.arr)))   
    } else {
      this.arr = []
      this.arr.push(JSON.parse(value))
      localStorage.setItem('users', this.encrypt('users', JSON.stringify(this.arr)))  
    }  
    
  }
  

  public getUsers(key: string){   
    return localStorage.getItem(key)
  }


  public loginUser(){
    let people = this.getUsers('users')
  } 


  private encrypt(txt: string, value: any): string {
    return CryptoJS.AES.encrypt(txt, value).toString();
  }
  

  private decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this.value).toString(CryptoJS.enc.Utf8);
  }

}
