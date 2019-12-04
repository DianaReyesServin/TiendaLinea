import { Component, OnInit } from '@angular/core';
import { Producto} from 'src/app/models/models';

import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styles: []
})
export class CategoriesComponent implements OnInit {

  misdatos: Producto[] = [];
  category: string = '';

 
  constructor(private router: ActivatedRoute, private ProductsService: ProductsService) { 
    this.router.params.subscribe(params =>{
      this.category = params['category'];

      this.ProductsService.getCategory(this.category).subscribe((data: Producto[]) =>{
        this.misdatos = data;
      });
    });
  }
  ngOnInit() {
  }
 
 
  
}
