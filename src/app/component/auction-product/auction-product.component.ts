import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {interval, Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';
import {Tool} from '../../service/tool/tool';
import {ProductService} from '../../service/product/product.service';

@Component({
  selector: 'app-auction-product',
  templateUrl: './auction-product.component.html',
  styleUrls: ['./auction-product.component.css']
})
export class AuctionProductComponent implements OnInit {
  products: any[];
  productDetail: any;
  subscriptionTimer: Subscription;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.products = [];
    this.getList();
    let SaleManID;
    let Created;
    let ID;
    this.route.paramMap.subscribe(paramMap => {
       SaleManID = paramMap.get('SaleManID');
       Created = new Date(paramMap.get('Created'));
       ID =  paramMap.get('ID');
    });
    // @ts-ignore
    this.subscriptionTimer = interval(1000).pipe(filter(() => Boolean(this.products))).subscribe(() => {
      this.productDetail = this.products.find(element => element.ID == ID);
      console.log(this.productDetail);
    });

  }
  getList(){
    this.productService.findAll().subscribe(res => {
      if (res) {
        this.products = res;
      }
    });
  }

}
