import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
<<<<<<< HEAD
import { HomeComponent } from './pages/home/home.component';
import { ProductdetailComponent } from './pages/productdetail/productdetail.component';
=======
import { AppRoutingModule } from './app.routes';
>>>>>>> 219c99138f8ec53a7a0c0fd2e49b4021254b4fb7

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ProductdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
