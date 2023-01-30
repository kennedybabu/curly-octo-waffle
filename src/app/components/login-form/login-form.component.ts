import { Component } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { FormBuilder } from '@angular/forms';
import { User } from './../../user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  constructor(private users: UsersService , private formBuilder: FormBuilder, private router: Router){

  } 


  ngOnInit(){

  }

  storedUsers: User[] = []
  loginForm = this.formBuilder.group({
    email: '',
    password: ''
  })

  onSubmit(){
    let myStore = this.users.getUsers('users')

    let email = this.loginForm.value.email
    let password = this.loginForm.value.password
    // let name = this.loginForm.value.email
    
    if(myStore){
      let persons = JSON.parse(myStore).filter(function (el : any) {
        return el.email === email && el.password === password
      })

      if(persons.length > 0){
        window.alert('login successful')
        this.router.navigate(['/profile'])
      } else {
        alert('no acc with such credentials')
      }
    }
  }

  

}
