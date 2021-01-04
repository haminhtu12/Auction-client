import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isCollapse = true;

  constructor() { }

  ngOnInit(): void {
  }
  tooggleMenu() {
    this.isCollapse = !this.isCollapse;
  }

}
