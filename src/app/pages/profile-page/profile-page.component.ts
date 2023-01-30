import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent {

  constructor(private formBuilder : FormBuilder) {}
  changePassword : boolean = false

  resetPasswordForm = this.formBuilder.group({
    oldPassword:'',
    newPassword:''
  })


  showResetPassword( ){
    this.changePassword = !this.changePassword  
  }
  

  onFormSubmit(){
    console.log(this.resetPasswordForm.value)
  }


}
