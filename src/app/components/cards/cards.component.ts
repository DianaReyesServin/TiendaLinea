import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/models/models';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styles: []
})
export class CardsComponent implements OnInit {
@Input () products:Producto[];
category: string = '';

  constructor() { }

  ngOnInit() {
  }
  colorLabel(precio: number){
    let color: string='';
   
    if (precio > 0 &&  precio <=30000)
    color ='warning';
    if (precio > 30000 &&  precio <=50000)
    color ='success';  
    if (precio > 50000)
    color = 'danger';
  
    return color;
  }


}
