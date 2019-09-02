import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CustomerService } from 'src/app/services/customerservice/customer.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm',  { static: true }) loginForm: NgForm;
  
  constructor(private router:Router,private customerService:CustomerService,private snackBar:MatSnackBar) { }

  ngOnInit() {
  }

  btnClick= function () {
    this.router.navigateByUrl('/CreateCustomer');
};


  onSubmit(){
    const value = this.loginForm.value;
    
    let doctor = {
      email: value.email,
      password: value.password,
    }
   
    if(value.email && value.password){
      this.customerService.login(doctor).subscribe(
        (response) => {
          if(response !== null){
             localStorage.setItem('currentUser', JSON.stringify(response));
            sessionStorage.setItem('email', doctor.email);
            
            this.router.navigate(['ItemPage']);
            
            console.log(value.email)
          } else {
            this.snackBar.open('Email or password is incorrect !!', 'Ok', {
              panelClass: ['snackbar']
            });
          }
          
        }
      );
    } else {
      this.snackBar.open('Email or password is incorrect !!', 'Ok', {
       
        panelClass: ['snackbar']
      });
    }
  }
}
