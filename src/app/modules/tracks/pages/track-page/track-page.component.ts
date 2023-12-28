import { Component, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { ITrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-track-page',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './track-page.component.html',
  styleUrl: './track-page.component.css'
})

export class TrackPageComponent implements OnDestroy {

  trackTrending: ITrackModel[] = [];
  tracksRandom: ITrackModel[] = [];

  listObservers$: Subscription[] = [];

  constructor(private trackService:TrackService){}
 
  ngOnInit():void{
    const oberserverTrending$ = this.trackService.dataTracksTrendings$
    .subscribe(res =>{
      this.trackTrending = res
      this.tracksRandom = res
      console.log('canciones==', res);
    })

    const oberserverRandom$ = this.trackService.dataTracksRandom$
    .subscribe(res =>{
      this.tracksRandom = [...this.tracksRandom, ...res]

      console.log('canciones random==', res);
    });

    this.listObservers$ = [oberserverTrending$, oberserverRandom$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach( o => o.unsubscribe)
  }

}

