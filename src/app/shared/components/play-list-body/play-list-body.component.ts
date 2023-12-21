import { Component } from '@angular/core';
import * as dataRaw from '../../../data/tracks.json'
import { ITrackModel } from '@core/models/tracks.model';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-play-list-body',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.css'
})
export class PlayListBodyComponent {

  tracks:ITrackModel[]=[];

  ngOnInit():void {
    const {data} : any = (dataRaw as any).default
    this.tracks = data
  }
}
