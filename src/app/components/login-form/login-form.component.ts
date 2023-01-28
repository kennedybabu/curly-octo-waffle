import { Component } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  constructor(private users: UsersService ){

  }

}
