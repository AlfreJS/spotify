import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TrackService } from '@modules/tracks/services/track.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})

export class SidebarComponent {
  
  constructor(private router:Router, private trackService:TrackService){}
  menus: Array<Menu> = []
  links: Array<AccessLink> = []
  options: Array<CustomOptions> = []

  ngOnInit():void{
    this.menus = [
      {
        name: "Home",
        icon: "uil uil-estate",
        router:['/']
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
  
    this.links = [
      {
        name: "Crear lista",
        icon: "uil-plus-square"
      },
      {
        name: "Canciones que te gustan",
        icon: "uil-heart-medical"
      }
    ]
  
    this.options = [
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

    this.trackService.dataTracksRandom$
    .subscribe((res:any) =>{
      this.options.push({
        name:res[0].name,
        router:[]
      })
    })

  }

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