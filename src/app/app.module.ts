import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {DrawingComponent} from './drawings/drawing.component';
import {AnimationComponent} from './animations/animation.component';
import {PhotographyComponent} from './photography/photography.component';
import {NavrailComponent} from './navrail/navrail.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {MoreComponent} from './more/more.component';
import {NgModule} from "@angular/core";

@NgModule({
    declarations: [
        AppComponent,
        AboutMeComponent,
        DrawingComponent,
        AnimationComponent,
        PhotographyComponent,
        NavrailComponent,
        NavbarComponent,
        HomeComponent,
        MoreComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
