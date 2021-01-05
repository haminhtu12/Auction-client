import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../service/customer/customer.service';

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
  user: any;
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.user = null;
    this.getList();
  }
  login(e) {
    const params = {
      email: e.target.email.value,
      pwd: e.target.password.value,
    };
     this.customerService.login(params).subscribe(res => {
       this.user = res;
       console.log(this.user);
     });
    if (this.user != null){
      localStorage.setItem('user', this.user);
    }
    this.valid = false;
  }
  getList(): any {
    this.customerService.findAll().subscribe(res => {
      this.response = res;
    });
  }
}
