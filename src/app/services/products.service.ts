import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/models';
import { Observable } from 'rxjs';

const URL_PRODUCTS='https://angular-products-mahv.firebaseio.com/productos.json';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { 


  }

  getAll(){
    return this.http.get(URL_PRODUCTS);
  }

  getCategory(category:string){
    return new Observable(observer=>{
      this.http.get(URL_PRODUCTS).subscribe((data:Producto[])=>{
        const filter = data.filter(item=>item.categoria==category || item.categoria.indexOf(category)>0);
        observer.next(filter);
      })
    });
  }

  getByCode(code:string){
    return new Observable(observer=>{
      this.getAll().subscribe((data:Producto[])=>{
        const filter = data.filter(item=>item.codigo==code);
        observer.next(filter[0]);
      })
    });
  }
}
