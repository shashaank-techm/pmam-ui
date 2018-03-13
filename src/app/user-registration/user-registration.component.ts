import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators,AbstractControl} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent  {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  FNFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[A-Za-z]*')
  ]);
  LNFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[A-Za-z]*')
    
  ]);
  contactFormControl=new FormControl('',[
    Validators.required,
    Validators.pattern('^(0|[1-9][0-9]*)$')
  ]);
 AddressFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[A-Za-z]*')
  ]);
  passwordFormControl=new FormControl('',[
    Validators.required,
    // Validators.pattern(this.pswdPattern)
  ]);
  confirmPasswordFormControl=new FormControl('',[
    Validators.required
  ]);
  DOBFormControl=new FormControl('',[
    Validators.required
  ]);
//   matchPasswords=(control:AbstractControl)=>{
//     const password=control.get('password');
//     const confirmpassword=control.get('confirmPassword')
//     if(!password||!confirmpassword)
//       {
//         return null;
//       }
// return(password.value==confirmpassword.value)?{mismatchedpasswords:false} :{mismatchedpasswords:true};

//   }


  matcher = new MyErrorStateMatcher();
}
