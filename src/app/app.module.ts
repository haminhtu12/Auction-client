import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './component/test/test.component';
import {AppRoutingModule, routes} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireLite} from 'angularfire-lite';
import {environment} from '../environments/environment';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import {FormsModule} from '@angular/forms';
import { ErrorComponent } from './component/ui/error/error.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import {ListProductComponent} from './component/list-product/list-product.component';
import {CarouselComponent} from './component/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
@NgModule({

  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent,
    SignupComponent,
    ErrorComponent,
    HomeComponent,
    ListProductComponent,
    CarouselComponent,
    FooterComponent,
    HeaderComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // AngularFireLite.forRoot(environment.config),
    RouterModule.forRoot(routes),
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
