import { Component, OnInit } from '@angular/core';
import {first} from 'rxjs/operators';
import {CustomerService} from '../../service/customer/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errorMessage = '';

  constructor(
    public cs: CustomerService,
    public router: Router) {
  }
  ngOnInit(): void {
  }

  signup(e) {
    this.cs.signin(e.target.email.value, e.target.password.value).pipe(first()).subscribe(() => {
      this.router.navigateByUrl('');
    },(err) => {
      this.errorMessage = err;
      setTimeout(() => this.errorMessage = '', 2000);
    });
  }
}
