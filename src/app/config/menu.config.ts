import { MenuItem } from 'primeng/api';
export const mainMenu: MenuItem[] = [
  {
    label: 'Landing page',
    items: [
      {
        label: 'landing 79270',
        routerLink: 'landing-79270'
      }

    ]
  },
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
