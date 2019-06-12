import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormGroup, FormBuilder } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Customer } from "../../modules/Customer";
import { PasswordValidator } from 'src/app/validators';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})


export class RegisterComponent implements OnInit {

  form1:FormGroup;

  ngOnInit() {this.createForm();}

  constructor(private authService: AuthService,private fb: FormBuilder) {}
   
  
  // matching passwords validation
   matching_passwords_group = new FormGroup({
    password: new FormControl('', Validators.compose([Validators.minLength(5), Validators.required])),
    confirmpassword: new FormControl('', Validators.required)}, 
    (formGroup: FormGroup) => {
    return PasswordValidator.areEqual(formGroup);
  });

  //user validation
  createForm() {
  this.form1 = this.fb.group({
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    password: new FormControl('',Validators.compose( [Validators.required,Validators.minLength(6)])),
    userName: new FormControl('',Validators.compose([Validators.required,Validators.pattern("[A-Za-z]*")])),
    gender: new FormControl('', [Validators.required]),
    // lastName: new FormControl('', Validators.compose([Validators.required,Validators.pattern("[A-Za-z]*")])),
    // confirmpassword:new FormControl(),
    // matching_passwords: this.matching_passwords_group,
    // terms: new FormControl(false, Validators.pattern('true'))
  } );

}
nameInValid() {
  console.log(this.form1.get("name").invalid);
  return this.form1.get("name").invalid;
}

emailInValid() {
  return this.form1.get("email").invalid;
}

passwordInValid() {
  return this.form1.get("password").invalid;
}

 
  signup() {
    if (
      (this.nameInValid())
    ) {
      console.log(
        this.form1.get("userName").value 
      );
      alert("Something wrong with the name");
    }
    else if(this.passwordInValid())
    {
      alert("Something wrong with the password");

    }
    else if(this.emailInValid())
    {
      alert("Something wrong with the email");

    }
      else
      {

      let customer: Customer = {
        email: this.form1.get("email").value,
        password: this.form1.get("password").value,
        userName: this.form1.get("userName").value,
        gender: this.form1.get("gender").value
    //     lastName: this.form1.get("lastName").value,
    //     address: this.form.get("address").value,
    //     city: this.form.get("city").value,
    //     district: this.form.get("district").value,
    //     mobileno: this.form.get("mobileno").value,
        

      };
      console.log(customer);
      this.authService.signup(customer);
    }
   }
      
   }
   
  
