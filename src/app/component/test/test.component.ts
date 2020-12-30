import { Component, OnInit } from '@angular/core';
import {TestService} from '../../service/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  response: any;
  constructor(      private testService: TestService,
  ) { }

  ngOnInit(): void {
    this.getList();
  }
  getList(): void {
    this.testService.findAll().subscribe(res => {
      this.response = res;
    });
  }

}
