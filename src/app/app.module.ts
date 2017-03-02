import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import {YoutubeService} from "./services/youtube.service";
import { TrusturlPipe } from './pipes/trusturl.pipe';
import { FaderComponent } from './fader/fader.component';
import { FacebookComponent } from './facebook/facebook.component';
import { SodexoComponent } from './sodexo/sodexo.component';
import {SodexoService} from "./services/sodexo.service";

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    TrusturlPipe,
    FaderComponent,
    FacebookComponent,
    SodexoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [YoutubeService, SodexoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
