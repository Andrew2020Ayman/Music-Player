import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { HeaderComponent } from './layout/header/header.component';

import { OwlModule } from "ngx-owl-carousel";
import { BandLibComponent } from './view/band-lib/band-lib.component';

/* import { NgxAudioPlayerModule } from 'ngx-audio-player'; */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './view/about/about.component';
import { ContactComponent } from './view/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BandLibComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule,
    /* NgxAudioPlayerModule, */
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule   { 

}
