import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../../service/product/product.service';
import { Subscription } from 'rxjs';
import {interval} from 'rxjs';
import {filter} from 'rxjs/operators';
import {Tool} from '../../service/tool/tool';

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
          product.Timer = this.getDataDiff(currentDate, endTime);
          console.log(product.Timer);
        }
      });
    });
  }
   getDataDiff(startDate, endDate) {
    const diff = endDate.getTime() - startDate.getTime();
    const days = Math.floor(diff / (60 * 60 * 24 * 1000));
    const hours = Math.floor(diff / (60 * 60 * 1000)) - (days * 24);
    const minutes = Math.floor(diff / (60 * 1000)) - ((days * 24 * 60) + (hours * 60));
    const seconds = Math.floor(diff / 1000) - ((days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60));
    return { day: days, hour: hours, minute: minutes, second: seconds };
  }
  ngOnDestroy() {
    this.subscriptionTimer.unsubscribe();
  }
}
