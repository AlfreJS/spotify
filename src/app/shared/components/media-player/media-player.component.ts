import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent {

  mockCover = {
    cover:"",
    album:"Tour 2023",
    name:"Music 1"
  }
}
