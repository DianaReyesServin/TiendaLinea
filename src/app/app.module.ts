import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';

import { HomeComponent } from './pages/home/home.component';
import { ProductdetailComponent } from './pages/productdetail/productdetail.component';
import { ProductsComponent } from './pages/products/products.component';
import { CardsComponent } from './components/cards/cards.component';

import { AppRoutingModule } from './app.routes';
import { PagesnotfoundComponent } from './pages/pagesnotfound/pagesnotfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoriesComponent } from './pages/products/categories/categories.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ProductdetailComponent,
    ProductsComponent,
    CardsComponent,
    PagesnotfoundComponent,
    NavbarComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
