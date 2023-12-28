import { Injectable } from '@angular/core';
import { ITrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import * as dataRaw from '../../../data/tracks.json'

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  dataTracksTrendings$: Observable<ITrackModel[]> = of([]);
  dataTracksRandom$: Observable<ITrackModel[]> = of([]);

  constructor() {
    const {data}: any = (dataRaw as any).default

    this.dataTracksTrendings$ = of(data);
    
    this.dataTracksRandom$ = new Observable(ob => {

      const trackExample: ITrackModel = {
        _id: 9,
        name: 'Bad Bunny',
        album: 'Sin fronteras',
        url: 'http://',
        cover: 'https://images0.persgroep.net/rcs/v-e6wVFpVogSX2VQ5bgQSHImXCc/diocontent/139299533/_fitwidth/763?appId=93a17a8fd81db0de025c8abd1cca1279&quality=0.8',
      }

      ob.next([trackExample])
    })
   }
}
