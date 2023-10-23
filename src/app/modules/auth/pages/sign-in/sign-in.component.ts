import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from "../../../../services/api/auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  passwordTextType!: boolean;
  
  constructor(private readonly _formBuilder: FormBuilder, private readonly _router: Router, private readonly _authService: AuthService) {
  }
  
  ngOnInit(): void {
    this.form = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  
  get f() {
    return this.form.controls;
  }
  
  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }
  
  onSubmit() {
    console.log(this.form.value, this.form.invalid)
    this.submitted = true;
    const {email, password} = this.form.value;
    
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    this._authService.auth(email, password).subscribe((response: any) => {
      console.log(response);
      localStorage.setItem('token', response.token)
      this._router.navigate(['/dashboard']).then(r => console.log(r))
    }, (error) => {
      console.log(error)
      alert(error.error.message)
    })
    //
  }
}
