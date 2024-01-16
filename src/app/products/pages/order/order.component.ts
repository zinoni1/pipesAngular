import { Component } from '@angular/core';
import { Hero } from '../../interfaces/hero.inteface';
import { Color } from '../../interfaces/hero.inteface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  public isUpperCase: boolean = false
  public orderBy?: keyof Hero ;


  public heroes: Hero[] = [{
    name: 'Superman',
    canFly: true,
    color: Color.blue},
    {
      name: 'Batman',
      canFly: false,
      color: Color.black},
      {
        name: 'Daredevil',
        canFly: false,
        color: Color.red},
        {
          name: 'Robin',
          canFly: false,
          color: Color.red},
          {
            name: 'Linterna Verde',
            canFly: true,
            color: Color.green}
  ]

  toogleUpperCase():void {
    this.isUpperCase = !this.isUpperCase
  }

  changeOrder(value: keyof Hero){
    this.orderBy = value
  }
}
