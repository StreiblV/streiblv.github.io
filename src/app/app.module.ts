import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {ArtworkComponent} from './artworks/artwork.component';
import {AnimationComponent} from './animations/animation.component';
import {PhotographyComponent} from './photography/photography.component';
import {NavrailComponent} from './navrail/navrail.component';
import {NavbarComponent} from './navbar/navbar.component';
import {MoreComponent} from './more/more.component';
import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {HashLocationStrategy, Location, LocationStrategy, NgOptimizedImage} from "@angular/common";
import { GalleryComponent } from './artworks/gallery/gallery.component';
import { ModelsComponent } from './models/models.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ArtworkComponent,
    AnimationComponent,
    PhotographyComponent,
    NavrailComponent,
    NavbarComponent,
    MoreComponent,
    GalleryComponent,
    ModelsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [
    Location,
    {
      provide: LocationStrategy, useClass: HashLocationStrategy
    }
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {
}
