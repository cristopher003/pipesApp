import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent implements OnInit {

  items: MenuItem[] =[];

  ngOnInit(): void {
    this.items = [
      { label: 'Pipes de Angular', icon: 'pi pi-desktop',
       items: [
          { label: 'Textos y Fechas',icon: 'pi pi-align-left', routerLink: '/', routerLinkActiveOptions: { exact: true } },
          { label: 'Numeros', icon: 'pi pi-dollar', routerLink: '/numbers' },
          { label: 'No comunes', icon: 'pi pi-globe', routerLink: '/uncommon' },
          { label: 'Ordenar', icon: 'pi pi-sort', routerLink: '/order' },
        ]},
      { 
        label: 'Pipes personalizados', 
        icon: 'pi pi-cog',
        items: [
          { label: 'Custom Pipes', icon: 'pi pi-cog', routerLink: '/custom' }
        ]
      }
  ];
  }

}
