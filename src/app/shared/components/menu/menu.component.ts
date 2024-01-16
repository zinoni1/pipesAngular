import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {
 public menuItems: MenuItem[] = [];

  ngOnInit(){
    this.menuItems = [
      {
        label: 'Pipes de Angular', 
        icon: 'pi pi-desktop',
        items: [
      {
        label: 'Textos y Fechas',
        icon: 'pi pi-dollar',
        routerLink: '/'
      },
      {
        label: 'Números',
        icon: 'pi pi-dollar',
        routerLink: 'numbers'
      },
      {
        label: 'No comunes',
        icon: 'pi pi-globe',
        routerLink: 'uncommon'
      }
      ]
    },
    {
      label: 'Pipes personalizados',
      icon: 'pi pi-cog',
      items: [
        {
          label: 'Custom piipes',
          icon: 'pi pi-cog',
          routerLink: 'custom'
        }
      ]
    }
    ]
  }
}
