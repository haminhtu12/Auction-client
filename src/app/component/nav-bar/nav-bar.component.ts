import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isCollapse = true;
  constructor(public router: Router) { }
  user: {
    email: string,
    pass: string,
    fullName: string,
  };
  fullName = '';
  ngOnInit(): void {
    this.user = {
      email: '',
      pass: '',
      fullName: '',
    };
    console.log(localStorage.getItem('fullName'));
    if (localStorage.getItem('fullName') != null) {
        this.user.fullName = localStorage.getItem('fullName');
        this.fullName = localStorage.getItem('fullName');
    }
    }
  tooggleMenu() {
    this.isCollapse = !this.isCollapse;
  }
  logout(){
    // localStorage.removeItem('user');
    localStorage.clear();
    this.user = null;
    this.fullName = null;
    window.location.reload();

  }

}
