import { MenuItem } from 'primeng/api';
export const mainMenu: MenuItem[] = [
  {
    label: 'Игры',
    items: [
      {
        label: 'Крестики-нолики',
        routerLink: 'tick-tack-toe'
      }
    ]
  }

];
