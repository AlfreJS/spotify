import { Component, Input } from '@angular/core';
import { CardPlayerComponent } from '../card-player/card-player.component';
import { JsonPipe, NgClass } from '@angular/common';
import { ITrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-section-generic',
  standalone: true,
  imports: [CardPlayerComponent, NgClass, JsonPipe],
  templateUrl: './section-generic.component.html',
  styleUrl: './section-generic.component.css'
})
export class SectionGenericComponent {

  @Input() title: string = ''
  @Input() mode: 'small' | 'big' = 'big'
  @Input() dataTracks: Array<ITrackModel> = []
}
