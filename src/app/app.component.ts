import {Component, OnInit} from '@angular/core';
import {TestService} from './service/test.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ProjectAuction';
  response: any;
  constructor(private testService: TestService) {
  }

  ngOnInit(): void {
    this.getList();
  }
  getList(): void {
    this.testService.findAll().subscribe(res => {
      this.response = res;
    });
  }
}
