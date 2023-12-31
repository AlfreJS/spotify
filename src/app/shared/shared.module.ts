import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule, SidebarComponent, MediaPlayerComponent, HeaderUserComponent, CardPlayerComponent, SectionGenericComponent
  ],
  exports: [SidebarComponent, MediaPlayerComponent, HeaderUserComponent, CardPlayerComponent, SectionGenericComponent]
})
export class SharedModule { }
