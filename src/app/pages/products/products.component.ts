import { Component, OnInit } from '@angular/core';
import {Producto} from 'src/app/models/models';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {
  
  misdatos: Producto[] = [];

  constructor(private ProductsService: ProductsService) {
    this.ProductsService.getAll().subscribe((data: Producto[])=> {
      this.misdatos = data;
    })

    this.ProductsService.getCategory('Cars').subscribe((data: Producto[]) => {
      this.misdatos = data;
    });
   }

  ngOnInit() {
  }

}
