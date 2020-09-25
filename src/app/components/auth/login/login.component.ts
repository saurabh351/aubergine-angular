import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RegexEnum } from 'src/enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public submitted = false;

  constructor(
    public fb: FormBuilder,
    public router: Router,
    public activateRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.resetLoginForm();
  }

  // convenience getter for easy access to form fields
  get form() { return this.loginForm.controls; }

  resetLoginForm() {
    this.loginForm = this.fb.group({
      email: [
        null,
        [
          Validators.required,
          Validators.email,
          Validators.pattern(RegexEnum.email)
        ]
      ],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ]
    })
  }

  /**
  * doLogin() - Login
  */
  async doLogin() {
    this.submitted = true;
    if (this.loginForm.valid) {
      try {
        this.loginForm.get('email').setValue(this.loginForm.get('email').value.toLowerCase());
        this.router.navigate(['/questions']);
      } catch (err) {
        this.submitted = false;
      }
    }
  }

}
