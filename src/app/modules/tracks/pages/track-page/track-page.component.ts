import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import * as dataRaw from '../../../../data/tracks.json'
import { ITrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-track-page',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './track-page.component.html',
  styleUrl: './track-page.component.css'
})

export class TrackPageComponent {

  ngOnInit():void{
    const {data} = (dataRaw as any).default;
    this.mockTrackList = data
  }

  mockTrackList: Array<ITrackModel>  = []

}

