import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 form = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required]),
    code: new FormControl("", [Validators.required])
  });

  private loggedin: boolean;
  passwordForgot: boolean = false;
  codeSent: boolean = false;
  constructor(private authService: AuthService, private route: Router) {}

  ngOnInit() {}

  login() {
    if (!this.passwordForgot) {
      this.authService
        .login(this.form.get("email").value, this.form.get("password").value)
        .subscribe(responseData => {
          if (!responseData.userId) {
            alert("Invalid credentials");
            //Swal.fire("Good job!", "You clicked the button!", "success");
          }
          switch (responseData.role) {
            case "C":
              this.route.navigateByUrl("Customer");
              this.authService.setCredentials(
                responseData.userId,
                responseData.token,

                responseData.role,
                responseData.email
              );
              break;
              case "R":
              this.route.navigateByUrl("Receptionist");
              this.authService.setCredentials(
                responseData.userId,
                responseData.token,

                responseData.role,
                responseData.email
              );


              break;
          }
          console.log(responseData);
        });
    }
    if (this.passwordForgot) {
      this.authService
        .sendCode(this.form.get("email").value)
        .subscribe(responseData => {
          if (responseData.message == 0) {
            //alert("Invalid Email");
            Swal.fire({
              type: 'error',
              title: 'oops...',
              text: 'Login credentials inValid',
              //footer: '<a href>Why do I have this issue?</a>'
            });
            //Swal.fire("Good job!", "You clicked the button!", "success");
          } else {
            Swal.fire({
              type: 'success',
              title: 'Email sent',
              text: 'Please check',
              //footer: '<a href>Why do I have this issue?</a>'
            })
            //alert("Email sent successfully");
            this.passwordForgot = false;
          }
          console.log(responseData);
        });
    }
    //console.log(this.form.get("email").value + "123");
  }

  isLoggedIn() {
    return this.loggedin;
  }

  forgotpassword() {
    this.passwordForgot = true;
  }

}