import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
 
  public isUpperCase:boolean=false;
  public sortBy:keyof Hero|undefined|''="";

  public heroes:Hero[]=[{
    name:"Superman",
    canFly:true,
    color:Color.red
  },
  {
    name:"Batman",
    canFly:false,
    color:Color.black
  },
  {
    name:"Robin",
    canFly:false,
    color:Color.green
  }
];

  toggleUpperCase(){
    this.isUpperCase=!this.isUpperCase;
  }

  changeOrder(value:keyof Hero){
   this.sortBy=value; 
  }

}
