import { MenuItem } from 'primeng/api';
export const mainMenu: MenuItem[] = [
  {
    label: 'Игры',
    items: [
      {
        label: 'Крестики-нолики',
        routerLink: 'tick-tack-toe'
      },
      {
        label: 'Однорукий бандит',
        routerLink: 'bandit'
      }
    ]
  },
  {
    label: 'Examples',
    routerLink: 'exmpales'
  }

];
