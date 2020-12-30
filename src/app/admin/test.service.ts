import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }
  public findAll(): Observable<any> {
    const url = 'Api/TypeBanner';
    console.log('this.http.get(url)', this.http.get(url));
    return this.http.get(url);
  }
}
