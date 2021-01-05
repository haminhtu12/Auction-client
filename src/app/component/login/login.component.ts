import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../service/customer/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage = '';
  email: string;
  pass: string;
  response: any;
  valid = false;
  user: {
    email: string,
    pass: string,
    fullName: string,
  };
  constructor(private customerService: CustomerService, public router: Router) { }

  ngOnInit(): void {
    this.user = {
      email: '',
      pass: '',
      fullName: '',
    };
  }
  login(e) {
    const params = {
      email: e.target.email.value,
      pwd: e.target.password.value,
    };
    this.customerService.login(params).subscribe(res => {
       this.user.email = res.Email;
       this.user.pass = res.Password;
       this.user.fullName = res.FullName;
       // @ts-ignore
       localStorage.setItem('email', this.user.email);
       localStorage.setItem('pass', this.user.pass);
       localStorage.setItem('fullName', this.user.fullName);
       this.router.navigate(['']);
       window.location.reload();
    });

    if (this.user.fullName != ''){
    }
  }
  // getList(): any {
  //   this.customerService.findAll().subscribe(res => {
  //     this.response = res;
  //   });
  // }
}
