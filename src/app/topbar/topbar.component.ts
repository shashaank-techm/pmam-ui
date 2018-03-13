import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material'; 
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from "@angular/router";



export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  position="before";
  constructor(public router:Router, public dialog: MatDialog) { }
  ngOnInit() {
  }
/*
 openSignInDialog(): void {
    let dialogRef = this.dialog.open(SignInDialog, {
      width: '500px',
      data:{

      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      console.log('The dialog was closed');
    });
  }

  openSignUpDialog(){
     let dialogRef = this.dialog.open(SignUpDialog, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openSignUpPage(){
    this.router.navigate(["/userRegistration"]);
  }*/
}


/*
@Component({
  selector: 'sign-in-dialog',
  templateUrl: './sign-in-dialog.html',
  styleUrls:['./topbar.component.css']
})
export class SignInDialog{
  
  UserNameFormControl = new FormControl('', [
      Validators.required,
    ]);
    PasswordFormControl = new FormControl('', [
      Validators.required,
    ]);
  
    matcher = new MyErrorStateMatcher();
  constructor(
    private router:Router,
    public dialogRef: MatDialogRef<SignInDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
    openSignUpPage(){
      this.dialogRef.close();
    this.router.navigate(["/userRegistration"]);
}
  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector:'sign-up-dialog',
  templateUrl:'./sign-up-dialog.html',
  styleUrls:['./topbar.component.css']
})
export class SignUpDialog{
  constructor(
    public dialogRef: MatDialogRef<SignUpDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}*/