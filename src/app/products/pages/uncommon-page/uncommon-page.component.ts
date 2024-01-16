import { Component } from '@angular/core';
import { interval } from 'rxjs'
@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  
  //i18n select
  public name: string = 'Zenon';
  public gender: 'male'|'female' = 'male';
public invitatioMap = {
  'male': 'invitarlo',
  'female': 'invitarla'
}

  changeClient():void{
    this.name = 'Melissa';
    this.gender = 'female';
  }

//i18Plural
  public clients: string[] = ['Maria', 'Pedro', 'Zenon', 'Ana', 'Claudia']
  public clientMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': "tenemos 2 personas esperando",
    'other': "tenemos # clientes esperando"

  }
  deleteClient(): void{
    this.clients.shift();
  }

  //keyvalue pipe
  public person = {
    name: 'Zenon',
    age: 36,
    address: 'Barcelona, Mataró'
  }

  //Async Pipe
  public myObservableTimer = interval(2000);

  public promiseValue = new Promise((resolve,reject)=>{
    setTimeout(()=> {
      resolve('Tenemos data en la promesa')
    },3500)
  })
}
