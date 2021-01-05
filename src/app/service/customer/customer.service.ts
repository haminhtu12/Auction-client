import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  // constructor(public auth: AngularFireLiteAuth, public fs: AngularFireLiteFirestore) {
  // }
  constructor(private http: HttpClient , ) { }

  // isAuth() {
  //   return this.auth.isAuthenticated();
  // }

  signin(email, pass) {
    // return this.auth.signin(email, pass);
  }

  signup(email, pass) {
    // // return this.auth.signup(email, pass);
    // console.log(this.getUsers());
    // return true;
  }
  login(params): Observable<any> {
    return this.http.get('/Api/Customer', {params});
  }
  public findAll(): Observable<any> {
    const url = 'Api/Customer';
    return this.http.get(url);
  }
  checkusernameandpassword(uname: string, pwd: string) {
    if (uname === 'admin' /*&& pwd === 'admin1234'*/) {
      localStorage.setItem('username', 'admin');
      return true;
    } else {
      return false;
    }
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('username');
  }
}
