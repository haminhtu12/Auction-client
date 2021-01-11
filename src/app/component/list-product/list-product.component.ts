import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../../service/product/product.service';
import { Subscription } from 'rxjs';
import {interval} from 'rxjs';
import {filter} from 'rxjs/operators';
import {Tool} from '../../service/tool/tool';
import {AuctionService} from '../../service/auction/auction.service';
import _ from 'lodash';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  @Input()
  products: any[];
  subscriptionTimer: Subscription;
  listAuction: any;
  test: {
    Created: any,
  };
  constructor(private auctionService: AuctionService) { }
  ngOnInit() {
    // tslint:disable-next-line:prefer-const one-variable-per-declaration
    this.getListAuction();
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
          product.currentAuction = this.listAuction.filter(v => v.ProAutionID == product.ID);
          product.currentBird = product.currentAuction.length;
          // product.Created = product.currentAuction.map(a => a.Created);
          product.currentAuction.forEach( e => e.Created =  new Date(e.Created));
          product.max = product.currentAuction[0];
          for (let i =0 ; i < product.currentAuction.length - 1 ; i++){
            if (product.max.Created < product.currentAuction[i].Created) product.max =  product.currentAuction[i];
          }
          product.currentDate = currentDate;
          // product.lastBird = Tool.getDataDiff(currentDate, product.max.Created);
        }
      });
    });
  }
  ngOnDestroy() {
    this.subscriptionTimer.unsubscribe();
  }
  getListAuction(){
    this.auctionService.findAll().subscribe(res => {
      if (res) {
        this.listAuction = res;
      }
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
}
