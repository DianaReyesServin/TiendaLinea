import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Producto } from 'src/app/models/models';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styles: []
})
export class ProductdetailComponent implements OnInit {
  misdatos: Producto={};
  categoria: string="";
  constructor(private router:ActivatedRoute, private productSvc: ProductsService) {
    this.router.params.subscribe(params=>{
      const code=params['code'];
      this.categoria=params['category'];
      this.productSvc.getByCode(code).subscribe((data:Producto)=>{
        this.misdatos=data;
      })
    })
   }

  ngOnInit() {
  }

}
