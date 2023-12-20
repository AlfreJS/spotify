import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracksRoutingModule } from './tracks-routing.module';
import { TrackPageComponent } from './pages/track-page/track-page.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TracksRoutingModule,
    TrackPageComponent
  ]
})
export class TracksModule { }
