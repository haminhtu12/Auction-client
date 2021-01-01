import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient , ) { }
  public findAll(): Observable<any> {
    const url = 'Api/ProductAuction';
    return this.http.get(url);
  }

}
