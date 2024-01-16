import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MenubarModule } from 'primeng/menubar';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    MenubarModule
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
