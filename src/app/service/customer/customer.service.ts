import { Injectable } from '@angular/core';
import {AngularFireLiteAuth, AngularFireLiteFirestore} from 'angularfire-lite';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(public auth: AngularFireLiteAuth, public fs: AngularFireLiteFirestore) {
  }

  isAuth() {
    return this.auth.isAuthenticated();
  }

  signin(email, pass) {
    return this.auth.signin(email, pass);
  }

  signup(email, pass) {
    // return this.auth.signup(email, pass);
    console.log(this.getUsers());
    return true;
  }
  getUsers(): Observable<any[]> {
    // get users from api
    return this.http.get('/Api/Customer', options)
      .map((response: Response) => response.json());
  }

}
