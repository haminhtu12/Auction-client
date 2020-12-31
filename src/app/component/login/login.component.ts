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
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getList();
  }
  login(e) {
    for (let  i= 0; i < this.response.length; i++) {
      if ((e.target.email.value == this.response[i].Email) && (e.target.password.value == this.response[i].Password)) {
        this.valid = true;
        break;
      }
    }
    if (this.valid){
      localStorage.setItem('email', e.target.email.value);
      localStorage.setItem('password', e.target.password.value);
    }
    this.valid = false;
  }
  getList(): any {
    this.customerService.findAll().subscribe(res => {
      this.response = res;
    });
  }
}
