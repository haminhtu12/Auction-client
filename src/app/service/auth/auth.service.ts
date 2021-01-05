import { Injectable } from '@angular/core';
import {AngularFireLiteAuth, AngularFireLiteFirestore} from 'angularfire-lite';
import {first, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireLiteAuth, public fs: AngularFireLiteFirestore, private http: HttpClient) { }
  isAuth() {
    return this.auth.isAuthenticated();
  }
   login(): Observable<any> {
     const url = 'Api/Customer';
     return this.http.get(url);
   }

  signin(email, pass) {
    return this.auth.signin(email, pass);
  }

  signup(email, pass) {
    return this.auth.signup(email, pass);
  }


  getCities() {
    return this.auth.uid().pipe(switchMap((uid) => {
      return this.fs.read(`${uid}`);
    }));
  }

  addCity(name: string) {
    return this.auth.uid()
      .pipe(switchMap((uid) => {
        return this.fs
          .write(`${uid}/${name}`, {name, added: new Date()})
          .pipe(first());
      }), first());
  }
}
