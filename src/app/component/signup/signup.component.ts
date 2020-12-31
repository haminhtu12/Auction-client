import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errorMessage = '';
  constructor() { }

  ngOnInit(): void {
  }
  signup(e) {
    // this.fb.signin(e.target.email.value, e.target.password.value).pipe(first()).subscribe(() => {
    //   this.router.navigateByUrl('');
    // },(err) => {
    //   this.errorMessage = err;
    //   setTimeout(() => this.errorMessage = '', 2000);
    // });
  }
}
