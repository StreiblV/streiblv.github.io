import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutMeComponent} from "./about-me/about-me.component";
import {ArtworkComponent} from "./artworks/artwork.component";
import {AnimationComponent} from "./animations/animation.component";
import {PhotographyComponent} from "./photography/photography.component";
import {MoreComponent} from "./more/more.component";
import {ModelsComponent} from "./models/models.component";

const routes: Routes = [
  {
    path: "home",
    component: AboutMeComponent
  },
  {
    path: "artwork",
    component: ArtworkComponent
  },
  {
    path: "animation",
    component: AnimationComponent
  },
  {
    path: "models",
    component: ModelsComponent
  },
  {
    path: "photography",
    component: PhotographyComponent
  },
  {
    path: "more",
    component: MoreComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
