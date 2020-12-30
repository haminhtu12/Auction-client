import { Component, OnInit } from '@angular/core';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';
import {CustomerService} from '../../service/customer/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage = '';
  constructor(
    public cs: CustomerService,
    public router: Router) {
  }

  ngOnInit(): void {
  }

  login(e) {
    this.cs.signin(e.target.email.value, e.target.password.value).pipe(first()).subscribe(() => {
      this.router.navigateByUrl('');
    },(err) => {
      this.errorMessage = err;
      setTimeout(() => this.errorMessage = '', 2000);
    });
  }
}
