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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ErrorComponent } from './component/ui/error/error.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import {ListProductComponent} from './component/list-product/list-product.component';
import {CarouselComponent} from './component/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { AuctionProductComponent } from './component/auction-product/auction-product.component';
import { ToastrModule } from 'ngx-toastr';
import { ProfileComponent } from './component/profile/profile.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { AllProductComponent } from './component/all-product/all-product.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';

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
    NavBarComponent,
    AuctionProductComponent,
    ProfileComponent,
    DashboardComponent,
    AboutComponent,
    ContactComponent,
    AllProductComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // AngularFireLite.forRoot(environment.config),
    RouterModule.forRoot(routes),
    FormsModule,
    NgbModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
