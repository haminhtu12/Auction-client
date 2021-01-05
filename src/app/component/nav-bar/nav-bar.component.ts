import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isCollapse = true;
  constructor() { }
  user: {
    email: string;
    passWord: string;
  };
  ngOnInit(): void {
    this.user = {
      email : '',
      passWord : '',
    };
    console.log(localStorage.getItem('email'));
    if (localStorage.getItem('email') != null) {
        this.user.email  = localStorage.getItem('email');
    }
    if (localStorage.getItem('password') != null) {
      this.user.passWord  = localStorage.getItem('password');
    }
    }
  tooggleMenu() {
    this.isCollapse = !this.isCollapse;
  }
  logout(){
    localStorage.removeItem("user");
  }

}
