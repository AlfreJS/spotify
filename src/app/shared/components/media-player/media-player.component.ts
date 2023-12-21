import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { ITrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent {

  mockCover: ITrackModel = {
    cover:"",
    album:"Tour 2023",
    name:"Music 1",
    url:"",
    _id: 1
  }
}
