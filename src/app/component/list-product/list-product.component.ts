import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../../service/product/product.service';
import { Subscription } from 'rxjs';
import {interval} from 'rxjs';
import {filter} from 'rxjs/operators';
import {Tool} from '../../service/tool/tool';
import {log} from "util";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  @Input()
  products: any[];
  subscriptionTimer: Subscription;

  constructor() { }

  ngOnInit() {
    this.subscriptionTimer = interval(1000).pipe(filter(() => Boolean(this.products))).subscribe(() => {
      this.products.forEach(product => {
        const currentDate = new Date();
        const startTime   = new Date(product.StartDateTime);
        const endTime     = new Date(product.EndDateTime);
        if (currentDate.getTime() < startTime.getTime()) {
          product.Status = 0;
        } else if (currentDate.getTime() > endTime.getTime()) {
          product.Status = 2;
        } else {
          product.Status = 1;
          product.Timer = Tool.getDataDiff(currentDate, endTime);
        }
      });
    });
  }
  ngOnDestroy() {
    this.subscriptionTimer.unsubscribe();
  }
}
