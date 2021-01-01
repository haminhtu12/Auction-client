import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product/product.service';
import {Product} from '../../model/entity/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[];

  constructor( private productService: ProductService) { }

  ngOnInit(): void {
   this.getList();
  }
  // tslint:disable-next-line:typedef
  getList(){
    this.productService.findAll().subscribe(res => {
      if (res) {
        this.products = res;
      }
      console.log('â', this.products);
    });
  }
}
