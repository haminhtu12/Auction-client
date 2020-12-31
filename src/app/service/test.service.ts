import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }
  public findAll(): Observable<any> {
    const url = 'Api/Customer';
    return this.http.get(url);
  }
}
