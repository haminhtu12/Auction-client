import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../../service/product/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  @Input()
  products: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
