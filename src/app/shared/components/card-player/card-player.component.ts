import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ITrackModel } from '@core/models/tracks.model';
import { ImgBrokenDirective } from '@shared/directives/img-broken.directive';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  standalone: true,
  imports: [NgClass, ImgBrokenDirective],
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css'
})
export class CardPlayerComponent {
  @Input() track!:ITrackModel;
  @Input() mode: 'small' | 'big' = 'small';
  @Input() customImg:string='';

  constructor(private _multimediaService: MultimediaService){

  }

  sendPlay(track:ITrackModel):void {
    console.log('enviando cancion al reproductor ', track);

    this._multimediaService.callback.emit(track);
  }
  
}
