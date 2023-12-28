import { NgTemplateOutlet } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { ITrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnDestroy {

  mockCover: ITrackModel = {
    cover:"",
    album:"Tour 2023",
    name:"Music 1",
    url:"",
    _id: 1
  }

  listObservers:Subscription[] = [];
 

  constructor( private _multimediaService:MultimediaService){}

  ngOnInit(){
    const observer = this._multimediaService.callback.subscribe((response:ITrackModel)=>{
      console.log("recibiendo cancion: " + response)
    })

    this.listObservers = [observer]
  }

  ngOnDestroy():void{
    this.listObservers.forEach(observer=>observer.unsubscribe)
    console.log("BOOOOOM!!!")
  }
}
