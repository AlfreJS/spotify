import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ITrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-card-player',
  standalone: true,
  imports: [NgClass],
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css'
})
export class CardPlayerComponent {
  @Input() track!:ITrackModel;
  @Input() mode: 'small' | 'big' = 'small';

  @Input() customImg:string='';
}
