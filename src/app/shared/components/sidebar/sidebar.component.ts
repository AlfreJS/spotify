import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})

export class SidebarComponent {
  
  menus: Array<Menu> = [
    {
      name: "Home",
      icon: "uil uil-estate",
      router:['/auth']
    },
    {
      name: "Buscar",
      icon: "uil uil-search-alt",
      router: ['history']
    },
    {
      name: "Tu biblioteca",
      icon: "uil uil-chart",
      router: ['favorites']
    }
  ];

  links: Array<AccessLink> = [
    {
      name: "Crear lista",
      icon: "uil-plus-square"
    },
    {
      name: "Canciones que te gustan",
      icon: "uil-heart-medical"
    }
  ]

  options: Array<CustomOptions> = [
    {
      name: "Mi lista n°1",
      router: ['/']
    },
    {
      name: "Mi lista n°2",
      router: ['/']
    },
    {
      name: "Mi lista n°3",
      router: ['/']
    },
    {
      name: "Mi lista n°4",
      router: ['/']
    }
  ]

}

type Menu = {
  name: string;
  icon: string;
  router:string[]
}

type AccessLink = {
  name: string;
  icon: string
}

type CustomOptions = {
  name: string;
  router: string[]
}