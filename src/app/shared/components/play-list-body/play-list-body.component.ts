import { Component } from '@angular/core';
import * as dataRaw from '../../../data/tracks.json'
import { ITrackModel } from '@core/models/tracks.model';
import { NgTemplateOutlet } from '@angular/common';
import { OrderListPipe } from '@shared/pipe/order-list.pipe';

@Component({
  selector: 'app-play-list-body',
  standalone: true,
  imports: [NgTemplateOutlet, OrderListPipe],
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.css'
})
export class PlayListBodyComponent {

  tracks:ITrackModel[]=[];
  optionSort: {property: string | null, order: string} = {property: null, order: 'asc'};

  ngOnInit():void {
    const {data} : any = (dataRaw as any).default
    this.tracks = data
  }

  changeSort(property:string):void{
    const {order} = this.optionSort
    this.optionSort = {
      property: property,
      order : order === 'asc' ? 'desc' : 'asc'
    }
    console.log(this.optionSort)
  }
}
