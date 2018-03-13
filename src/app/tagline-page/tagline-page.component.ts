import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router } from "@angular/router";
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';



export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-tagline-page',
  templateUrl: './tagline-page.component.html',
  styleUrls: ['./tagline-page.component.css']
})
export class TaglinePageComponent implements OnInit {

  constructor(public router:Router, public dialog: MatDialog) { }

  ngOnInit() {
  }
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
}
   openDialogStandard(): void {
    let dialogRef = this.dialog.open(ViewFeaturesDialogStandard, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

   openDialogPremium(): void {
    let dialogRef = this.dialog.open(ViewFeaturesDialogPremium, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

   openDialogGold(): void {
    let dialogRef = this.dialog.open(ViewFeaturesDialogGold, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'view-features-dialog-standard',
  templateUrl: './view-features-dialog-standard.html',
  styleUrls:['./tagline-page.component.css']
})
export class ViewFeaturesDialogStandard {

  constructor(
    public dialogRef: MatDialogRef<ViewFeaturesDialogStandard>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'view-features-dialog-premium',
  templateUrl: './view-features-dialog-premium.html',
  styleUrls:['./tagline-page.component.css']
})
export class ViewFeaturesDialogPremium {

  constructor(
    public dialogRef: MatDialogRef<ViewFeaturesDialogPremium>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'view-features-dialog-gold',
  templateUrl: './view-features-dialog-gold.html',
  styleUrls:['./tagline-page.component.css']
})
export class ViewFeaturesDialogGold {

  constructor(
    public dialogRef: MatDialogRef<ViewFeaturesDialogGold>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}



@Component({
  selector: 'sign-in-dialog',
  templateUrl: './sign-in-dialog.html',
  styleUrls:['../topbar/topbar.component.css']
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
  styleUrls:['../topbar/topbar.component.css']
})
export class SignUpDialog{
  constructor(
    public dialogRef: MatDialogRef<SignUpDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}