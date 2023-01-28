import { Component } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/user';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {
  constructor(private users: UsersService, private formBuilder: FormBuilder){
    
  }

  ngOnInit(): void {
    this.users.saveUser('id', 'jsklksn')
}

  signupForm = this.formBuilder.group({
    fullname: '',
    email: '',
    password: ''
  })


  user !: User

  onSubmit(){
    const user = this.signupForm.value
    this.users.saveUser('user', JSON.stringify(user))
  }

}
