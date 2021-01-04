import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {interval, Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';
import {Tool} from '../../service/tool/tool';
import {ProductService} from '../../service/product/product.service';
import {FormGroup} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-auction-product',
  templateUrl: './auction-product.component.html',
  styleUrls: ['./auction-product.component.css']
})
export class AuctionProductComponent implements OnInit {
  products: any[];
  productDetail: any;
  subscriptionTimer: Subscription;
  auctionForm: FormGroup;
  auctionHistorys: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private toastrService: ToastrService,
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
      const currentDate = new Date();
      const startTime   = new Date(this.productDetail.StartDateTime);
      const endTime     = new Date(this.productDetail.EndDateTime);
      if (currentDate.getTime() < startTime.getTime()) {
        this.productDetail.Status = 0;
      } else if (currentDate.getTime() > endTime.getTime()) {
        this.productDetail.Status = 2;
      } else {
        this.productDetail.Status = 1;
        this.productDetail.Timer = Tool.getDataDiff(currentDate, endTime);
      }
    });

  }
  getList(){
    this.productService.findAll().subscribe(res => {
      if (res) {
        this.products = res;
      }
    });
  }
  // auction() {
  //   // const user = this.user$.value;
  //   // if (user == null) {
  //   //   this.toastrService.error('Vui lòng đăng nhập để đấu giá');
  //   //   return;
  //   // }
  //   // if (this.product.auctionCondition.vipAccount && !user.vipMember) {
  //   //   this.toastrService.error('Bạn cần nâng vip để thực hiện phiên đấu giá');
  //   //   return;
  //   // }
  //   const price = this.auctionForm.get('auctionPrice').value;
  //   if (this.auctionHistorys && this.auctionHistorys.length > 1) {
  //     const topPrice = this.auctionHistorys[0].price;
  //     if (this.productDetail.priceStep) {
  //       if (price < this.productDetail.priceStep + topPrice) {
  //         this.toastrService.error('Mức chênh lệch với giá cao nhất phải bằng hoặc lớn hơn ' + (this.productDetail.priceStep + topPrice) + ' (giá cao nhất + bước giá)');
  //         return;
  //       }
  //     } else if (price < topPrice) {
  //       this.toastrService.error('Lượt đấu giá phải lớn hơn giá cao nhất hiện tại (' + topPrice + ')');
  //       return;
  //     }
  //
  //   } else if (this.productDetail.StartingPrice && price < this.productDetail.StartingPrice) {
  //     this.toastrService.error('Lượt đấu giá phải lớn hơn giá sàn (' + this.productDetail.StartingPrice + ')');
  //     return;
  //   }
  //
  //    this.addAuction.mutate({
  //      ownerId: this.productDetail.SaleManID,
  //      createTime: new Date(this.productDetail.Created),
  //
  //
  //    })
  //      .subscribe(result => {
  //        if (result.data.auction.success) {
  //         this.toastrService.success(result.data.auction.message);
  //        } else {
  //         this.toastrService.error(result.data.auction.message);
  //       }
  //
  //     });

 // }

}
