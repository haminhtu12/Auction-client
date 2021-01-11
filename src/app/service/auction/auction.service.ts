import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  constructor(private http: HttpClient , ) { }
  public findAll(): Observable<any> {
    const url = 'Api/Auction';
    return this.http.get(url);
  }
}
