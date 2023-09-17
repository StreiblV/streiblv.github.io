import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {DrawingComponent} from './drawings/drawing.component';
import {AnimationComponent} from './animations/animation.component';
import {PhotographyComponent} from './photography/photography.component';
import {NavrailComponent} from './navrail/navrail.component';
import {NavbarComponent} from './navbar/navbar.component';
import {MoreComponent} from './more/more.component';
import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {NgOptimizedImage} from "@angular/common";
import { GalleryComponent } from './drawings/gallery/gallery.component';
import { ModelsComponent } from './models/models.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    DrawingComponent,
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
    HttpClientModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
