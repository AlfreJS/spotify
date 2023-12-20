import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MediaPlayerComponent } from '@shared/components/media-player/media-player.component';
import { SidebarComponent } from '@shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SidebarComponent, RouterOutlet, MediaPlayerComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
